let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let produce = [
    {name: "banana", price: 3.99},
    {name: "apple", price: 0.79},
    {name: "pear", price: 1.29},
    {name: "pepper", price: 2.19},
    {name: "cucumber", price: 1.89},
]

console.log(array)
console.log(produce)

console.log(produce.includes("pepper"))

for (let i of produce) {
    console.log(i)
}

for (let item of array) {
    console.log(item)
}

array.push(11)
console.log(array)

array.pop()
console.log(array)

array.shift()
console.log(array)

array.unshift(0, 1)
console.log(array)

