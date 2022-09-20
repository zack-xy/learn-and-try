const fs = require('fs')
const express = require('express')

const app = express()

// 生产环境
const template = fs.readFileSync('dist/client/index.html', 'utf-8')

app.use(express.static('dist/client'))

app.get('*', async (req, res) => {
  const render = require('./dist/server/sever-entry.mjs').render
  const context = {}
  const html = await render(req.url, context)

  if (context.url) {
    res.redirect(301, context.url)
    return
  }

  const responseHtml = template.replace('<!--APP_HEML-->', html)
  res.set('content-type', 'text/html').send(responseHtml)
})
app.listen(4000)

// 本地开发时
// const { createServer: createViteServer } = require('vite')

// createViteServer({
//   server: {
//     // middlewareMode: 'html',
//     middlewareMode: true,
//   },
//   appType: 'custom',
// }).then((vite) => {
//   app.use(vite.middlewares)

//   app.get('*', async (req, res) => {
//     let template = fs.readFileSync('index.html', 'utf-8')

//     template = await vite.transformIndexHtml(req.url, template)

//     const { render } = await vite.ssrLoadModule('src/sever-entry.jsx')
//     const html = await render(req.url)
//     const responseHtml = template.replace('<!--APP_HEML-->', html)
//     res.set('content-type', 'text/html').send(responseHtml)
//   })

//   app.listen(4000)
// })

// 参考资源链接
// https://github.com/remix-run/react-router/blob/dev/examples/ssr/server.js
