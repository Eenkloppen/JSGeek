'use stirct';

// Задание №1

let number = prompt("Введите число в диапазоне от 0 до 9999");

if(number === null){
    alert('Вы нажали "Отмена"');
} else if(number > 9999){
    alert('Вы вышли за диапазон значений')
} else if(number === ''){
    alert('Вы ничего не ввели')
}

function numberToObject(number)
{
    let arrayNumber = number.split('');
    while (arrayNumber.length < 4){
        arrayNumber.unshift(0);
    }
    let objectNumber = {};
    if (arrayNumber.length > 4){
        return null;
    } else {
        objectNumber['тысячи'] = Number(arrayNumber[0]); 
        objectNumber['сотни'] = Number(arrayNumber[1]); 
        objectNumber['десятки'] = Number(arrayNumber[2]);
        objectNumber['единицы'] = Number(arrayNumber[3]);

        return objectNumber;
    }
}
let result = numberToObject(number);
console.log(result);
