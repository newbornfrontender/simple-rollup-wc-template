import url from 'rollup-plugin-url';

const components = ['my-title', 'my-paragraph'];

export default {
  input: components.map((component) => `components/${component}.js`),
  output: [
    {
      dir: 'public/components',
      format: 'es',
      // sourcemap: true,
    },
  ],
  plugins: [url()],
  experimentalCodeSplitting: true,
};
