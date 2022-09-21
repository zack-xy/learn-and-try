import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve' // 将库打包进我们的js
import commonjs from '@rollup/plugin-commonjs'  // 一些cjs的库
import { terser } from 'rollup-plugin-terser'  // 代码压缩
import alias from '@rollup/plugin-alias'
import ts from '@rollup/plugin-typescript'
// import strip from '@rollup/plugin-strip'  // 删除全局的debugger或者console.log
 
const mode = process.env.MODE

const isLocal = mode === 'local'

export default [
  {
    input: "index.js",
    external: ['react'],  // 不希望把react打包进js
    plugins: [resolve(), alias({
      entries: {
        a: './a'
      }
    }), commonjs(), ts(), json()],
    output: {
      file: "dist/index.es.js",
      format: "es",
      // plugins: [terser()]
      banner: "/**Hello This is Banner**/"
    }
  },
  {
    input: "index.js",
    external: ['react'],
    plugins: [resolve(), alias({
      entries: {
        a: './a'
      }
    }), commonjs(), ts(), json()],
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Index"
    }
  }
]
