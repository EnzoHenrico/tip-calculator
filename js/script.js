let tipPercent, billValue, numberOfPeople;

// Condicional de input e execução dos cálculos
function calculate(tipPercent, billValue, numberOfPeople) {
  let tipAmount, total;
  if (billValue && numberOfPeople > 0) {
    total = billValue / numberOfPeople;
    outputTotal(total);
    if (tipPercent) {
      tipAmount = ((billValue / numberOfPeople) * tipPercent) / 100;
      outputAmount(tipAmount);
      outputTotal(total + tipAmount);
    }
  } else if (numberOfPeople <= 0) {
    alert("People can't be 0");
  }
}

// Executar output dos calculos
function outputAmount(tipAmount) {
  return (document.getElementById("out-tipAmount").innerHTML =
    "$" + tipAmount.toFixed(2));
}

function outputTotal(totalPerPerson) {
  return (document.getElementById("out-total").innerHTML =
    "$" + totalPerPerson.toFixed(2));
}

// Limpar todos os valores dos campos
function reset() {
  const zero = 0;
  document.getElementById("out-total").innerHTML = "$" + zero.toFixed(2);
  document.getElementById("out-tipAmount").innerHTML = "$" + zero.toFixed(2);
  document.getElementById("field-bill").value = "";
  document.getElementById("field-people").value = "";
  tipPercent = zero;
}
