import VuePlugin from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/app.js',
      format: 'esm',
      sourcemap: 'inline',
    },
    plugins: [
      typescript({
        // Absolute path to import correct config in e2e tests
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      }),
      VuePlugin(),
    ],
    external: ['vue'],
  },
]
