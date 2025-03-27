import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setup.js'],
        include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
        ui: {
            port: 3000,
            open: true
        }
    },
});