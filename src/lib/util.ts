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
  ${generateConsoleScript({html,css})}
  <title>Code Editor</title>
  <style>${css}</style>
</head>
<body>
  <div id="root">${html}</div>
  <script type="module">
${js}
  </script>
</body>
</html>
  `).trim()
}

function createObjectURLBlobStructHTML(html: string, css:string,js:string) {
  const page = getStructHTML(html, css, js);
  var blob = new Blob([page], { type: 'text/html' });
  return URL.createObjectURL(blob);
}

const generateConsoleScript = ({ html, css }: {html: string, css: string}) => {
  const scrpt = `<script>
    const customConsole = (w) => {
      const addData = (type, payload) => {
        w.parent.postMessage({
          console: {
            payload: payload,
            type: type
          }
        }, "*")
      }

      addData("system", "clear" )

      w.onerror = (message, url, line, column) => {
        const DEFAULT_LINE_HEIGHT = 51;
        const htmlLines = ${html.split('\n').length}
        const cssLines = ${css.split('\n').length}
        const fixedLine = line - DEFAULT_LINE_HEIGHT - htmlLines - cssLines
        addData( "error",{ line: fixedLine, column, message})
      }

      const console = {
        log: function(...args){
          addData("log:log", args)
        },
        error: function(...args){
          addData("log:error", args)
        },
        warn: function(...args){
          addData("log:warn", args)
        },
        info: function(...args){
          addData("log:info", args)
        }
      }

      window.console = { ...window.console, ...console }
    }

    if (window.parent) customConsole(window);

  </script>`

  return scrpt
}
export { htmlASbase64, getStructHTML, createObjectURLBlobStructHTML}