<script>
 // @ts-nocheck
 import { onMount } from "svelte";
 import { city, fetchData } from "../store/store";

 let searchInput;

 onMount(() => {
  searchInput.focus();
  async function getCityByIp() {
   const res = await fetch(
    "https://api.ipdata.co/?api-key=9cd4834455a6ac29b698e2df0bc3b554e9f3b9d38611cf6c6a595f4f"
   );
   const json = await res.json();
   city.set(json.city)
   fetchData();
  }

  getCityByIp();
  
 });

 document.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
   fetchData();
  }
 });
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
