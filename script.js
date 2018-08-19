document.getElementById('container').oninput = function() {
  var bill = Number(document.getElementById('totalBill').value);
  var tipPercent = document.getElementById('tipInput').value;
  var Split = document.getElementById('tipSplit').value;
  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / Split;
  var rupee = document.getElementById("rupee");
  var dollar = document.getElementById("dollar");

  document.getElementById('tipOutput').innerHTML = tipPercent + "%";
  document.getElementById('splitOutput').innerHTML = Split;


  if (rupee.checked){
      document.getElementById('newBill').innerHTML = "₹" + newBillEach;
      document.getElementById('tipAmount').innerHTML = "₹" + tipValue;
  }  else if (dollar.checked) {
      document.getElementById('newBill').innerHTML = "$" + newBillEach;
      document.getElementById('tipAmount').innerHTML = "$" + tipValue;
  }

    }
