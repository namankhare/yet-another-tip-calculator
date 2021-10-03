let usd = document.getElementById('usd').value
let inr = document.getElementById('inr').value
let eur = document.getElementById('eur').value
let gby = document.getElementById('gby').value
let jpy = document.getElementById('jpy').value


let dropDown = document.querySelector("select");
dropDown.onchange = (() => {
  let currency = dropDown.value;
  if (currency === inr) {
    
    document.getElementById('currencySign1').innerText = `₹`;
    document.getElementById('currencySign2').innerText = `₹`;
  }
  else if (currency === usd) {
    
    document.getElementById('currencySign1').innerText = `$`;
    document.getElementById('currencySign2').innerText = `$`;
  }
  else if (currency === gby) {
    
    document.getElementById('currencySign1').innerText = `£`;
    document.getElementById('currencySign2').innerText = `£`;
  }
  else if (currency === eur) {
    
    document.getElementById('currencySign1').innerText = `€`;
    document.getElementById('currencySign2').innerText = `€`;
  }
  else if (currency === jpy) {
    
    document.getElementById('currencySign1').innerText = `¥`;
    document.getElementById('currencySign2').innerText = `¥`;
  }
});

var Split = document.querySelector("#tipSplit");
var tipPercent = document.getElementById('tipInput');

Split.oninput = (() => {
  let value = Split.value;
  splitOutput.textContent = value;
});

tipPercent.oninput = (() => {
  var tippper = tipPercent.value;
  document.getElementById('tipOutput').textContent = "%";

});

let btn = document.getElementById('button');
btn.addEventListener('click', Calculate);

function Calculate() {
  let bill = parseFloat(document.getElementById('totalBill').value);
  let tipPercent = document.getElementById('tipInput').value;
  let people = Split.value;
  let tipValue = bill * ( tipPercent/ 100);
  let tipPerPerson = (tipValue/people).toFixed(2);
  let totalPerPerson = ((bill + tipValue) / people).toFixed(2);
  document.getElementById('tipAmount').innerHTML = tipPerPerson;
  document.getElementById('newBill').innerHTML = totalPerPerson;
  console.log(tipPercent,tipValue, bill);
}

