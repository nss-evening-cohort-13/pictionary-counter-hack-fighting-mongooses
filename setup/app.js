'use strict';

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let display = 0;

const addValue = () => {
  display++;
  printToDom('displayValue', display);
  colorValue();
}

const subtractValue = () => {
  display--;
  printToDom('displayValue', display);
  colorValue();
}

const colorValue= () => {
  if (display > 0) {
  document.querySelector('#displayValue').style.color = '#25B14C';
  } else if (display < 0) {
  document.querySelector('#displayValue').style.color = '#D23A3A';
  } else if (display === 0) {
  document.querySelector('#displayValue').style.color = '#000000';
  }
};

const resetValue = () => {
  display = 0;
  printToDom('displayValue', display);
  colorValue();
  
}
const onClickEvents = () => {
    document.querySelector("#addButton").addEventListener("click", addValue);
    document.querySelector("#minusButton").addEventListener("click", subtractValue);
    document.querySelector("#resetButton").addEventListener("click", resetValue);
};

onClickEvents();
colorValue();
