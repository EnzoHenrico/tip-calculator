let tipPercent, billValue, numberOfPeople;

// Validação de entradas

function validateBill(billValue) {
  if (billValue.isNaN()) {
    calculate(tipPercent, billValue, numberOfPeople);
  } else {
    alert("só numero");
  }
}
function validatePeople(peopleValue) {
  if (peopleValue == 0) {
    document.getElementById("error").style.display = "inline";
  }
  calculate(tipPercent, billValue, numberOfPeople);
}
function validatePercent(percentValue) {
  calculate(tipPercent, billValue, numberOfPeople);
}

// Condicional de calculo
function calculate(tipPercent, billValue, numberOfPeople) {
  if ((billValue, numberOfPeople)) {
    totalPerPerson(billValue, numberOfPeople);

    if (tipPercent) {
      tipAmountPerPerson(tipPercent, billValue, numberOfPeople);
    }
  }
}

// Cálculo do "Tip Amount per person"
function tipAmountPerPerson(tipPercent, billValue, numberOfPeople) {
  const tipAmount = ((billValue / numberOfPeople) * tipPercent) / 100;

  return (document.getElementById("out-tipAmount").innerHTML =
    "$" + tipAmount.toFixed(2));
}

// Cálculo do "Total per person"
function totalPerPerson(billValue, numberOfPeople) {
  const total = billValue / numberOfPeople;

  return (document.getElementById("out-total").innerHTML =
    "$" + total.toFixed(2));
}

// Limpar todos os valores dos campos
function reset() {
  const zero = 0;
  document.getElementById("out-total").innerHTML = "$" + zero.toFixed(2);
  document.getElementById("out-tipAmount").innerHTML = "$" + zero.toFixed(2);
  document.getElementById("field-bill").value = "";
  document.getElementById("field-people").value = "";
  tipPercent = 0;
}
