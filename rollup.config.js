import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import jsx from 'rollup-plugin-jsx'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), jsx({ factory: 'React.createElement' })],
  },
]
