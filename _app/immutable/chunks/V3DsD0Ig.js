import{h as c,av as d,aw as l,ax as f,ay as g,az as p}from"./DYr3MzF-.js";import{a as h}from"./CIFqOFj7.js";const m=Symbol("is custom element"),u=Symbol("is html");function E(e){if(c){var t=!1,o=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;n(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;n(e,"checked",null),e.checked=s}}};e.__on_r=o,d(o),h()}}function n(e,t,o,r){var s=_(e);c&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=o)&&(t==="loading"&&(e[l]=o),o==null?e.removeAttribute(t):typeof o!="string"&&w(e).includes(t)?e[t]=o:e.setAttribute(t,o))}function _(e){return e.__attributes??={[m]:e.nodeName.includes("-"),[u]:e.namespaceURI===f}}var i=new Map;function w(e){var t=i.get(e.nodeName);if(t)return t;i.set(e.nodeName,t=[]);for(var o,r=e,s=Element.prototype;s!==r;){o=p(r);for(var a in o)o[a].set&&t.push(a);r=g(r)}return t}function v(e,t,o){return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${y({html:e,css:t})}
  <title>Code Editor</title>
  <style>${t}</style>
</head>
<body>
  <div id="root">${e}</div>
  <script type="module">
${o}
  <\/script>
</body>
</html>
  `.trim()}function D(e,t,o){const r=v(e,t,o);var s=new Blob([r],{type:"text/html"});return URL.createObjectURL(s)}const y=({html:e,css:t})=>`<script>
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
        const htmlLines = ${e.split(`
`).length}
        const cssLines = ${t.split(`
`).length}
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

  <\/script>`;function A(e){return`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script type="module">${e}<\/script>
</body>
</html>`}export{D as c,v as g,A as h,E as r,n as s};
