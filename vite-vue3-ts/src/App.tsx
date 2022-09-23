/* eslint-disable no-console */
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestTSX from './components/TestTSX'
import { a } from './test'
import logo from './assets/vue.svg'

import './style.css'

import test from './test?url'
import testRaw from './test?raw'
console.log(test)
console.log(testRaw)

// 生产环境是没有hot的，所以这部分代码会被tree shake
if (import.meta.hot) {
  import.meta.hot.on('test', (val) => {
    console.log('我这里监听了hot的ws', val)
  })
}

export default defineComponent({
  setup() {
    return () => {
      return <div>
            <div>
              <h3>hello {a.name}!</h3>
              <img src={logo} />
            </div>
            <HelloWorld msg="Vite + Vue" />
            <TestTSX />
          </div>
    }
  },
})

