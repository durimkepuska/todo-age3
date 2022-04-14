// let ages = [10, 20, 30, 40, 50];
//
// let temp = ages[1];
// ages[1] = ages[2];
// ages[2] = temp;
//
// console.log(ages)

let salaries = [100, 200, 300, 400, 500, 1000, 2000, 3000];
for (let i = 0; i < salaries.length; i++) {
    if (salaries[i] < 1000) {
        salaries[i] = salaries[i] + 100;
    }
}

console.log(salaries)
