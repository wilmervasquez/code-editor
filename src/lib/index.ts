import * as monaco from 'monaco-editor';
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// import "./defMyLang";
// import "./defLangMarkNotes";

monaco.editor.defineTheme('one-dark', {
	base: 'vs-dark',
	inherit: true,
	rules: [
		{
			token: 'keyword',
			foreground: '#D55FDE',
      fontStyle:'bold italic'
		},
		{
			token: 'comment',
			foreground: '#7F848E',
      fontStyle:"italic"
		},
		{
			token: 'string',
			foreground: '#89CA78'
		},
    {
			token: 'constant',
			foreground: '#D19A66',
      fontStyle:'bold'
		},
		{
			token: 'variable',
      foreground:'#EF596F'
		},
		{
			token: 'function',
      foreground:'#61AFEF'
		}
	],
	colors: {}
});
monaco.editor.setTheme('one-dark');

// Registro de Autocompletado
// const tags = ['div','section']

// class MyCompletionItemProvider implements monaco.languages.CompletionItemProvider {
// 	provideCompletionItems(
// 		model: monaco.editor.ITextModel,
// 		position: monaco.Position
// 	): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
// 		const word = model.getWordUntilPosition(position);
// 		console.log(word, position);

// 		const range = new monaco.Range(
// 			position.lineNumber,
// 			word.startColumn,
// 			position.lineNumber,
// 			position.column
// 		);

// 		// Aquí puedes agregar tu lógica para obtener los elementos de completado
// 		console.log(monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet)
// 		const items: monaco.languages.CompletionItem[] = [
// 			{
// 				label: `${word.word}: HTML Element`,
// 				kind: monaco.languages.CompletionItemKind.Method,
// 				insertText: `<${word.word}>\n\t$1\n</${word.word}>`,
// 				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
// 				range: range
// 			},
// 			{
// 				label: 'HStackItem',
// 				kind: monaco.languages.CompletionItemKind.Class,
// 				insertText: 'HStack {\n}',
// 				range: range
// 			},
// 			{
// 				label: 'HStackFluent',
// 				kind: monaco.languages.CompletionItemKind.Class,
// 				insertText: 'HStack {\n}',
// 				range: range
// 			},
// 			{
// 				label: 'HStackSearch',
// 				kind: monaco.languages.CompletionItemKind.Class,
// 				insertText: 'HStack {\n}',
// 				range: range
// 			},
// 			{
// 				label: 'HStackCenter',
// 				kind: monaco.languages.CompletionItemKind.Class,
// 				insertText: 'HStack {\n}',
// 				range: range
// 			},
// 			{
// 				label: 'HStackLeft',
// 				kind: monaco.languages.CompletionItemKind.Class,
// 				insertText: 'HStack {\n}',
// 				range: range
// 			},	...tags.map((tag) => {
// 				return {
// 					label: `${tag}`,
// 					insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
// 					kind: monaco.languages.CompletionItemKind.Class,
// 					insertText: [`<${tag}>`, '\t$1', `</${tag}`].join('\n'),
// 					detail: `(width: number)`,range
// 				};
// 			})
// 		];

// 		return { suggestions: items };
// 	}
// }
// monaco.languages.registerCompletionItemProvider('html', new MyCompletionItemProvider());

// monaco.languages.registerInlineCompletionsProvider("javascript", {
// 	provideInlineCompletions: async function (model, position, context, token) {
// 		console.log(context,token)
// 		console.log(model)
// 		return Promise.resolve({
// 			items: [
// 				{
// 					sortText: "a",
// 					insertText: "ounce(",
// 					range: new monaco.Range(position.lineNumber, 4, position.lineNumber, "ounce(".length)
// 				},
// 				{
// 					sortText: "a",
// 					insertText: "cument.addEventListener('')",
// 					range: new monaco.Range(position.lineNumber, 3, position.lineNumber, "cument.addEventListener('".length)
// 				},
// 			]
// 		})
// 	},
// 	freeInlineCompletions() {
// 	}
// });


window.MonacoEnvironment = {
	getWorker(_, label) {
		if (label === 'html') return new HTMLWorker();
		if (label === 'css') return new CSSWorker();
		if (label === 'javascript') return new JSWorker();
		if (label === 'json') return new JSONWorker();

		return new HTMLWorker();
	}
};