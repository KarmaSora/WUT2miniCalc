<script>
    import "$lib/global.scss";
    import Display from "../lib/component/Display.svelte";
    import Key from "../lib/component/Key.svelte";
    import { counterValue } from "$lib/stores/counter.js";

    let arithmetic = null;
    let memory = 0;

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

    function setOperator(operator) {
        switch (
            operator // switch case , ifall .... då ...
        ) {
            case "+": // ifall man klicker på + då ...
                memory = lcd.value; // memory får värdet av displayen
                clearLCD(); // displayen clearas
                arithmetic = "+"; //arithmetic får värdet av '+' // se funktion längre ner!
                break;

            case "-":
                memory = lcd.value;
                clearLCD();
                arithmetic = "-";
                break;

            case "*":
                memory = lcd.value;
                clearLCD();
                arithmetic = "*";
                break;

            case "/":
                memory = lcd.value;
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
                result = Number(memory) + Number(lcd.value); // varaibelen resultat på värdet av lcd och det gamla värdet som finns i memory. Number() är för att kunna räkna med decimaltal, hade kunnat använt paresInt(), eller paresfloat()
                lcd.value = result; // resultatet sätts i lcd displayen.
                break;

            case "-":
                result = Number(memory) - Number(lcd.value);
                lcd.value = result;
                break;

            case "*":
                result = Number(lcd.value) * Number(memory);
                lcd.value = result;
                break;

            case "/":
                result = Number(memory) / Number(lcd.value);
                lcd.value = result;
                break;
            default:
        }
    }

    function addComma() {
        // en funktion för att tilläga  ett kommatecken till lcd displayen
        lcd.value += ".";
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
</script>

<html lang="en">
    <head>
        <title> SvCalc</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            rel="stylesheet"
            href="/home/karam/Skrivbord/WUT/Te3b-WUT2/miniCalc/src/lib/global.css"
        />
    </head>

    <body>
        <main>
            <article>
                <Display />
                <Key />
            </article>
        </main>
    </body>
</html>
