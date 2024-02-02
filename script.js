"use strict";
// Современный JavaScript поддерживает «классы» и «модули» — продвинутые структуры языка (и мы, конечно, до них доберёмся), которые автоматически включают строгий режим. Поэтому в них нет нужды добавлять директиву "use strict".
alert('«Я JavaScript!».');
// нажми ctrl + / что бы резко закоментировать
let admin;
let name = 'Джон';
admin = name;
alert(admin);
const NUMBER= 5; //константы обычно объявляются в верхнем регистре и с использованием _
/*Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:

Не будет ошибкой
let message = "hello";
message = 123456;

Языки программирования, в которых такое возможно, называются «динамически типизированными». 
Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.*/
