import * as monaco from 'monaco-editor';

// monaco.editor.defineTheme('OneDarkPro', {
//   base: 'vs-dark',
//   inherit: true,
//   rules: [
//     { token:"support", foreground: "ABB2BF" },
//     { token: 'comment', foreground: '5c6370', fontStyle: 'italic' }, // Comentarios en gris con cursiva
//     { token: 'keyword', foreground: 'c678dd' }, // Palabras clave en morado
//     { token: 'identifier', foreground: 'e06c75' }, // Identificadores en rojo claro
//     { token: 'string', foreground: '98c379' }, // Cadenas de texto en verde
//     { token: 'number', foreground: 'd19a66' }, // Números en naranja
//     { token: 'delimiter', foreground: 'abb2bf' }, // Delimitadores en gris claro
//     { token: 'type', foreground: 'e5c07b' }, // Tipos en amarillo
//     { token: 'function', foreground: '61afef' }, // Funciones en azul
//     { token: 'variable', foreground: 'e06c75' }, // Variables en rojo claro
//     { token: 'constant', foreground: 'd19a66' }, // Constantes en naranja
//     { token: 'class', foreground: 'e5c07b' }, // Clases en amarillo
//     { token: 'interface', foreground: '61afef' }, // Interfaces en azul
//     { token: 'namespace', foreground: '61afef' }, // Namespaces en azul
//     { token: 'parameter', foreground: 'd19a66' }, // Parámetros en naranja
//     { token: 'property', foreground: 'd19a66' }, // Propiedades en naranja
//     { token: 'enum', foreground: 'e5c07b' }, // Enums en amarillo
//     { token: 'struct', foreground: 'e5c07b' }, // Structs en amarillo
//     { token: 'event', foreground: '61afef' }, // Eventos en azul
//     { token: 'operator', foreground: '56b6c2' }, 
//     { token: 'comment', foreground: '7F848E' }, // Comentarios en color naranja y cursiva
//     { token: 'keyword', foreground: 'D55FDE' }, // Palabras clave en verde
//     { token: 'identifier', foreground: 'E5C07B' }, // Identificadores (variables, funciones) en rojo
//     { token: 'string', foreground: '89CA78' }, // Cadenas de texto en amarillo
//     { token: 'number', foreground: 'D19A66' }, 
//     { token:"tag", foreground: "EF596F" },
//   ],
  
