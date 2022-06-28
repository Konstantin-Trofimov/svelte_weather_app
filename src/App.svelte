<script>
  import { isOpen, data, city, fetchData, btnDisable } from "./store/store";
  import Search from "./lib/Search.svelte";
  import Info from "./lib/Info.svelte";
  import Descr from "./lib/Descr.svelte";
  import { fade } from 'svelte/transition';
  import { afterUpdate, onMount } from "svelte";

  let info = {};



  afterUpdate(() => {
    console.log('upd from app')
    
    if ($data.cod !== 200) {
      info = {};
      info.name = $data.message
      info.temp = 404
      info.icon = `<img src="../public/icons/sad_face.svg">`
      btnDisable.set(true) 
      isOpen.set(false)
      return;
    }

    const name = $data.name;
    const { temp, humidity, pressure } = $data.main;
    const { description, icon } = $data.weather[0];
    const visibility = $data.visibility;
    const windSpeed  = $data.wind.speed 

    info.name = name;
    info.temp = `${Math.round(temp - 273)}&deg;`;
    info.descr = description;
    info.icon = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
    info.humidity = humidity + '%';
    info.pressure = Math.round(pressure * 0.75006375541921) + ' mmHg'
    info.windSpeed = windSpeed + ' m/s'
    info.visibility = Math.round(visibility / 1000) + ' km'

    btnDisable.set(false) 
    
  })
</script>

<div class="container">
  <div class="wrapper">
    <h1>Weather app</h1>
    <Search />
    <Info 
      name={info.name} 
      temp={info.temp} 
      descr={info.descr} 
      icon={info.icon}
    />
    {#if $isOpen}
      <div 
        in:fade="{{duration: 500 }}"
        out:fade="{{duration: 500 }}"
        >
        <Descr  
        humidity={info.humidity}
        pressure={info.pressure} 
        windSpeed={info.windSpeed} 
        visibility={info.visibility} />
      </div>
    {/if}
  </div>
</div>

