'use strict';

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let display = 0;

const addValue = () => {
    let domString = '';
    domString += display++;
    printToDom('displayValue', domString);
}

const subtractValue = () => {
    let domString = '';
    domString += display--;
    printToDom('displayValue', domString);
}

const onClickEvents = () => {
    document.querySelector("#addButton").addEventListener("click", addValue);
    document.querySelector("#minusButton").addEventListener("click", subtractValue);
};

const init = () => {
    onClickEvents();
}

init();