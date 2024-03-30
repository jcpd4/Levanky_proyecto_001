function operate(operation) {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var result;

    switch(operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if(number2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            result = number1 / number2;
            break;
        default:
            result = "Operación no válida";
    }
    document.getElementById('result').innerText = "Resultado: " + result;
}
