// build.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  sourcemap: false,
  minify: false,
  target: ['es2020'],
  platform: 'node', 
  format: 'esm',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.js': 'jsx',
    '.css': 'css',
  },
}).catch(() => process.exit(1));
