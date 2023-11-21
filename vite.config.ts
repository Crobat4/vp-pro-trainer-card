import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact(), tsconfigPaths()],
    build: {
        // generate .vite/manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: ['src/index.tsx'],
        },
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            assets: path.resolve(__dirname, './src/assets'),
            modules: path.resolve(__dirname, './src/modules'),
            styles: path.resolve(__dirname, './src/styles'),
        },
    },
});
