<script>
    import Display from "./Display.svelte";
    import { counterValue } from "$lib/stores/counter.js";

    let arithmetic = null;


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
  switch (operator) { // switch case , ifall .... då ...
    case '+': // ifall man klicker på + då ...
      memory = lcd.value; // memory får värdet av displayen
      clearLCD(); // displayen clearas
      arithmetic = '+'; //arithmetic får värdet av '+' // se funktion längre ner!
      break;

    case '-':
      memory = lcd.value;
      clearLCD();
      arithmetic = '-';
      break;

    case '*':
      memory = lcd.value;
      clearLCD();
      arithmetic = '*'
      break;

    case '/':
      memory = lcd.value;
      clearLCD();
      arithmetic = '/';
      break;
  }
}
/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {

  switch (arithmetic) { // swich case för arthimatic.
    case '+': // om arthimatic = '+',   (se längre upp  där det uppreps)
      result =   Number(memory) + Number(lcd.value); // varaibelen resultat på värdet av lcd och det gamla värdet som finns i memory. Number() är för att kunna räkna med decimaltal, hade kunnat använt paresInt(), eller paresfloat()
      lcd.value = result; // resultatet sätts i lcd displayen.
      break;

    case '-':
      result = Number(memory) - Number(lcd.value);
      lcd.value = result;
      break;

    case '*':
      result = Number(lcd.value) * Number(memory);
      lcd.value = result;
      break;

    case '/':
      result = Number(memory) / Number(lcd.value);
      lcd.value = result;
      break;
    default:
  }
}
   
function addComma() { // en funktion för att tilläga  ett kommatecken till lcd displayen
  lcd.value += ".";
}

/** Rensar display */
function clearLCD() {
  lcd.value = '';
}
/** Rensar allt, reset */
function memClear() {
  memory = 0;
  arithmetic = null;
  clearLCD();
}

</script>

<section id="keyBoard">
    <button id="b7" on:click={buttonClick}>7</button>
    <button id="b8" on:click={buttonClick}>8</button>
    <button id="b9" on:click={buttonClick}>9</button>
    <button id="add" on:click={setOperator}>+</button>

    <button id="b4" on:click={buttonClick}>4</button>
    <button id="b5" on:click={buttonClick}>5</button>
    <button id="b6" on:click={buttonClick}>6</button>
    <button id="sub" on:click={setOperator}>-</button>

    <button id="b1"on:click={buttonClick}>1</button>
    <button id="b2"on:click={buttonClick}>2</button>
    <button id="b3"on:click={buttonClick}>3</button>
    <button id="mul" on:click={setOperator}>x</button>

    <button id="comma"on:click={addComma}>,</button>
    <button id="b0"on:click={buttonClick}>0</button>
    <button id="enter"on:click={calculate}>=</button>
    <button id="div"on:click={setOperator}>/</button>

    <button on:click={clearLCD} on:dblclick={memClear} id="clear" style="grid-column: span 4;">CLEAR</button>
</section>