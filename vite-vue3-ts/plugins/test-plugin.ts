/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { Plugin } from 'vite'
export default (enforce?: 'pre' | 'post'): Plugin => {
  return {
    name: 'test',
    config(userConfig) {
      return new Promise((resolve) => {
        resolve({
          resolve: {
            alias: {
              '@aaa': enforce || '/src/styles',
            },
          },
        })
      })
    },
    configResolved(config) {
      // console.log(config.resolve)
    },
    configureServer(server) {
      return () => {
        // 如果写在函数里面，则在vite中间件执行之后执行，最后执行
        server.middlewares.use((req, res, next) => {
          if (req.url === '/test')
            res.end('Hello Vite Plugin')
          else
            next()
        })
        console.log(server)
      }
    },
    transformIndexHtml(html) {
      console.log(html)
    },
    handleHotUpdate(ctx) {
      console.log(ctx)
      // 这里是import.meta.hot里面使用
      ctx.server.ws.send({
        type: 'custom',
        event: 'test',
        data: {
          hello: 'i\'m zack zheng',
        },
      })
    },
  }
}
