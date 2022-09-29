<script>
    import "$lib/global.scss";
    import Display from "$lib/component/Display.svelte";
    import Key from "$lib/component/Key.svelte";

    let arithmetic = null;
    let memory = "";
    let lcd = "";
    let result = "";

    $: console.log({ lcd });
    $: console.log({ memory });
    $: console.log({ result });
    $: console.log({ clearLCD });
    $: console.log({ arithmetic });
    function buttonClick(e) {
        let btn = e.target.value; //id för den tangent som tryckte ner
        // kollar om siffertangent är nedtryckt
        console.log({ btn });
        // JAKOB
        if (Number(btn)) {
            lcd += btn;

            return;
        }

        if (btn == "=") {
            calculate();

            return;
        }

        if (btn === "CL") {
            if (!lcd) {
                memory = 0;
            } else {
                clearLCD();
            }

            return;
        }

        if (btn === ".") {
            addComma();

            return;
        }

        if (arithmetic) {
            console.log("calc");
            calculate();
        } else {
            console.log("set op");
            memory += lcd;
        }

        clearLCD();

        arithmetic = btn;
        // if (Number(btn) >= 0 && Number(btn) < 10) {
        //     lcd += btn;
        // } else if (btn === "+") {
        //     memory = lcd; // memory får värdet av displayen
        //     clearLCD(); // displayen clearas
        //     arithmetic = "+"; //arithmetic får värdet av '+' // se funktion längre ner!
        //     calculate(arithmetic);
        // } else if (btn === "x") {
        //     memory = lcd; // memory får värdet av displayen
        //     clearLCD(); // displayen clearas
        //     arithmetic = "*"; //arithmetic får värdet av '+' // se funktion längre ner!
        //     calculate(arithmetic);
        // } else if (btn === "-") {
        //     memory = lcd; // memory får värdet av displayen
        //     clearLCD(); // displayen clearas
        //     arithmetic = "-"; //arithmetic får värdet av '+' // se funktion längre ner!
        //     calculate(arithmetic);
        // } else if (btn === "/") {
        //     memory = lcd; // memory får värdet av displayen
        //     clearLCD(); // displayen clearas
        //     arithmetic = "/"; //arithmetic får värdet av '+' // se funktion längre ner!
        //     calculate(arithmetic);
        // } else if (btn === "=") {
        //     calculate();
        // } else if (btn === "CL") {
        //     clearLCD();
        // } else if (btn === ".") {
        //     addComma();
        // }
    }
    function setOperator(operator) {
        switch (
            operator // switch case , ifall .... då ...
        ) {
            case "+": // ifall man klicker på + då ...
                memory = lcd; // memory får värdet av displayen
                clearLCD(); // displayen clearas
                arithmetic = "+"; //arithmetic får värdet av '+' // se funktion längre ner!
                break;

            case "-":
                memory = lcd;
                clearLCD();
                arithmetic = "-";
                break;

            case "*":
                memory = lcd;
                clearLCD();
                arithmetic = "*";
                break;

            case "/":
                memory = lcd;
                clearLCD();
                arithmetic = "/";
                break;
        }
    }
    /**
     * Beräknar ovh visar resultatet på displayen.
     */
    function calculate() {
        if (!arithmetic) return;
        switch (
            arithmetic // swich case för arthimatic.
        ) {
            case "+": // om arthimatic = '+',   (se längre upp  där det uppreps)
                result = Number(memory) + Number(lcd); // varaibelen resultat på värdet av lcd och det gamla värdet som finns i memory. Number() är för att kunna räkna med decimaltal, hade kunnat använt paresInt(), eller paresfloat()
                lcd = result; // resultatet sätts i lcd displayen.
                break;

            case "-":
                result = Number(memory) - Number(lcd);
                lcd = result;
                break;

            case "*":
                result = Number(memory) * Number(lcd);
                lcd = result;
                break;

            case "/":
                result = Number(memory) / Number(lcd);
                lcd = result;
                break;
            default:
        }

        arithmetic = null;
    }

    function addComma() {
        if (lcd.includes(".")) return;
        // en funktion för att tilläga  ett kommatecken till lcd displayen
        lcd += ".";
    }

    /** Rensar display */
    function clearLCD() {
        lcd = "";
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
                <Display display={lcd} />
                <Key on:click={buttonClick} />
            </article>
        </main>
    </body>
</html>
