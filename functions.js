// klassiska
function myFunction() {
    return 1;
}

function myFunctionWithArguments(x, y, z) {
    return x * y * z;
}

// arrow function
const myOtherFunction = () => 1;

const myOtherFunctionWithArguments = (x, y, z) => x * y * z;

const arrowFunctionOneArgument = x => x * 2;

// ================= funktioner i funktioner ===============


function something(x) {
    const result = x();
    console.log("result is: " + result);
}
/*
something(function() {
    return 5;
});
something(() => 5);
*/


/* ============== funktioner som returnerar funktioner ================== */


function getCalculationFunction() {
    return function(x, y) {
        return x * y;
    }
}

const result = getCalculationFunction();
const actualResult = result(5, 100);

//console.log(actualResult);


const getFunction = () => x => x / 2;

const result123 = getFunction();
const myResult = result123(10);

console.log(myResult);