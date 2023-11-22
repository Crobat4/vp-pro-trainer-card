import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vp-pro-trainer-card/',
    plugins: [preact(), tsconfigPaths()],
    //root: '/',
    build: {
        outDir: 'dist/docs',
    },
});
