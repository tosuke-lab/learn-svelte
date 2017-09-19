import babel from 'rollup-plugin-babel'
import svelte from 'rollup-plugin-svelte'

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      include: 'src/components/**/*.html',
      exclude: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
