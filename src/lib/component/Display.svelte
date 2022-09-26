<script>
    import { counterValue } from "$lib/stores/counter.js";
    import Key from "./Key.svelte";

    let lcd = null;
    let memory = 0;
    $: memory = lcd;
    console.log(memory);


</script>


    <input type="text" id="lcd" disabled="disabled" />