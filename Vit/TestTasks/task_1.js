//1. Составить алгоритм: если введенное число больше 7, то вывести “Привет”.

const prompt = require("prompt-sync")();


function displayHello(number) {

    do{
        number = prompt("Bведите число ");
    } while (isNaN(number)){
        if (number > 7){
            console.log('"Привет"');
        }
        else console.log("Число меньше 7");
    }
    
}

displayHello();
