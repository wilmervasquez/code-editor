<script lang="ts">
  import '$lib/components/editor/Editor'
  import Editor from "$lib/components/editor/Editor.svelte";
  import Split from "$lib/components/Split.svelte";
  import { getSnnipetContext, setSnnipetContext } from '$lib/components/app/sidebar/views/History/snippets.svelte';
  import { onMount, type Component } from "svelte";
  import BorderLayout from '$lib/components/layouts/BorderLayout.svelte';
  import ActivityBar from '$lib/components/app/sidebar/ActivityBar.svelte';
  import Files from "$lib/components/app/sidebar/views/Files/FilesView.svelte";
  import Packages from "$lib/components/app/sidebar/views/Packages/PackagesView.svelte";
  import TablerIcons from "$lib/icons/TablerLinearIcons";
  import HistoryView from "$lib/components/app/sidebar/views/History/HistoryView.svelte";
  import SettingsView from "$lib/components/app/sidebar/views/Settings/SettingsView.svelte";
  import CloudView from "$lib/components/app/sidebar/views/Cloud/CloudView.svelte";
  import ConsolaView from "$lib/components/app/sidebar/views/Consola/ConsolaView.svelte";
  import AccountView from "$lib/components/app/sidebar/views/Account/AccountView.svelte";
  import MenuView from "$lib/components/app/sidebar/views/Menu/MenuView.svelte";
  import { ChevronsUp, ChevronsUpDown, File, History, Plus, Slash } from '@lucide/svelte';
  const snippet = setSnnipetContext()

  let iframe: HTMLIFrameElement;
  let editorHTML: Editor | null = $state(null);
  let editorCSS: Editor | null = $state(null);
  let editorJS: Editor | null = $state(null);

  const selectedSnippet = $derived(snippet.selectedSnippet)

  const setValuesEditor = () => {
  }
  
  $effect(() => {
    if (editorHTML && editorCSS && editorJS) {
      if (!selectedSnippet) return
  
      editorHTML.setValue(selectedSnippet.xml)
      editorCSS.setValue(selectedSnippet.css)
      editorJS.setValue(selectedSnippet.js)
    }

    console.log(123);
  })

  function CProvider(icon: string, view: Component, position: 'TOP' | 'BOTTOM' = 'TOP') {
    return {icon, view, position}
  }

  const snp = setSnnipetContext()

  console.log(snp.snippets);
  const provider = [
    CProvider(TablerIcons.Menu_2, MenuView),
    CProvider(TablerIcons.File, Files),
    CProvider(TablerIcons.History, HistoryView),
    CProvider(TablerIcons.BrandOnedrive, CloudView),
    CProvider(TablerIcons.BoxSeam, Packages),
    CProvider(TablerIcons.Terminal_2,ConsolaView),
    CProvider(TablerIcons.User, AccountView, 'BOTTOM'),
    CProvider(TablerIcons.Settings, SettingsView, 'BOTTOM')
  ]
</script>
<BorderLayout>
  {#snippet topLeft()}
    <div class="p-2">
      <img src="/favicon.svg" alt="" class="size-5">
    </div>
    <Slash class="size-3.5 text-neutral-400 hover:text-white"/>
    <div class="group relative z-20 mx-2">
      <div class="flex items-center hover:bg-neutral-800 text-sm gap-2 py-1 px-2 rounded-lg">
        <File class="size-4"/>
        Esamble Project
        <div class="border text-xs px-2 py-0.5 bg-blue-500/10 rounded-full text-blue-500 border-blue-500">3 h</div>
        <ChevronsUpDown class="size-3.5 "/>
      </div>
      <div class="absolute border border-neutral-800 bg-neutral-900 rounded-lg p-1 shadow-lg shadow-black/50 left-0 right-0">
        {#each { length: 5}, e }
          <div class="text-sm px-2 h-8 hover:bg-neutral-800 cursor-pointer flex items-center gap-2 rounded-md">
            <File class="size-4"/>
            flags.svelte
          </div>
        {/each}
        <div class="h-8">
          <div class="text-sm px-2 h-8 text-blue-500 hover:bg-neutral-800 cursor-pointer flex items-center gap-2 rounded-md">
            <Plus class="size-4"/>
            More files...
          </div>
        </div>
      </div>
    </div>
  {/snippet}
  {#snippet topRight()}
    <div class="p-2">User: Guest</div>
  {/snippet}
  {#snippet left()}
      <ActivityBar {provider}/>
  {/snippet}

  {#snippet center()}
    <Split>
      {#snippet area1()}
        <Editor
          --image="url(https://www.abusaid.me/_next/static/media/html.017306fd.svg)"
          language="html"
          bind:this={editorHTML}
          onchange={(detail) => snippet.setXml(detail) }
        />
      {/snippet}
      {#snippet area2()}
        <Editor
          --image="url(https://www.abusaid.me/_next/static/media/javascript.b181c09e.svg)"
          language="javascript"
          bind:this={editorJS}
          onchange={(detail)=> snippet.setJS(detail) }
        />
      {/snippet}
      {#snippet area3()}
        <Editor
          --image="url(https://www.abusaid.me/_next/static/media/css.18a757c4.svg)"
          language="css"
          bind:this={editorCSS}
          onchange={(detail)=> snippet.setCss(detail) }
        />
      {/snippet}
      {#snippet area4()}
        <iframe bind:this={iframe} class="w-full h-full bg-white" src={snippet.doc} frameborder="0" title=""></iframe>
      {/snippet}
    </Split>
  {/snippet}

  {#snippet right()}
    <div class="p-2 font-semibold">Settings</div>
  {/snippet}

  {#snippet bottomLeft()}
    <div class="p-2">Status: Ready</div>
  {/snippet}

  {#snippet bottomRight()}
    <div class="p-2">Lines: {editorHTML   }</div>
  {/snippet}
</BorderLayout>