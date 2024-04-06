<script lang="ts">
  let history: {name:string,css:string,js:string,html:string}[] = []

  let json = localStorage.getItem('__history__') ?? "[]"

  try {
    
    history = JSON.parse(json);
  } catch (error) {
    
  }

  function mas() {
    history.push({name:"Untitle",html:"",css:"",js:""})
    history = history

    localStorage.setItem("__history__",JSON.stringify(history))
  }
</script>
<div class="overflow-hidden">
  <div class="flex">
    <button on:click={mas}>mas</button>
  </div>
  <div class="flex flex-col gap-1">
    {#each history as {name,html,css,js}}
      <div class="flex rounded-sm p-1 bg-[#141414]">
        <input type="text" class="bg-transparent" value={name}>
      </div>
    {/each}
  </div>
</div>
<style>

</style>