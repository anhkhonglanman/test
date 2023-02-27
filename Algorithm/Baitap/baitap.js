function countOccurrence (numbers, value) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers === value) {
            count ++
        }
    }
    return count
}

const numbers = [1, 1, 2, 3, 1, 1, 4];
const value = 1;

const count = countOccurrence(numbers , value);

console.log(` Số lần xuất hiện của giá trị ${value} là : ${count} `);

