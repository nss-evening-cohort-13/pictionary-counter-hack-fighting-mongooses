'use strict';

const colorValue= () => {
    if (displayValue > 0) {
    document.querySelector('displayValue').style.color = '#25B14C'
    } else if (displayValue < 0) {
    document.querySelector('displayValue').style.color = '#D23A3A'
    } else {
    document.querySelector('displayValue').style.color = '#000000'
    }
};

colorValue();
