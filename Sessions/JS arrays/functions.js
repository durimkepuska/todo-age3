let ages = [10, 20, 30, 40, 50];

let temp = ages[1];
ages[1] = ages[2];
ages[2] = temp;

console.log(ages)

