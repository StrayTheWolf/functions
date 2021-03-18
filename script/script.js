'use strict'

//Возведение в степень
console.log('Возведение в степень')

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

const power = pow(2, 5);
console.log(power);

//Повторение
console.log('Повторение строк')

function repeat(str, n = 2) {
    return str.repeat(n);
}

let stringRepeat = repeat('hello', 5);
console.log(stringRepeat);


//Меньшее из чисел
console.log('Меньшее из чисел')

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a
    }
}

let minNumber = min(10, 15)
console.log(minNumber);

//Наибольшее числов в массиве
console.log('Наибольшее числов в массиве')

function maxArrayNumber(arr) {
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

let maxValue = maxArrayNumber([2, 4, 6, 8, 7, 8, 5, 2, 10, 12, 20, 1]);
console.log(maxValue);

//Функция RGB
console.log('Функция RGB')

function numberToString(num1, num2, num3) {
    let str = 'rgb' + '(' + num1.toString() + "," + num2.toString() + ',' + num3.toString() + ')'
    return str;
}

let rgbString = numberToString(23, 100, 34)
console.log(rgbString);

// Функция с товарами
console.log('Функция с товарами')

function getFormatedString(count = 0) {
    let exitNumber = 0;
    let number = count.toString().split('')
    number = number.map(Number);
    console.log(number)
    console.log(number.length)
    for (let i = 0; i < number.length; i++) {
        if (number[i] >= 5 && number[i] <= 20) {
            exitNumber = number[i] + ' - Товаров'
        }
        if (number[i] >= 2 && number[i] <= 4) {
            exitNumber = number[i] + ' - Товара'
        }
        if (number[i] === 1) {
            exitNumber = number[i] + ' - Товар'
        }
    }
    return exitNumber;
}

let goods = getFormatedString(14);
console.log(goods);


// Функция последоовательность
console.log('Функция последоовательность')

function sequence(start, step = 1) {
    let number = start;
    return function () {
        let returnValue = number;
        number += step;
        return returnValue;
    }
}

let generator = sequence(10, 5);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());

// Работа со строками
console.log('Работа со строками')

function changeLetterCamel(str) {
    let text = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            text += str[i].toUpperCase();
        } else {
            text += str[i].toLowerCase();
        }
    }
    return text;
}

console.log(changeLetterCamel('GAMEloadnig'));