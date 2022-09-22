
<script>
     import '$lib/global.scss';
     import Display from '../lib/component/Display.svelte';
     import Key from '../lib/component/Key.svelte';
 
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <title> SvCalc</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/home/karam/Skrivbord/WUT/Te3b-WUT2/miniCalc/src/lib/global.css">
    

</head>

<body>
    <main>
        <input type="text" id = 'lcd' disabled="disabled">
        <section id = 'keyBoard'>
            <button id='b7'>7</button>
            <button id='b8'>8</button>
            <button id='b9'>9</button>
            <button id='add'>+</button>

            <button id='b4'>4</button>
            <button id='b5'>5</button>
            <button id='b6'>6</button>
            <button id='sub'>-</button>

            <button id='b1'>1</button>
            <button id='b2'>2</button>
            <button id='b3'>3</button>
            <button id='mul'>x</button>

            <button id='comma'>,</button>
            <button id='b0'>0</button>
            <button id='enter'>=</button>
            <button id='div'>/</button>

            <button id='clear' style = 'grid-column: span 4;'>CLEAR</button>
        </section>
    </main>
</body>

</html>