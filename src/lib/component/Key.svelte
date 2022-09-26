<script>
    import Display from "./Display.svelte";
    import { counterValue } from "$lib/stores/counter.js";

</script>

<section id="KeyBoard">
    <button value ="7" id="b7" on:click>7</button>
    <button value ="8"id="b8" on:click>8</button>
    <button value ="9"id="b9" on:click>9</button>
    <button value ="+" id="add" on:click>+</button>

    <button value ="4" id="b4" on:click>4</button>
    <button value ="5" id="b5" on:click>5</button>
    <button value ="6" id="b6" on:click>6</button>
    <button value ="-" id="sub" on:click>-</button>

    <button value ="1" id="b1"on:click>1</button>
    <button value ="2" id="b2"on:click>2</button>
    <button value ="3" id="b3"on:click>3</button>
    <button value ="x" id="mul" on:click>x</button>

    <button value ="." id="comma"on:click>,</button>
    <button value ="0" id="b0"on:click>0</button>
    <button value ="=" id="enter"on:click>=</button>
    <button value ="/" id="div"on:click>/</button>

    <button value ="CL" id="clear" style="grid-column: span 4;">CLEAR</button>
</section>