import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import * as path from 'path';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

const projectRootDir = resolve(__dirname);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('API_DOMAIN', JSON.stringify(env.API_DOMAIN));

  return {
    plugins: [react()],
    resolve: { alias: { '~': resolve(projectRootDir, 'src') } },
    server: {
      https: fs.existsSync('./certs/localhost-key.pem')
        ? {
            key: fs.readFileSync(
              path.resolve(__dirname, './certs/localhost-key.pem')
            ),
            cert: fs.readFileSync(
              path.resolve(__dirname, './certs/localhost.pem')
            ),
          }
        : undefined,
      host: '0.0.0.0',
      proxy: {
        '/proxy-api': {
          target: env.API_DOMAIN,
          rewrite: (path) => path.replace(/^\/proxy-api/, ''),
          changeOrigin: true,
        },
      },
    },
    define: {
      'globals.API_DOMAIN': JSON.stringify(env.API_DOMAIN),
      'globals.APP_ENVIRONMENT': JSON.stringify(env.APP_ENVIRONMENT),
    },
  };
});
