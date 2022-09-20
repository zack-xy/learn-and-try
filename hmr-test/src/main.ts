import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

function render() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <p>zack zheng1121222</p>
  </div>
`
}

render()

// 这一句是为了生产环境进行优化，生产不需要热更新
if (import.meta.hot) {
  // 接收模块自身
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      // eslint-disable-next-line no-console
      console.log(newModule)
      // 如果变化了，重新调用下自身的render函数
      newModule.render && newModule.render()
      // 不可以直接调用render，因为直接的render是上一次闭包的render，不是最新的render
    }
  })
}

// 热更新是如何实现的呢
// 在server端（vscode）发现文件修改了，则发送一个websocket消息给客户端(浏览器)
// 客户端拿到消息内容，知道改了什么文件，比如/src/main.js文件，是什么修改类型,比如是更新
// 客户端重新请求新main.js文件，替换老的main.js
// 那accept里面的内容是干啥的
// 答：如果你不写accept里面的东西，上面的过程还是会发生，但是vite（浏览器）不知道替换了main.js具体是更新了什么，所以就只能刷新一下页面

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