//   colors: {
//     'editor.background': '#23272E',
//     "activityBar.background": "#23272e",
//     "activityBar.foreground": "#d7dae0",
//     "activityBarBadge.background": "#4d78cc",
//     "activityBarBadge.foreground": "#f8fafd",
//     "badge.background": "#23272e",
//     "button.background": "#404754",
//     "button.secondaryBackground": "#30333d",
//     "button.secondaryForeground": "#c0bdbd",
//     "checkbox.border": "#404754",
//     "debugToolBar.background": "#1e2227",
//     "descriptionForeground": "#abb2bf",
//     "diffEditor.insertedTextBackground": "#00809b33",
//     "dropdown.background": "#1e2227",
//     "dropdown.border": "#1e2227",
//     "editor.findMatchBackground": "#d19a6644",
//     "editor.findMatchBorder": "#ffffff5a",
//     "editor.findMatchHighlightBackground": "#ffffff22",
//     "editor.foreground": "#abb2bf",
//     "editorBracketHighlight.foreground1": "#d19a66",
//     "editorBracketHighlight.foreground2": "#c678dd",
//     "editorBracketHighlight.foreground3": "#56b6c2",
//     "editorHoverWidget.highlightForeground": "#61afef",
//     "editorInlayHint.foreground": "#abb2bf",
//     "editorInlayHint.background": "#2c313c",
//     "editor.lineHighlightBackground": "#2c313c",
//     "editorLineNumber.activeForeground": "#abb2bf",
//     "editorGutter.addedBackground": "#109868",
//     "editorGutter.deletedBackground": "#9A353D",
//     "editorGutter.modifiedBackground": "#948B60",
//     "editorOverviewRuler.addedBackground": "#109868",
//     "editorOverviewRuler.deletedBackground": "#9A353D",
//     "editorOverviewRuler.modifiedBackground": "#948B60",
//     "editor.selectionBackground": "#67769660",
//     "editor.selectionHighlightBackground": "#ffffff10",
//     "editor.selectionHighlightBorder": "#dddddd",
//     "editor.wordHighlightBackground": "#d2e0ff2f",
//     "editor.wordHighlightBorder": "#7f848e",
//     "editor.wordHighlightStrongBackground": "#abb2bf26",
//     "editor.wordHighlightStrongBorder": "#7f848e",
//     "editorBracketMatch.background": "#515a6b",
//     "editorBracketMatch.border": "#515a6b",
//     "editorCursor.background": "#ffffffc9",
//     "editorCursor.foreground": "#528bff",
//     "editorError.foreground": "#c24038",
//     "editorGroup.background": "#181a1f",
//     "editorGroup.border": "#181a1f",
//     "editorGroupHeader.tabsBackground": "#1e2227",
//     "editorHoverWidget.background": "#1e2227",
//     "editorHoverWidget.border": "#181a1f",
//     "editorIndentGuide.activeBackground": "#c8c8c859",
//     "editorIndentGuide.background": "#3b4048",
//     "editorLineNumber.foreground": "#495162",
//     "editorMarkerNavigation.background": "#1e2227",
//     "editorRuler.foreground": "#abb2bf26",
//     "editorSuggestWidget.background": "#1e2227",
//     "editorSuggestWidget.border": "#181a1f",
//     "editorSuggestWidget.selectedBackground": "#2c313a",
//     "editorWarning.foreground": "#d19a66",
//     "editorWhitespace.foreground": "#ffffff1d",
//     "editorWidget.background": "#1e2227",
//     "focusBorder": "#3e4452",
//     "gitDecoration.ignoredResourceForeground": "#636b78",
//     "input.background": "#1d1f23",
//     "input.foreground": "#abb2bf",
//     "list.activeSelectionBackground": "#2c313a",
//     "list.activeSelectionForeground": "#d7dae0",
//     "list.focusBackground": "#323842",
//     "list.focusForeground": "#f0f0f0",
//     "list.highlightForeground": "#ecebeb",
//     "list.hoverBackground": "#2c313a",
//     "list.hoverForeground": "#abb2bf",
//     "list.inactiveSelectionBackground": "#323842",
//     "list.inactiveSelectionForeground": "#d7dae0",
//     "list.warningForeground": "#d19a66",
//     "menu.foreground": "#abb2bf",
//     "menu.separatorBackground": "#343a45",
//     "minimapGutter.addedBackground": "#109868",
//     "minimapGutter.deletedBackground": "#9A353D",
//     "minimapGutter.modifiedBackground": "#948B60",
//     "panel.border": "#3e4452",
//     "panelSectionHeader.background": "#1e2227",
//     "peekViewEditor.background": "#1b1d23",
//     "peekViewEditor.matchHighlightBackground": "#29244b",
//     "peekViewResult.background": "#22262b",
//     "scrollbar.shadow": "#23252c",
//     "scrollbarSlider.activeBackground": "#747d9180",
//     "scrollbarSlider.background": "#4e566660",
//     "scrollbarSlider.hoverBackground": "#5a637580",
//     "settings.focusedRowBackground": "#23272e",
//     "settings.headerForeground": "#fff",
//     "textBlockQuote.background": "#2e3440",
//     "textBlockQuote.border": "#4b5362",
//     "textLink.foreground": "#61afef",
//     "textPreformat.foreground": "#d19a66",
//     "titleBar.activeBackground": "#23272e",
//     "titleBar.activeForeground": "#9da5b4",
//     "titleBar.inactiveBackground": "#23272e",
//     "titleBar.inactiveForeground": "#6b717d",
//     "tree.indentGuidesStroke": "#ffffff1d",
//     "walkThrough.embeddedEditorBackground": "#2e3440",
//     "welcomePage.buttonHoverBackground": "#404754"
//   },
// })

// monaco.editor.setTheme('OneDarkPro')