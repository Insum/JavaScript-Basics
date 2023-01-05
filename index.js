let person = {
    name: 'Eldar',
    age: 42
};

person.name = 'Eldar Terzic';

console.log(person);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'

console.log(selectedColors);

console.log(selectedColors[1]);



function square(number){
    return number * number;
}

var result = square(2);
console.log(result);