import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import { resolve } from 'path';
import config from './betterdiscord.config';

// const OUT_DIR = path.resolve(`${process.env.APPDATA}/BetterDiscord/plugins`); // Use if you want to output in plugins folder directly.
const OUT_DIR = 'dist';

export default defineConfig((env) => ({
  plugins: [
    banner({
      content: `/**${Object.entries(config).map(
        (value) => `\n * @${value[0]} ${value[1]}`
      )}\n */`,
      outDir: OUT_DIR,
    }),
  ],
  build: {
    outDir: OUT_DIR,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: config.name,
      fileName: `${config.name}.plugin`,
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
}));
