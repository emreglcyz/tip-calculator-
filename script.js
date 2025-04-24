const billAmount = document.querySelector('#bill-amount');
const tipPercentage = document.querySelector('#tip-percentage');
const calculateBtn = document.querySelector('#btn');

let isReset = false;

calculateBtn.addEventListener('click', () => {
  if (!isReset) {
    
  // Calculations and Ensure User Types Both Input Values.
  const bill = Number(billAmount.value);
  const tipPercent = Number(tipPercentage.value);

  if (!bill || !tipPercent) {
    alert("Please enter both bill amount and tip percentage.");
    return;
  }  

  const tipAmount = (bill / 100) * tipPercent;
  const total = bill + tipAmount;
  
  // Create result field.
  const result = document.createElement('div');
  result.id = 'result';

  result.innerHTML = `
    <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
    <p>Bill Total: $${total.toFixed(2)}</p>
  `;

  document.querySelector('section').appendChild(result); 

  // Hide and Reset Input Fields.
  billAmount.style.display="none";
  tipPercentage.style.display="none";
  calculateBtn.textContent="Reset"; 
  isReset = true;
  } else {
    billAmount.style.display="block";
    tipPercentage.style.display="block";
    calculateBtn.textContent="Calculate Tip Amount";

    const resultDiv = document.querySelector('#result');
    if (resultDiv) {
      resultDiv.remove();
    }

    billAmount.value = '';
    tipPercentage.value = '';
    isReset = false;
  }
  })


















