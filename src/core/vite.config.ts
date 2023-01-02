import { builtinModules } from 'node:module';
import { join } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import electron from 'vite-electron-plugin';
import { loadViteEnv } from 'vite-electron-plugin/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: { mode: string }) => {
  const rootThisDir = 'src/core';
  const build = 'dist/core';
  const mainDir = process.cwd();
  const root = join(mainDir, rootThisDir);
  const outDir = join(mainDir, build);
  const envDir = join(mainDir, '.env');
  const input = join(root, 'index.ts');

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    envDir: envDir,
    root: root,
    base: './',

    plugins: [
      electron({
        outDir: 'dist',
        include: [rootThisDir],
        plugins: [loadViteEnv()],
      }),
      tsconfigPaths(),
    ],

    build: {
      outDir: outDir,
      emptyOutDir: true,
      target: 'node16',

      rollupOptions: {
        input: input,
        external: ['electron', ...builtinModules.flatMap(p => [p, `node:${p}`])],
        output: {
          entryFileNames: '[name].js',
        },
      },
    },
  });
};
