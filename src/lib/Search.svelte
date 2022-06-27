<script>
// @ts-nocheck
 import { onMount } from "svelte";
 import { city, fetchData } from "../store/store"

 let searchInput

 onMount(() => {
  searchInput.focus()
  fetchData()
 })


 document.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
   fetchData()
  }
 })
</script>

<div class="search-block">
 <div class="field">
  <div class="ui fluid action input">
   <input
    on:input={(evt) => ($city = evt.target.value)}
    bind:this={searchInput}
    class="search"
    type="text"
    placeholder=""
   />
   <button on:click={fetchData} class="ui primary blue button">Search</button>
  </div>
  <div class="ui pointing label hint">Please enter city name</div>
 </div>
</div>
