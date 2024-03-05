// const userID = ["My", "name", "is", "Jimmy", "Listana", "Tejano.", "\nI", "am", 22, "years", "old.", "\nMy", "email", "is", "jimmytejano94@gmail.com.", "\nI","am", "a", "BSCS", "3rd", "year", "student."];

// console.log(...userID);

// const arr1 = ["one", "two"];
// const arr2 = ["three", "four", "five"];
// const combined = [...arr1, ...arr2];

// console.log(combined);

// const numbers = ["1", "2", "3", "4", "5"];
// numbers.push = ["6"];

// console.log(numbers);

// const digits = [1, 16, 36, 49, 25];
// const digitsIndex = digits.map((item,index) =>{
//     return {
//         index: index + 1,
//         card: item
//     };
// })

// console.log(digitsIndex);

let digits = [1, 2, 3, 4, 5];
let result = digits.filter((item) => {
    return item > 3;
})

console.log(result);