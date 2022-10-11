<script>
   import Display from "./Display.svelte";
</script>

<section id="KeyBoard">
   <button value="7" on:click>7</button>
   <button value="8" on:click>8</button>
   <button value="9" on:click>9</button>
   <button value="+" class="blue" on:click>+</button>

   <button value="4" on:click>4</button>
   <button value="5" on:click>5</button>
   <button value="6" on:click>6</button>
   <button value="-" class="blue" on:click>-</button>

   <button value="1" on:click>1</button>
   <button value="2" on:click>2</button>
   <button value="3" on:click>3</button>
   <button value="x" class="blue" on:click>x</button>

   <button value="." class="blue" on:click>,</button>
   <button value="0" on:click>0</button>
   <button value="=" class="blue" on:click>=</button>
   <button value="/" class="blue" on:click>/</button>

   <button value="CL" style="grid-column: span 4;" class="blue" on:click
      >CLEAR</button
   >
</section>

<style>
   .blue {
      color: #0acee7;
   }
   #KeyBoard {
      /** Grid eller liknade */
      display: grid;
      grid-template-columns: auto;
   }

   #KeyBoard > button {
      height: auto;
      width: auto;
      font-size: 6rem;
   }
   
</style>
