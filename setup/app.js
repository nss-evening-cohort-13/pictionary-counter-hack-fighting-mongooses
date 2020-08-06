'use strict';

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let display = 0;

const addValue = () => {
  let domString = '';
  display++;
  domString += display;
  printToDom('displayValue', domString);
  colorValue();
}

const subtractValue = () => {
  let domString = '';
  display--;
  domString += display;
  printToDom('displayValue', domString);
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
