<script>
    import { counterValue } from "$lib/stores/counter.js";

    let lcd = null;
    $: lcd = {counterValue};

    let memory = 0; // Lagrat/gamlat värdet från display
    let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

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

    /** Rensar display */
    function clearLCD() {
        lcd.value = "";
    }
    /** Rensar allt, reset */
    function memClear() {
        memory = 0;
        arithmetic = null;
        clearLCD();
    }

    function setOperator(operator) {
        switch (
            operator // switch case , ifall .... då ...
        ) {
            case "+": // ifall man klicker på + då ...
                memory = counterValue; // memory får värdet av displayen
                clearLCD(); // displayen clearas
                arithmetic = "+"; //arithmetic får värdet av '+' // se funktion längre ner!
                break;

            case "-":
                memory = counterValue;
                clearLCD();
                arithmetic = "-";
                break;

            case "*":
                memory = counterValue;
                clearLCD();
                arithmetic = "*";
                break;

            case "/":
                memory = counterValue;
                clearLCD();
                arithmetic = "/";
                break;
        }
    }
    /**
     * Beräknar ovh visar resultatet på displayen.
     */
    function calculate() {
        switch (
            arithmetic // swich case för arthimatic.
        ) {
            case "+": // om arthimatic = '+',   (se längre upp  där det uppreps)
                result = Number(memory) + Number(counterValue); // varaibelen resultat på värdet av lcd och det gamla värdet som finns i memory. Number() är för att kunna räkna med decimaltal, hade kunnat använt paresInt(), eller paresfloat()
                counterValue = result; // resultatet sätts i lcd displayen.
                break;

            case "-":
                result = Number(memory) - Number(counterValue);
                counterValue = result;
                break;

            case "*":
                result = Number(counterValue) * Number(memory);
                counterValue = result;
                break;

            case "/":
                result = Number(memory) / Number(counterValue);
                counterValue = result;
                break;
            default:
        }
    }

    function addComma() {
        // en funktion för att tilläga  ett kommatecken till lcd displayen
        lcd.value += ".";
    }
</script>

<section id="keyBoard">
    <button value="7" id="b7" on:click>7</button>
    <button value="8" id="b8" on:click>8</button>
    <button value="9" id="b9" on:click>9</button>
    <button id="add" on:click={setOperator}>+</button>

    <button value="4" id="b4" on:click>4</button>
    <button value="5" id="b5" on:click>5</button>
    <button value="6" id="b6" on:click>6</button>
    <button id="sub" on:click={setOperator}>-</button>

    <button value="1" id="b1" on:click>1</button>
    <button value="2" id="b2" on:click>2</button>
    <button value="3" id="b3" on:click>3</button>
    <button id="mul" on:click={setOperator}>x</button>

    <button id="comma" on:click={addComma}>,</button>
    <button value="0" id="b0" on:click>0</button>
    <button id="enter" on:click={calculate}>=</button>
    <button id="div" on:click={setOperator}>/</button>

    <button
        on:click={clearLCD}
        on:dblclick={memClear}
        id="clear"
        style="grid-column: span 4;">CLEAR</button
    >
</section>
