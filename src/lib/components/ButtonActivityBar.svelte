<script lang="ts">
  import {base} from "$app/paths";

  export let icon;
  export let active;

</script>
<button class="item p-2 relative" on:click class:active>
  <svg width="24" height="24" >
    <use href={icon}/>
  </svg>
</button>
<style>
  .item svg{
    --stroke:gray;
  }
  .item:hover > svg, .item.active > svg {
    --stroke: violet
  }
  .item.active::before{
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: violet;
    left: 0;
    top: 0;
  }
</style>