import type { InlineConfig, ViteDevServer } from 'vite';
import type { ChildProcessWithoutNullStreams } from 'node:child_process';
import { spawn } from 'child_process';
import electronPath from 'electron';
import { build, createServer, createLogger, Logger } from 'vite';

// Shared config across multiple build watchers.
const sharedConfig: InlineConfig = {
  mode: 'development',
  build: { watch: {} },
};

const startDir = 'src';
const configFile = 'vite.config.ts';
const mainPath = `${startDir}/electron/${configFile}`;
const preloadPath = `${startDir}/preload/${configFile}`;
const corePath = `${startDir}/core/${configFile}`;
const rendererPath = `${startDir}/renderer/${configFile}`;
/**
 * Create a Vite build watcher that automatically recompiles when a file is
 * edited.
 */

class ServerRunner {
  logger: Logger;
  constructor() {
    this.logger = createLogger('info', { prefix: '[electron]' });
  }

  getWatcher = (name: string, configFilePath: string, writeBundle: any) =>
    build({
      ...sharedConfig,
      configFile: configFilePath,
      plugins: [{ name, writeBundle }],
    });

  setupPreloadWatcher = async (viteServer: ViteDevServer) =>
    this.getWatcher('reload-app-on-preload-package-change', preloadPath, () => {
      // Send a "full-reload" page event using Vite WebSocket server.
      viteServer.ws.send({ type: 'full-reload' });
    });

  setupCoreWatcher = async (viteServer: ViteDevServer) =>
    this.getWatcher('reload-app-on-core-package-change', corePath, () => {
      viteServer.ws.send({ type: 'full-reload' });
    });

  setupMainWatcher = async () => {
    let spawnProcess: ChildProcessWithoutNullStreams | null = null;

    return this.getWatcher('reload-app-on-electron-package-change', mainPath, () => {
      if (spawnProcess !== null) {
        spawnProcess.off('exit', () => process.exit(0));
        spawnProcess.kill('SIGINT');
        spawnProcess = null;
      }

      // Restart Electron process when main package is edited and recompiled.
      spawnProcess = spawn(String(electronPath), ['.']);
    });
  };

  init = async () => {
    try {
      const rendererServer = await createServer({ ...sharedConfig, configFile: rendererPath });
      await rendererServer.listen(3000);
      rendererServer.printUrls();

      await this.setupPreloadWatcher(rendererServer);
      await this.setupCoreWatcher(rendererServer);
      await this.setupMainWatcher();
    } catch (err) {
      if (err instanceof Error) {
        this.logger.error(err.message);
      }
    }
  };
}

const server = new ServerRunner();
void server.init();
