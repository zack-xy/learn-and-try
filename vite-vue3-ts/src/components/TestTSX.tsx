import { defineComponent } from 'vue'
import classes from '@styles/test.module.css'

import '@styles/index.css'
import '@styles/test.scss'

export default defineComponent({
  setup() {
    return () => {
      return <div class="root">
        <label class={`${classes.moduleClass}`}>测试</label>
        <input type="text" placeholder='xxx'/>
        <p class="my-scss">sass样式</p>
      </div>
    }
  },
})
