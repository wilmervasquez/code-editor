<script lang="ts">
  import { getContext, setContext } from "svelte";

  let history: {name:string,css:string,js:string,html:string}[] = []

  let json = localStorage.getItem('codeEditor:history') ?? "[]"

  try {
    history = JSON.parse(json);
  } finally{};

  function saveMemory(data: any) {
    localStorage.setItem("codeEditor:history",JSON.stringify(data))
    
  }
  function mas() {
    let hoy = new Date()
    history.unshift({name:"Untitle",html:"",css:"",js:"",id:crypto.randomUUID(), lastModified: hoy.getDay()})
    history = history

    saveMemory(history)
  }

  function deleteItem(this:HTMLElement) {
    history.splice(Number(this.dataset.id),1)
    console.log(this.dataset.id)
    history = history;
    saveMemory(history)
  }

  function changeName(index: number,newValue: string) {
    history[index].name = newValue
    saveMemory(history)

  }
  
  function sendData(index:number) {
    
    console.log(getContext("editor"))
    getContext("editor.for.html").setValue(history[index].html)
    getContext("editor.for.css").setValue(history[index].css)
    getContext("editor.for.js").setValue(history[index].js)
  }
</script>
<div class="">
  <div class="flex items-center bg-[#161616] justify-between px-1">
    <p class="text-neutral-500 text-sm">Storage</p>
    <button on:click={mas}>mas</button>
  </div>
  <div class="flex flex-col" >
    {#each history as {name,html,css,js},i}
      <div class="flex items-center  hover:bg-neutral-900 gap-2 cursor-pointer px-2">
        <button class="w-2 h-2 bg-red-300 hover:bg-green-300 rounded-full" on:click={sendData}></button>
        <input type="text" class="bg-transparent pl-2 w-24 text-sm" value={name} on:change={(e)=> changeName(i,e.target.value)}>
        <button class="text-xs bg-sky-950">
          Edit
        </button>
        <button class="text-xs bg-red-900" data-id={i} on:click={deleteItem}>
          Delete
        </button>
      </div>
    {/each}
  </div>
</div>
<style>

</style>