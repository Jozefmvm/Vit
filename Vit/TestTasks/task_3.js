//3. Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3.

function getNumbersMultiplesOfThree(){

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0 && (arr[i] % 3 == 0 )) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

getNumbersMultiplesOfThree();
