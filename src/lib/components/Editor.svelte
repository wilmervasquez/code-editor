<script lang="ts">
	import * as monaco from 'monaco-editor';

	export let value:string = "";
	export let language:string = "";

	let editor:monaco.editor.IStandaloneCodeEditor;
	function embedEditor(node: HTMLDivElement) {
		editor = monaco.editor.create(node, {
			language,
			value,
			padding:{top:14},
			fontSize: 14,
			fontFamily: 'Cascadia Code',
			// theme: 'vs-dark',
			tabSize: 2,
			minimap:{enabled:false},
			glyphMargin: false,
			snippetSuggestions: 'inline',
			automaticLayout:true
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

<div class="contain w-full h-full grid overflow-hidden" use:embedEditor></div>
	
<style>
	.contain {
		grid-template-columns: 1fr;
		height: 100%;
		position: relative;
		width: 100%;
		
	}
	.contain:before{
		width: 40px;
		content: "";
		height: 40px;
		background-size: contain;
		position: absolute;
		z-index: 7;
		bottom: 5px;
		background-repeat: no-repeat;
		background-position: center;
		right: 20px;
		border-radius: 10px;
		background-image: var(--image);
	}
</style>
<!-- 52:10 -->