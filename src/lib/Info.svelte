<script>
  import { data, loading, isOpen, openModal } from "../store/store";
  import { beforeUpdate, afterUpdate } from "svelte";

  let info = {};

  afterUpdate(() => {
    if ($data.cod !== 200) {
      info = {};
      return;
    }

    const name = $data.name;
    const { temp } = $data.main;
    const { description, icon } = $data.weather[0];

    info.name = name;
    info.temp = `${Math.round(temp - 273)}&deg;`;
    info.descr = description;
    info.icon = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
  });
</script>

<div class="data-block">
  <div class="ui segment main-info">
    <div class="column">
      {#if !$loading}
        <h3 class="city-name">{$data.name}</h3>
        <div class="ui divider" />
        <div class="temp">{@html info.temp}</div>
        <div class="descr">{info.descr}</div>
        <div class="ui divider" />
        <div class="icon">{@html info.icon}</div>
        <div class="ui divider" />
        <div on:click={openModal} class="info">more info</div>
      {/if}
    </div>
  </div>
</div>
