<script lang="ts">
	import * as monaco from 'monaco-editor';

	export let value:string = "";
	export let language:string = "";

	let editor:monaco.editor.IStandaloneCodeEditor;
	function embedEditor(node: HTMLDivElement) {
		editor = monaco.editor.create(node, {
			language,
			value,
			fontSize: 14,
			fontFamily: 'Cascadia Code',
			theme: 'vs-dark',
			tabSize: 2,
			glyphMargin: false,
			snippetSuggestions: 'inline'
		});

		editor.onDidChangeModelContent((e) => {
			value = editor.getValue();
		});
		
	}

	export function setValue(value:string){
		editor.setValue(value)
	}
	export function setLang(lang:string){
		monaco.editor.setModelLanguage(editor.getModel()!,lang)
	}
</script>

<div class="contain w-full h-full" use:embedEditor></div>

<style>
	.contain {
		height: 100%;
		width: 100%;
	}
</style>
