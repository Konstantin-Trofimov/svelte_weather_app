import { writable, get } from 'svelte/store';

export let city = writable('Moscow');
export let data = writable({})
let url = () => `https://api.openweathermap.org/data/2.5/weather?q=${get(city)}&appid=486a3aec30033a9b09d5a6e3b9216892`

export let loading = writable(false)
export let error = writable(false)
export let isOpen = writable(false)

export async function fetchData() {
 loading.set(true)
 error.set(false)

 try {
  const res = await fetch(url())
  data.set(await res.json())
 
 } catch (e) {
  error.set(e)
 }
 loading.set(false)
}

export function openModal() {
 isOpen.set(!get(isOpen))
}


