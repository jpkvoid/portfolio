let list = [];
let element = prompt('add element to choose from');

while (element) {
  list.push(element);
  element = prompt('add element to choose from');
}

let result = list[Math.floor(Math.random()*list.length)].toUpperCase();

alert('the choice is: '+result);
