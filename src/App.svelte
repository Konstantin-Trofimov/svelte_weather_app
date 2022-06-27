<script>
  import { isOpen } from "./store/store";
  import Search from "./lib/Search.svelte";
  import Info from "./lib/Info.svelte";
  import Descr from "./lib/Descr.svelte";
</script>

<div class="container">
  <div class="wrapper">
    <h1>Weather app</h1>
    <Search />
    <Info />
    {#if $isOpen}
      <Descr />
    {/if}
    <div>{$isOpen}</div>
  </div>
</div>

