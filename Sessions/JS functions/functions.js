function sum(start, finish) {
    let sumOfNumbers = 0;
    for (let i = start; i <= finish; i++) {
        sumOfNumbers = sumOfNumbers + i;
    }
    return sumOfNumbers;
}


function weekDays(day) {
    switch (day) {
        case 1:
            return "e hene"
        case 2:
            return 'e marte'
        default:
            return 'nuk dihet'
    }
}

function retired(age) {
    if (age <= 18) {
        return "still young";
    } else if (age <= 65) {
        return "still able to work"
    } else {
        return "retired"
    }
}

function countChars(name) {
    return name.length;
}
