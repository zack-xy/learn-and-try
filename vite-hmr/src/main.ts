import './style.css'
// import typescriptLogo from './typescript.svg'

import { render } from './render'

render()

if (import.meta.hot) {
  import.meta.hot.accept(['./render'], ([newRender]) => {
    if (newRender && newRender.render) {
      if (newRender.num > 5)
        import.meta.hot?.invalidate()
      else newRender.render()
    }
  })
  // import.meta.hot.accept()
}
