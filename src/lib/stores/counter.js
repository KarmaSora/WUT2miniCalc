import { writable } from "svelte/store";
 
export const counterValue = writable(0);
console.log({counterValue});
export const MemH = writable(0);
console.log({MemH});
