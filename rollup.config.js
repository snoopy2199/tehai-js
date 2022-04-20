/**
 * @type {import('rollup').RollupOptions}
 */
import esbuild from 'rollup-plugin-esbuild';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'TeHai',
      sourcemap: true,
    },
  ],
  plugins: [esbuild()],
};

export default config;
