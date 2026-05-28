<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    topLeft: Snippet;
    topRight: Snippet;
    left: Snippet;
    center: Snippet;
    right: Snippet;
    bottomLeft: Snippet;
    bottomRight: Snippet;
  }

  const {
    topLeft,
    topRight,
    left,
    center,
    right,
    bottomLeft,
    bottomRight
  }: Props = $props();
</script>

<div class="border-layout grid-layout">
  <header class="top flex items-center px-2 justify-between border-b border-neutral-800">
    <div class="flex items-center">{@render topLeft()}</div>
    <div class="flex items-center">{@render topRight()}</div>
  </header>

  <!-- Main grid -->
  <aside class="left scrollbar">
    {@render left()}
  </aside>

  <section class="center scrollbar-y">
    {@render center()}
  </section>

  <aside class="right">
    {@render right()}
  </aside>

  <!-- Footer -->
  <footer class="bottom flex items-center text-xs justify-between border-t border-neutral-800">
    <div class="flex">{@render bottomLeft()}</div>
    <div class="flex">{@render bottomRight()}</div>
  </footer>

</div>

<style>
  .border-layout {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .grid-layout {
    display: grid;
    grid-template-columns: 240px 1fr 240px; /* 3 columns */
    grid-template-rows: auto 1fr 28px; /* 3 rows */
    grid-template-areas:
      "top top top"
      "left center right"
      "bottom bottom bottom";
  }

  .top    { grid-area: top;    }
  .left        { grid-area: left;       overflow-y: auto; }
  .center      { grid-area: center;     overflow-y: auto; }
  .right       { grid-area: right;      overflow-y: auto; }
  .bottom { grid-area: bottom; }
</style>
