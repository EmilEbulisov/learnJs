"use strict";
// Современный JavaScript поддерживает «классы» и «модули» — продвинутые структуры языка (и мы, конечно, до них доберёмся), которые автоматически включают строгий режим. Поэтому в них нет нужды добавлять директиву "use strict".
alert('«Я JavaScript!».');

//Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».



// нажми ctrl + / что бы резко закоментировать

let admin;
let name2 = 'Джон';
admin = name2;
alert(admin);
const NUMBER= 5; //константы обычно объявляются в верхнем регистре и с использованием _




/*Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:

Не будет ошибкой
let message = "hello";
message = 123456;

Языки программирования, в которых такое возможно, называются «динамически типизированными». 
Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.*/





alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)





let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

let name = prompt('Как тебя зовут?', Vasya);

alert(`Привет ${name} !`); // Привет Vasya
/*undefined при численном преобразовании становится NaN, не 0.
"0" и строки из одних пробелов типа " " при логическом преобразовании всегда true.*/



/*Тот факт, что = является оператором, а не «магической» конструкцией языка, имеет интересные последствия.

Большинство операторов в JavaScript возвращают значение. Для некоторых это очевидно, например сложение + или умножение *. Но и оператор присваивания не является исключением.

Вызов x = value записывает value в x и возвращает его.

Благодаря этому присваивание можно использовать как часть более сложного выражения:*/

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0


// Если хочется тут же использовать результат, то нужна префиксная форма:

let counter1 = 0;
alert( ++counter1 ); // 1

// Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма:

let counter = 0;
alert( counter++ ); // 0

/*
    AND(и) ( & )
    OR(или) ( | )
    XOR(побитовое исключающее или) ( ^ )
    NOT(не) ( ~ )
    LEFT SHIFT(левый сдвиг) ( << )
    RIGHT SHIFT(правый сдвиг) ( >> )
    ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true 

// Например, в JavaScript имеет значение регистр символов. Заглавная буква "A" не равна строчной "a". Какая же из них больше? Строчная "a". Почему? Потому что строчные буквы имеют больший код во внутренней таблице кодирования, которую использует JavaScript (Unicode). Мы ещё поговорим о внутреннем представлении строк и его влиянии в главе Строки.