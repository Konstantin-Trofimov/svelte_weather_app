<script>
 import {openModal } from "../store/store"

 export let humidity
 export let pressure
 export let windSpeed
 export let visibility
</script>

<div class="other-info">
 <table class="ui celled table info-desk">
  <tbody>
   {#if humidity}
   <tr>
    <td data-label="Name">Humidity</td>
    <td data-label="Status"><span class="humidity">{humidity}</span></td>
   </tr>
   {/if}
   {#if pressure}
   <tr>
    <td data-label="Name">Pressure</td>
    <td data-label="Status"><span class="pressure">{pressure}</span></td>
   </tr>
   {/if}
   {#if windSpeed}
   <tr>
    <td data-label="Name">Wind speed</td>
    <td data-label="Status"><span class="wind-speed">{windSpeed}</span></td>
   </tr>
   {/if}
   {#if visibility}
   <tr>
    <td data-label="Name">Visibility</td>
    <td data-label="Status"><span class="visibility">{visibility}</span></td>
   </tr>
   {/if}
  </tbody>
 </table>
 <div on:click={openModal} class="ui mini message blue hide">hide</div>
</div>
