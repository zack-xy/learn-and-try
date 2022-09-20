const fs = require('fs')
const express = require('express')

const app = express()

const { createServer: createViteServer } = require('vite')

createViteServer({
  server: {
    // middlewareMode: 'html',
    middlewareMode: true,
  },
  appType: 'custom',
}).then((vite) => {
  app.use(vite.middlewares)

  app.get('*', async (req, res) => {
    let template = fs.readFileSync('index.html', 'utf-8')

    template = await vite.transformIndexHtml(req.url, template)

    const { render } = await vite.ssrLoadModule('/src/server-entry.jsx')
    const html = await render(req.url)
    const responseHtml = template.replace('<!--APP_HEML-->', html)
    res.set('content-type', 'text/html').send(responseHtml)
  })

  app.listen(4000)
})
