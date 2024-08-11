import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// https 관련
		mkcert({
			keyFile: '/localhost-key.pem',
			certFile: '/localhost.pem',
		}),
	],
});
