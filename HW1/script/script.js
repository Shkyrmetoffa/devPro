/* Cортировка пузырьком*/
let arrSort = [4, 2, 7, 8, 4, 7];

for (let j = 0; j < arrSort.length; j++) {
    for (let i = 0; i < arrSort.length - 1; i++) {
        if (arrSort[i] > arrSort[i + 1]) {
            let k = arrSort[i];
            arrSort[i] = arrSort[i + 1];
            arrSort[i + 1] = k;
        }
    }
}
console.log(arrSort);
/* Cортировка вставкой*/
let sortArr = [2, 1, 4, 3, 1, 5];

const insertionSort = (arr) => {
    for (i = 1; i < arr.length; i++) {
        let over = arr[i];

        for (j = i - 1; j >= 0 && arr[j] > over; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = over;
    }
    return arr;
}

console.log(insertionSort(sortArr));

/* Изменить входящий массив чисел таким образом, чтобы все числа были поделены на 2.
Использовать map.
*/
let arr = [2, 5, 22, 4, 8, 10, 12];

const mapArr = (arr) => arr.map(val => val / 2);
// console.log(mapArr(arr));
/* Та  же задача, но с reduce
 */
const reducedArr = (arr) => {
    let newArr = [];
    arr.reduce((prev, val) => {
        newArr.push(val / 2);
    }, "");
    return newArr;
}
console.log(reducedArr(arr));

//Aлгоритм нахождения НОД

const nod = (num1, num2) => {
    let remainder = num1 % num2;

    while (remainder != 0) {
        num1 = num2;
        num2 = remainder;
        remainder = num1 % num2;
    }
    return num2;
}
console.log(nod(1024, 520));

// Алгоритм нахождения НОК
const nok = (n, m) => n * m / nod(n, m);
console.log(nok(3, 9));