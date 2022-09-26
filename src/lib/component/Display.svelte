
    <script>
        import KeyBoard from './Key.svelte';
     
     
        export let display = "";

     </script>
     
        <input type="text" id="lcd" disabled="disabled" value={display}/>
      
     