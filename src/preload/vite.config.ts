import { builtinModules } from 'node:module';
import { join } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import electron from 'vite-electron-plugin';
import { loadViteEnv } from 'vite-electron-plugin/plugin';

export default ({ mode }: { mode: string }) => {
  const rootThisDir = 'src/preload';
  const build = 'dist/preload';

  const mainDir = process.cwd();
  //** Please note that `__dirname = packages/preload` in this context. */
  const root = join(mainDir, rootThisDir);
  const outDir = join(mainDir, build);
  /** The directory from which `.env` files are loaded. Make sure it should be at the root of the project. */
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
      // Build preload in "lib" mode of Vite.
      // See: https://vitejs.dev/guide/build.html#library-mode
      // lib: {
      //   // Specify the entry-point.
      //   entry: './index.js',
      //   formats: ['cjs'],
      // },
      rollupOptions: {
        input: input,
        external: [
          // Exclude all Electron imports from the build.
          'electron',
          // Exclude Node internals from the build.
          ...builtinModules.flatMap(p => [p, `node:${p}`]),
        ],
        output: {
          entryFileNames: '[name].js',
        },
      },
    },
  });
};
