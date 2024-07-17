let calculator =  document.getElementById('outputScreen')
function clr() {
    calculator.innerText = '';
}


function del() {
    calculator.innerText = calculator.innerText.slice(0, -1);
}

function display(n) {
    calculator.innerText += n;
}


function calc() {
    try {
        calculator.innerText = eval(calculator.innerText);
    } catch {
        calculator.innerText = 'ERROR';
    }
}

