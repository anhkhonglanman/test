// const obj = {
//     property_1 : value_1,   // giá trị thuộc tính có thể là một định danh
    
//     2 :          value_2,   // hoặc là một số

//     // ...,

//     'property n': value_n   // hoặc là một chuỗi
// }

// ví dụ

// const myHonda = {
//     color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}
// };

// 1 ví dụ khác

function Car(make, model, year) {
    this.make = make;

    this.model = model;

    this.year = year;
}

const myCar = new Car('Eagle', 'Talon TSi', 1993);

const vpgscar = new Car('Mazda', 'Miata', 1990);

const kenscar = new Car('Nissan', '300ZX', 1992);

console.log(myCar)
console.log(vpgscar)
console.log(kenscar)