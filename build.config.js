// build.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'src/index.js',
  sourcemap: false,
  minify: true,
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
