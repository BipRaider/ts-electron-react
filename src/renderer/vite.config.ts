//https://github.com/fabien-ml/react-ts-vite-template
//https://stackblitz.com/edit/github-y5k5fx-6eowtr?file=package.json
//https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/
import { join } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { builtinModules } from 'node:module';
// import legacy from '@vitejs/plugin-legacy';
// import dts from 'vite-plugin-dts'; //If nid library

export default ({ mode }: { mode: string }) => {
  const rootThisDir = 'src/renderer';
  const build = 'dist/renderer';

  /*** Main dir*/
  const mainDir = process.cwd();
  const root = join(mainDir, rootThisDir);
  /** Entry point/input should be the `src/renderer/index.html`. */
  const input = join(root, 'index.html');
  const outDir = join(mainDir, build);
  const envDir = join(mainDir, '.env');

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: './',
    root: root,
    envDir: envDir,
    // envPrefix: 'REACT_APP_',
    plugins: [
      // legacy(),
      // dts({
      //   insertTypesEntry: true,
      // }),
      react(),
      tsconfigPaths(),
      svgrPlugin(),
    ],
    resolve: {
      alias: {
        '@preload/*': '../preload',
        '@core/*': '../core',
      },
    },
    build: {
      // Build output inside `dist/renderer` at the project root.
      outDir: outDir,
      emptyOutDir: true,
      target: 'esnext',
      rollupOptions: {
        input: input,
        output: {
          entryFileNames: '[name].js',
        },
        // Entry point/input should be the `src/renderer/index.html`.
        // Exclude node internal modules from the build output (we're building for web, not Node).
        external: [...builtinModules.flatMap(p => [p, `node:${p}`])],
      },
    },
  });
};
