<script>
    import { counterValue } from "$lib/stores/counter.js";

    let lcd = null;
    let memory = 0;
    $: memory = lcd;
    console.log(memory);
    lcd = {counterValue};


</script>


    <input type="text" id="lcd" disabled="disabled" />
