<script>
  import {loading, openModal, btnDisable } from "../store/store"

  export let name
  export let temp
  export let descr
  export let icon
</script>

<div class="data-block">
  <div class="ui segment main-info">
    <div class="column">
      {#if !$loading}
        <h3 class="city-name">{name}</h3>
        <div class="ui divider" />
        <div class="temp">{@html temp}</div>
        {#if descr}
        <div class="descr">{descr}</div>
        {/if}
        <div class="ui divider" />
        <div class="icon">{@html icon}</div>
        <div class="ui divider" />
        {#if !$btnDisable}
        <div on:click={openModal} class="info">more info</div>
        {/if}
      {/if}
    </div>
  </div>
</div>
