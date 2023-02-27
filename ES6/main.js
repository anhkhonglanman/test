const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];

const cars2 = [...cars1];

const cars3 = [...cars1,"NISSAN", "TOYOTA"];

const cars4 = ["NISSAN", "TOYOTA"];

const cars5 = [...cars4, ...cars5];

const cars6= {
    Brand : "Toyota",
    Color : "RED"
}
const cars7= {
    Brand : "NISSAN",
    Color : "BLUE",
    Year :2004
}
const cars8 = {...cars6, ...cars7}

const numbers = [3,5,7,9];
const [a,b,...others] = numbers;

console.log(a)
console.log(b)
console.log(others)