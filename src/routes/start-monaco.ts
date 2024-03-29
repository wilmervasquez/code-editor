import * as monaco from 'monaco-editor';
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
monaco.editor.defineTheme('default', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      token: "identifier",
      foreground: "#9CDCFE"
    },
    {
      token: "identifier.function",
      foreground: "#DCDCAA"
    },
    {
      token: "type",
      foreground: "#1AAFB0"
    },
    {
      token:"va"
    }
  ],
  colors: {}
  });

monaco.editor.setTheme('default')
window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'html') 	return new HTMLWorker();
    if (label === 'css') return new CSSWorker();
    if (label === 'javascript') return new JSWorker();
    
    return new HTMLWorker();
  }
};