import { createApp } from 'vue'
import './style.css'
import App from './App'

// import Worker from './worker?worker'
// const worker = new Worker()
// worker.onmessage = function (e) {
//   // eslint-disable-next-line no-console
//   console.log(e)
// }

// import pkg from '../package.json'
//   // eslint-disable-next-line no-console
// console.log(pkg)

// eslint-disable-next-line no-console
console.log(import.meta.env)

createApp(App).mount('#app')
