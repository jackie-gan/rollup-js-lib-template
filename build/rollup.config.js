import typescript from 'rollup-plugin-typescript';

const config = {
  input: ['src/index.ts'],
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
};

module.exports = config;
