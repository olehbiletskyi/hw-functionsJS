//1. Напишіть функцію, що повертає куб числа.
/*

alert('task1');
//******************************************
function getCube(x) {
    return (x * x * x);
}
console.log(getCube(5));
//******************************************
let getKube = function (x) {
    let result = Math.pow(x,3);
    return result;
}
console.log(getKube(5));
//******************************************
let getCubeOfNumber = (x) => x ** 3;
console.log(getCubeOfNumber(5));














//2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
alert('task2');
function actionWithNumbers (a, b, c) {
    return ( ( a + b ) / c );
}
console.log(actionWithNumbers(1,2,3));
//******************************************
let action2 = function (a, b, c) {
    let result = ( a + b) / c;
    return result;
}
console.log(action2(1,2,3));
//******************************************
let action3 = (a, b, c) => { return ((a+b)/c); };
console.log(action3(1,2,3));













//3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня.
alert('task3');


function getDay (numberOfDay) {
    switch (numberOfDay) {
        case 1 : return "monday";
        case 2 : return "tuesday";
        case 3 : return "wednesday";
        case 4 : return "thursday";
        case 5 : return "friday";
        case 6 : return "saturday";
        case 7 : return "sunday";
        default : return "Неправильне число";
    }
}
console.log(getDay(6));
//******************************************
let getDay2 = function (numberOfDay) {
    switch (numberOfDay) {
        case 1 : return "monday";
        case 2 : return "tuesday";
        case 3 : return "wednesday";
        case 4 : return "thursday";
        case 5 : return "friday";
        case 6 : return "saturday";
        case 7 : return "sunday";
        default : return "Неправильне число";
    }
}
console.log(getDay2(7));
//******************************************
let getDay3 = (numberOfDay) => {
    switch (numberOfDay) {
        case 1 : return "monday";
        case 2 : return "tuesday";
        case 3 : return "wednesday";
        case 4 : return "thursday";
        case 5 : return "friday";
        case 6 : return "saturday";
        case 7 : return "sunday";
        default : return "Неправильне число";
    }
}
console.log(getDay3(8));

//******************************************
week = {
    1: {day: "Monday"},
    2: {day: "Tuesday"},
    3: {day: "Wednesday"},
    4: {day: "Thursday"},
    5: {day: "Friday"},
    6: {day: "Saturday"},
    7: {day: "Sunday"},
}

//obj['day']

let getDay4 = (numberDayOfWeek) => {
        const obj = week[numberDayOfWeek];
        return obj ? obj.day : 'неправильний номер'
    }
alert(getDay4(3));









*/

//4. Реалізуйте функцію знаходження факторіала
alert('task4');

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
alert( factorial(5) );









/*
5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
alert('task5');









6. Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".
alert('task6');
*/










//7. 4 відмінності ерров фанкшина від звичайної функції.
//-коротший спосіб написання синтаксису, коли лінь писати багато коду))
//-у стрілкових функцій немає this, якщо потрібно - його значення береться зовні.-?
//-стрелочные функции не могут быть использованы как конструкторы. Они не могут быть вызваны с new-?
//-У стрелочных функций также нет переменной arguments.-?
//-у них также нет super.-?













/*
Повторим для закрепления. 
Область видимости var переменных ограничена функцией, если вы обратитесь к переменной до её объявления, то получите undefined. const и let ограничены блоком, а попытка обратится к переменной до её объявления, вернётся ошибкой ReferenceError.
И наконец, разница между let и const в том, что в первом случае вы можете изменить значение переменной, а во втором нет.

var VS let VS const
var: 
  function scoped
  undefined when accessing a variable before it's declared
let: 
  block scoped
  ReferenceError when accessing a variable before it's declared
const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  can't be reassigned
*/