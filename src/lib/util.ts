function htmlASbase64(html: string, css:string, js:string) {
  // inversa atob
  return `blob:http://localhost/${btoa(getStructHTML(html,css,js))}`
}

function getStructHTML(html:string,css:string,js:string) {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>APP</title>
      <style>${css}</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>${js}</script>
    </body>
    </html>
  `)
}

export { htmlASbase64, getStructHTML}