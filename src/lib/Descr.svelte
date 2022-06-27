<script>
 import { isOpen, openModal } from "../store/store";
</script>

<div class="other-info">
 <table class="ui celled table info-desk">
  <tbody>
   <tr>
    <td data-label="Name">Humidity</td>
    <td data-label="Status"><span class="humidity" /></td>
   </tr>
   <tr>
    <td data-label="Name">Pressure</td>
    <td data-label="Status"><span class="pressure" /></td>
   </tr>
   <tr>
    <td data-label="Name">Wind speed</td>
    <td data-label="Status"><span class="wind-speed" /></td>
   </tr>
   <tr>
    <td data-label="Name">Visibility</td>
    <td data-label="Status"><span class="visibility" /></td>
   </tr>
  </tbody>
 </table>
 <div on:click={openModal} class="ui mini message blue hide">hide</div>
</div>
