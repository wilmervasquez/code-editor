<!-- @migration-task Error while migrating Svelte code: `<button>` is invalid inside `<button>` -->
<script lang="ts">
  import { codeTitle,  editorCSSValue,editorHTMLValue,  editorJSValue, historyIdSelect } from "$lib/store";

  let isEditActive = false
  let defaultJSON = '{"1":{"html":"","css":"","javascript":""}}';
  let historyString = localStorage.getItem('history') ?? defaultJSON;
  localStorage.setItem('history', historyString)

  let history: Map<string, any> = new Map();
  try {
    let historyParse = JSON.parse(historyString);
    history = new Map(Object.entries(historyParse))
  } catch (error) {
    history = new Map(Object.entries(JSON.parse(defaultJSON)));
    localStorage.setItem('history', JSON.stringify(history))
  }

  class HistoryStorage {
    constructor() {

    }
  }

  const settingsDate =  {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Cambia a false para formato 24 horas// 'numeric', '2-digit'
  }

  let idSelect = history.keys().next().value;

  function add() {
    const date = new Date()
    history.set(crypto.randomUUID(),{
      name: "Untitled",
      html: "",
      javascript: "",
      css: "",
      updated: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      created: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    });

    history = history
    localStorage.setItem('history', JSON.stringify(Object.fromEntries(history)))
  }

  function setInside(id: string) {
    if (id === idSelect) return
    let historyItem = history.get(id);

    codeTitle.set(historyItem.name)
    editorHTMLValue.setValue(String(historyItem.html))
    editorCSSValue.setValue(String(historyItem.css))
    editorJSValue.setValue(String(historyItem.javascript))

    historyIdSelect.set(id)

    idSelect = id

    isEditActive = false
  }
  setInside(idSelect);

  function save() {
    console.log(history)
    history.get(idSelect).html = $editorHTMLValue
    history.get(idSelect).css = $editorCSSValue
    history.get(idSelect).javascript = $editorJSValue

    localStorage.setItem('history', JSON.stringify(Object.fromEntries(history)))
  }

  $: $editorHTMLValue, save();
  $: $editorCSSValue, save();
  $: $editorJSValue, save();

  function deleteHistory(id: string) {
    history.delete(id)
    localStorage.setItem('history', JSON.stringify(Object.fromEntries(history)))
    history = history
  }
  function changeName(id, name) {
    history.get(id).name = name
    codeTitle.set(name)
  }


  function editActive(id: string) {
    isEditActive = true
  }

  let visible = false;

</script>
<svelte:window on:keyup={ (event)=>{
    event.preventDefault()
    visible = true
    if (event.ctrlKey) {
    }
  }}/>
<div class="modal scrollbar-none" style:display={visible ? 'block':'none'}>
  <div class="flex justify-between items-center px-3 py-2">

    <h1 class="text-gray-100 text-lg font-bold">History</h1>
    <div class="flex gap-5">
      <button on:click={add}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#949494" d="M16 3a1 1 0 0 1 1 1v11h11a1 1 0 1 1 0 2H17v11a1 1 0 1 1-2 0V17H4a1 1 0 1 1 0-2h11V4a1 1 0 0 1 1-1"/></svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#949494" d="M13.25 4.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5zM4.5 10.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm9.5 9.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M6.25 3a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 1 5.75 3zM7 20.25a.75.75 0 0 1-.75.75h-.5A2.75 2.75 0 0 1 3 18.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 .75.75M17.75 3a.75.75 0 0 0 0 1.5h.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3z"/></svg>
      </button>
    </div>
  </div>
  <div class="history p-1">
    {#each history.entries() as [id,{ name, updated, created}]}
      <button  class="flex items-center gap-2 w-full px-2 rounded-md py-1 justify-between cursor-pointer {idSelect === id ? 'bg-neutral-800' : 'hover:bg-gray-800'}" data-id={id} on:click={() => setInside(id)}>

        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#949494" d="M24 8.5c8.56 0 15.5 6.94 15.5 15.5S32.56 39.5 24 39.5S8.5 32.56 8.5 24q.002-1.302.207-2.542a1.25 1.25 0 0 0-2.466-.407A18 18 0 0 0 6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6a17.94 17.94 0 0 0-12.5 5.048V8.25a1.25 1.25 0 1 0-2.5 0v6.5c0 .69.56 1.25 1.25 1.25h6.5a1.25 1.25 0 1 0 0-2.5h-4.152c2.834-3.076 6.893-5 11.402-5m1 5.75a1.25 1.25 0 1 0-2.5 0v10c0 .69.56 1.25 1.25 1.25h7a1.25 1.25 0 1 0 0-2.5H25z"/></svg>
          <div class="flex flex-col items-start">
            <p>
              {#if idSelect === id && isEditActive}
                <input type="text" on:input={(e)=> changeName(id, e.target.value)} value={name}>
              {:else}
                <span>{ name }</span>
              {/if}
            </p>
            <p class="text-xs text-gray-400"><b class="text-white">Created: </b>{ created} <b class="text-white">Updated: </b>{updated} </p>
          </div>
        </div>
        <div class="flex gap-2">
          <button on:click={() => editActive(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#949494" d="M3.005 14.176A3 3 0 0 0 6 17h2.003q.01-.171.054-.347L8.22 16H6l-.15-.005A2 2 0 0 1 4 14v-4h3l.176-.005A3 3 0 0 0 10 7V4h4l.15.005A2 2 0 0 1 16 6v2.003a2.9 2.9 0 0 1 1 .13V6l-.005-.176A3 3 0 0 0 14 3H9.621l-.176.008a2 2 0 0 0-1.238.578L3.586 8.207l-.12.13A2 2 0 0 0 3 9.62V14zM7 9l-2.782-.001q.034-.045.075-.085l4.621-4.621L9 4.219V7l-.005.15A2 2 0 0 1 7 9m2.98 5.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/></svg>
          </button>
          <button on:click={() => deleteHistory(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="#949494" d="M5 3h2a1 1 0 0 0-2 0M4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11z"/></svg>
          </button>
        </div>
      </button>
    {/each}
    </div>
</div>
<style>
 .modal {
    display: block;
    position: fixed;
    background-color: hsl(180, 2%, 10%);
    width: 50%;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 12;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 1px solid hsl(0, 0%, 25%);
  }
  .history {
    overflow-y: scroll;
    height: 100%;
  }
</style>