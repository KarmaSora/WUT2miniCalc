<script>
    import Display from "./Display.svelte";
    import { counterValue } from "$lib/stores/counter.js";

    function buttonClick(e) {
        let btn = e.target.id; //id för den tangent som tryckte ner
        // kollar om siffertangent är nedtryckt
        if (btn.substring(0, 1) === "b") {
            let digit = btn.substring(1, 2); // plockar ut siffran från id:et
            lcd.value += digit; // skriver ut digit/ tal  genom att plocka talen från knabbar vas id har bokstaven b i form av en string
        } else {
            // Inte en siffertangent, övriga tangenter.
            if (btn.substring(0, 1) === "a") {
                // kontrolerar om idet på knappen som trycks börjar med en viss bokstav, och sedan kör en funktion
                setOperator("+"); // kör funktionen setOperator('+')
            }
            if (btn.substring(0, 1) === "s") {
                setOperator("-");
            }
            if (btn.substring(0, 1) === "m") {
                setOperator("*");
            }
            if (btn.substring(0, 1) === "d") {
                setOperator("/");
            }
        }
    }

    function addDigit(digit) {
        // digits dekleration finns längre upp
        lcd.value += digit; // adderar tal till lcd displayen, digit är siffran som finns efter bokstaven b   i idet på det valda knappen
        counterValue = lcd.value;
    }
</script>

<section id="keyBoard">
    <button id="b7" on:click={buttonClick}>7</button>
    <button id="b8" on:click={buttonClick}>8</button>
    <button id="b9" on:click={buttonClick}>9</button>
    <button id="add" on:click={buttonClick}>+</button>

    <button id="b4" on:click={buttonClick}>4</button>
    <button id="b5" on:click={buttonClick}>5</button>
    <button id="b6" on:click={buttonClick}>6</button>
    <button id="sub" on:click={buttonClick}>-</button>

    <button id="b1"on:click={buttonClick}>1</button>
    <button id="b2"on:click={buttonClick}>2</button>
    <button id="b3"on:click={buttonClick}>3</button>
    <button id="mul" on:click={buttonClick}>x</button>

    <button id="comma"on:click={buttonClick}>,</button>
    <button id="b0"on:click={buttonClick}>0</button>
    <button id="enter"on:click={buttonClick}>=</button>
    <button id="div"on:click={buttonClick}>/</button>

    <button on:click={buttonClick} id="clear" style="grid-column: span 4;">CLEAR</button>
</section>
