function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number= parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function take(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number= parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}

function times(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number= parseInt(number) * step;
    numberElement.innerText = number;
    console.log(number);
}