import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestTSX from './components/TestTSX'
import { a } from './test'

import './style.css'

export default defineComponent({
  setup() {
    return () => {
      return <div>
            <div>
              <h3>hello {a.name}</h3>
            </div>
            <HelloWorld msg="Vite + Vue" />
            <TestTSX />
          </div>
    }
  },
})

