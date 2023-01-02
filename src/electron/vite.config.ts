import { builtinModules } from 'node:module';
import { join } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import electron from 'vite-electron-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { loadViteEnv } from 'vite-electron-plugin/plugin';

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const rootThisDir = 'src/electron';

  const build = 'dist/electron';
  const mainDir = process.cwd();
  const root = join(mainDir, rootThisDir);
  const input = join(root, 'index.ts');
  const outDir = join(mainDir, build);

  return defineConfig({
    envDir: mainDir,
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
      sourcemap: true,
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
