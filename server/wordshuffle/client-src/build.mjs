// Rebuilds ../public/wordshuffle-app.js + .css from this folder:  node build.mjs   (needs react, react-dom, esbuild - only for developers; the built files are already included)
import { build } from 'esbuild';
await build({ entryPoints: ['main.jsx'], bundle: true, minify: true, format: 'iife', outfile: '../public/wordshuffle-app.js', loader: { '.jsx': 'jsx' }, jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'info' });
