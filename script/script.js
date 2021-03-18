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
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str + ' ';
    }
    return result;
}

let stringRepeat = repeat('hello', 5);
console.log(stringRepeat);


//Меньшее из чисел
console.log('Меньшее из чисел')

function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

let minNumber = min(10, 15)
console.log(minNumber);

//Наибольшее числов в массиве
console.log('Наибольшее числов в массиве')

function maxArrayNumber(arr) {
    let largestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
            if (arr[i] <= arr[i + 1]) {
                break;
            }
        }
    }
    return largestNumber;
}

let maxValue = maxArrayNumber([-1, -2, -1, -3, -4]);
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
    let result = 0;
    let number = count.toString().split('')
    let lastDigitArr = number.slice(-1);
    let lastDigit = Number(lastDigitArr[lastDigitArr.length - 1]) // тут последний элемент массива преорбразуется из строки в число и кладется в переменную

    let exitNumber = number.join('')

    if (lastDigit >= 5 && lastDigit <= 20) {
        result = exitNumber + ' - Товаров'
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        result = exitNumber + ' - Товара'
    }
    if (lastDigit === 1) {
        result = exitNumber + ' - Товар'
    }

    return result;
}

let goods = getFormatedString(42);
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