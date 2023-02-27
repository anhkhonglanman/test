
const replace = (array, from, to, elements) => {
    array.splice(array,from - to, ...elements)
}

let testArray = [1, 2, 100, 100, 6];

replace(testArray, 2, 4, [3, 4, 5]);

console.log(testArray)

const copyReplace = (array, from, to, elements) => [
    ...array.slice(0, from),
    ...elements,
    ...array.slice(to)
]

console.log(copyReplace([1,2,100,200,6], 2, 4, [3,4,5]))

const customerOrder = [];

const recordOrders = (time, ...birds) => {
    customerOrder.push({time, birds})
}

recordOrders(new Date, "coffee", "yogurt", "pizza")

console.log(customerOrder)