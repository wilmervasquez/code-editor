<script lang="ts">
	import * as monaco from 'monaco-editor';

	interface Props {
		language?: string;
		onchange: (value: string) => void;
	}

	let { language = "", onchange }: Props = $props();
	let ready = false;

	let editor:monaco.editor.IStandaloneCodeEditor;
	function embedEditor(node: HTMLDivElement) {
		editor = monaco.editor.create(node, {
			language,
			value: '',
			padding: { top: 14 },
			fontSize: 15,
			fontFamily: 'Spline Sans Mono',
			theme: 'vs-dark',
			tabSize: 2,
			minimap:{ enabled: false},
			glyphMargin: false,
			snippetSuggestions: 'inline',
			automaticLayout: true,
			fontLigatures: "'ss02','ss03','ss05','ss07','ss08','ss10','ss11','ss13','ss14','ss17','zero'",
			stickyScroll: {
				enabled: false
			}
		});

		editor.onDidChangeModelContent((e) => {
			onchange(editor.getValue());
		});

    ready = true
	}

	export function setValue(value:string){
		if (ready) {
			editor.setValue(value);
		}
	}
	export function getValue() {
		return ready ? editor.getValue() : ''
	}

	export function setLang(lang: string){
		monaco.editor.setModelLanguage(editor.getModel()!, lang)
	}
</script>

<div class="contain grid w-full h-full overflow-hidden" use:embedEditor></div>

<style>
	.contain {
		grid-template-columns: 1fr;
		height: 100%;
		position: relative;
		width: 100%;
	}
	.contain:before {
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