<script>
    import "$lib/global.scss";
    import Display from "$lib/component/Display.svelte";
    import Key from "$lib/component/Key.svelte";

    let arithmetic = null;
    let memory = "";
    let lcd = "";
    let result = "";

    // $: console.log({ lcd });
    // $: console.log({ memory });
    // $: console.log({ result });
    // $: console.log({ clearLCD });
    // $: console.log({ arithmetic });

    function buttonClick(e) {
        let btn = e.target.value; //id för den tangent som tryckte ner
        // kollar om siffertangent är nedtryckt
        //console.log({ btn });

        if (Number(btn) >= 0 && Number(btn) < 10) {
            lcd += btn;
            return;
        }
        if (btn == "=") {
            calculate();
            return;
        }

        if (btn === ".") {
            addComma();

            return;
        }
        if (btn === "CL") {
            //om lcd  är en tomm sträng " " då skall kodblocket köras
            //annars om lcd inte är tomm då skall functionen clearLCD() kallas
            //detta motsvarar memClear då lcd är tom,
            if (!lcd) {
                memory = 0;
            } else {
                clearLCD();
            }
        }
        //ersättning till mitt orginala setOperator functionen.
       // console.log("set op");
        memory = lcd;
        clearLCD();
        arithmetic = btn;

        // if (Number(btn) >= 0 && Number(btn) < 10) {
        //     lcd += btn;

        // } else if (btn === "CL") {
        //     clearLCD();
        // } else if (btn === ".") {
        //     addComma();
        // }
    }

    /**
     * Beräknar ovh visar resultatet på displayen.
     */
    function calculate() {
        //if-satsen kontrolerar att arthmatic har ett värde eller inte. om inte då skall functionen retuneras / inte köras vidare.
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

            case "x":
                result = Number(memory) * Number(lcd);
                lcd = result;
                break;

            case "/":
                result = Number(memory) / Number(lcd);
                lcd = result;
                break;
            default:
        }

        arithmetic = null; //återställer arthimatic till null/ tar bort värdet av arthimatic efter beräkningen.
    }

    // en funktion för att tilläga  ett kommatecken till lcd displayen if satsen är till att kontorlera om att det endast kan finnas 1 commatecken
    //if-satsen göt att om "." finns redan/ includerad då skall functionen returnas / avslutas annars fortsätter den och lägger till ett comma tecken
    function addComma() {
        //if (lcd.includes(".")) return;
        //if-satsen göt att om "." finns redan/ includerad då skall functionen returnas / avslutas annars fortsätter den och lägger till ett comma tecken
        //några fel har uppståt vid använding av detta, men koden gör det den ska.
        lcd += ".";
    }

    /** Rensar display */
    function clearLCD() {
        lcd = "";
    }
    /** Rensar allt, reset */
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
                <!--kopplar display med lcd  -->
                <!--kopplar Key.svelte med onclick functioner till function buttonClick  -->

                <Display display={lcd} />
                <Key on:click={buttonClick} />
            </article>
        </main>
    </body>
</html>
