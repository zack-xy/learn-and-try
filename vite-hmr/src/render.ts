let num = import.meta.hot && import.meta.hot.data && import.meta.hot.data.cache && import.meta.hot.data.cache.getIndex ? import.meta.hot.data.cache.getIndex() : 0
let timer: number | undefined
export function render(): void {
  timer = setInterval(() => {
    num++
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <h1>Hello Vite!</h1>
      <p>zack ssszheng: ${num}</p>
    </div>
  `
  }, 1000)
}

// side effect副作用，引入模块就会执行
// 热更新的时候，这个副作用会重新执行，但是上一次的也不会消失
// const timer = setInterval(() => { console.log(num++) }, 2000)

// 清除side effect副作用
if (import.meta.hot) {
  import.meta.hot.data.cache = {
    getIndex() {
      return num
    },
  }
  import.meta.hot.dispose(() => {
    if (timer)
      clearInterval(timer)
  })
}

