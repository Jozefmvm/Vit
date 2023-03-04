//2. Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет,
// Вячеслав”, если нет, то вывести "Нет такого имени".

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function chekcName(){
   
    readline.question("Введите имя ", name => {
    
        if (name === "Вячеслав"){
            console.log("Привет, Вячеслав");
        }
        else console.log("Нет такого имени");
        readline.close();
        });
      
}
    
chekcName();
