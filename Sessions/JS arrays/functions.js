// let ages = [10, 20, 30, 40, 50];
//
// let temp = ages[1];
// ages[1] = ages[2];
// ages[2] = temp;
//
// console.log(ages)

// let salaries = [100, 200, 300, 400, 500, 1000, 2000, 3000];
// for (let i = 0; i < salaries.length; i++) {
//     if (salaries[i] < 1000) {
//         salaries[i] = salaries[i] + 100;
//     }
// }
//
// console.log(salaries)

// let names = ["durim", "libert", "arber"];
//
// for (let i = 0; i < names.length; i++) {
//     if (names[i].includes('e')) {
//         console.log(names[i])
//     }
// }

let persons = [{
    bankAccount: 222222,
    name: "Durim",
    lastname: "Kepuska",
    salary: 500,
}, {
    bankAccount: 111111,
    name: "Liberti",
    lastname: "Liberti",
    salary: 600,
}, {
    bankAccount: 33333,
    name: "Arberi",
    lastname: "Arberi",
    salary: 2000,
}];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].salary < 1000) {
        persons[i].salary = persons[i].salary + 100;
        console.log(persons[i].bankAccount)
    }
}
console.log(persons)

