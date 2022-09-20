/* eslint-disable no-console */
import { createApp } from 'vue'
import './style.css'
import App from './App'

// glob的应用
const globModules = import.meta.glob('./glob/*-[0-9].js')

// import Worker from './worker?worker'
// const worker = new Worker()
// worker.onmessage = function (e) {
//   // eslint-disable-next-line no-console
//   console.log(e)
// }

// import pkg from '../package.json'
//   // eslint-disable-next-line no-console
// console.log(pkg)

console.log(import.meta.env)
console.log(globModules)
Object.entries(globModules).forEach(async ([k, v]) => {
  const m = await v() as { default: unknown }
  console.log(`${k}:`, m.default)
})

createApp(App).mount('#app')

// Vite为什么会比较快
// 1. Vite使用了预编译，我们引用的库在启动之前被提前编译缓存起来放在了node_modules里的.vite里面
// 运行的时候从这里取；另外，Vite会将commonJS的转换为ESM，会使用浏览器的ESM能力
// 2. 有的库文件有很多不同文件，Vite会将它们打包到一起
// 3. 库文件会设置cache，浏览器会缓存下来
