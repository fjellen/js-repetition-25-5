const x = 100;
const y = 5;


if (y > x) {
    console.log("Y is greater than x!");
} else {
    console.log("X is greater than y!");
}

const numbers = [4, 5, 2, 1, 5, 7, 5, 100, 40, 3.3, 100, 55, 9, 8];


for (const numb of numbers) {
    if (numb % 2 === 0) {
        console.log("Is divisible by 2: ", numb);
    } else if (numb === 8) {
        console.log("I like 8.");
    } else {
        console.log("Is not divisible by 2: ", numb);
    }
}