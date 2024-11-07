<script lang="ts">
  let tables = [];
  let table = [{}]

  async function getTables(){
    const response = await fetch('/api/db');
    const data = await response.json();
    tables = data
    console.log(tables)
  };

  async function getTable(name: string){
    const response = await fetch(`/api/db/table?name=${name}`);
    const data = await response.json();
    table = data
    console.log(data)
  };

  getTables()

</script>
<div class="manager grid">
  <nav>
    <div class="flex p-2 gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="hsl(12,0%,70%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5M3 10h18M10 3v18m6-2h6m-3-3v6"/></svg>
      Crear Tabla
    </div>
    <ul>
      {#each tables as {name}}
        <li class="flex items-center gap-2 px-2" on:click={()=> getTable(name)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#e27eab" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 5h18M10 3v18"/></svg>
          {name}
        </li>
      {/each}
    </ul>
  </nav>
  <main>
    <div class="p-3">
      <table class="border">
        <thead>
          <tr>
            {#each Object.keys(table[0]) as column}
              <td class="px-2 border border-neutral-500">{column}</td>
            {/each}
          </tr>
        </thead>
        <tbody class="border">
          {#each table as row}
            <tr>
              {#each Object.keys(row) as key}
                <td class="border border-neutral-500">
                  <div class="px-2">
                    {#if String(row[key]).length < 20}
                      {row[key]}
                    {:else}
                      {String(row[key]).slice(0,50)}<span class="text-neutral-300">...</span>
                    {/if}
                  </div>
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

  </main>
</div>
<style>
  .manager {
    grid-template-columns: 200px 1fr;
  }
</style>