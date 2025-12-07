/* 
let userName="Luba";
const hallo="Hallo, "
var testVar="!!!"
console.log(hallo+userName+testVar);
console.log( typeof testVar);
let id = Symbol("id");
console.log(id);
alert(id.description); 
alert(id.toString()); 
console.log(id.toString()); */
// let user = {
//   name: "Вася"
// };

// let id = Symbol("id");
// let job = Symbol("job");

// user[id] = 2;
// user[job] = "Elektrik";

// alert( user[job] );

// console.log("10" !== 10);
// // console.log("10" != 10);
// const time=12;
// if(time!=11) {console.log (time+" is "+"evening");}
//  if(time>=12) { console.log ("morning");}

//  console.log(time==12?"yes":"no");
//  console.log(`hi ${time}`);

/*  let func=(a,b)=>console.log(a+b);
 func(3,5);

 (function (a,b) {console.log(a+b)})(11,12);
 let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет! */
/* let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK */
/* let i = 3;

while (i) {
  alert( i-- );
} */
/* let i = 0;
while (i++ < 5) alert( i );
 */
//for (let i = 0; i < 5; i++) alert( i );
//for (let i = 0; i < 5; ++i) alert( i );

//for(let i=2; i<=10; i+=2){console.log(i)}

/* for(let i = 2; i <= 10; ++i)
    {if(i % 2 ===1) continue;
   else console.log("!"+i);}*/
/* let i = 0; 
while(i<=10){i++;
    if(i % 2 ===1) continue;
    else console.log("#"+i);
} */
/* let i = 2; 
while(i<=10){
    
    console.log("@"+i);i+=2;
} */
/*  nextNum:
for (let i = 2; i <= 10; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {continue nextNum; }
    
  } 
  console.log(i); 
} 
let n = 10;
/*
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}
let arr1=[1,2,3];
let arr2=[1,2,3];
console.log(arr1==arr2);
console.log(arr1===arr2); */
/* let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
console.log(user.valueOf());
console.log(user); */

/* ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  alert(`У ${item} индекс ${index} в ${array}`);
}); */

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

/* let user = users.find(item => item.id == 1);

// alert(user.name); // Вася

let user2 = users.find(item => item.name == "Петя");

console.log(user2.id); 
alert(users.findIndex(user => user.name == 'Вася')); // 0 */

/* let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2 */
/* 
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6 */

/* function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15 */

/* let arr = [ 1, 33, 2, 15, 4 ];
arr.sort( (a, b) => a - b );
arr.sort( (a, b) => b - a );

console.log(arr);
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (неправильно)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (правильно!) */

/* let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1 */

/* let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

let arr = ['Вася', 'Петя', 'Маша'];

let str = arr.join(';'); // объединить массив в строку через ;

alert( str ); // Вася;Петя;Маша
 */

/* let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}


recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // огурец: 500 и так далее
});
 */

/* let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) alert(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
}); */
/* Map – коллекция пар ключ-значение.

Методы и свойства:

new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар [ключ,значение] для инициализации.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
Отличия от обычного объекта Object:

Что угодно может быть ключом, в том числе и объекты.
Есть дополнительные методы, свойство size.
Set – коллекция уникальных значений, так называемое «множество».

Методы и свойства:

new Set(iterable) – создаёт Set, можно указать перебираемый объект со значениями для инициализации.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве. */

/* Шпаргалка по методам массива:

Для добавления/удаления элементов:

push(...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом. */
/* let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15 */

/* let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

alert( user.name ); // все ещё John в первоначальном объекте */