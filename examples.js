let total = 0;
for (let num = 1; num < 11; num++) {
  //console.log(num);
  total += num;
}

console.log('The Total is ' + total);


//***************************************************************************************/


let fruits = ['Mango', 'Banana', 'Apple'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


//***************************************************************************************/


let data = {
  name: 'Jeremy',
  age: 43,
  maritalStatus: false
}

for (elem in data) {
  console.log(elem, data[elem]);
}


//***************************************************************************************/

let num2 = 1;

while (num2 <=10) {
  console.log(num2);
  num2++;
}


//***************************************************************************************/


let sum = 0;
let num3 = 0;

while (num3 <= 10) {
  sum += num3;
  num3++;
}


//***************************************************************************************/


let randomStuff = ['apple', 3.2414, 9999, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastObject'];

let x = 0;

while (x < randomStuff.length) {
  console.log(randomStuff[x]);
  x++;
}


//***************************************************************************************/


let otherStuff = ['apple', 3.2414, 9999, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastObject'];

let num = otherStuff.length - 1;

while (num >= 0) {
  console.log(otherStuff[num]);
  num--;
}


//***************************************************************************************/


let cars = ['Lambo', 'BMW', 'Tesla'];

let num = 0;

while (num < cars.length) {
  console.log(cars[num]);
  num++;
}


//***************************************************************************************/


function printerArray(mango) {
    for (let i = 0; i < mango.length; i++) {
      console.log(mango[i]);
    }
  }
  
  printerArray(['cat', 'kangaroo', 'spider', 'racoon', 'Joe']);