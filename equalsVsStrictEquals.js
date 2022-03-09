// = VS == VS ===

// = in JS is used for assignment of values to variables. ex:

let power = 105;
let hot = 97;
console.log(hot); //prints: 97

//      - does not return true or false.
//      - will not compare value of variables

// == in JS is used for comparing two variables, but will ignore the datatype. ex:

"hot" == 97;
console.log("hot" == 97); //prints: false

if ("hot" == 97) { // prints: 105
    console.log(hot);
} else {
    console.log(power);
}


//      - checks the equality of two operands without considering their type.
//      - will return true if the operands are equal. It will return false if the two operands are not equal.
//      - checks for equality only after doing necessary conversions

// === in JS is used for comparing two variables, but this operator will also check the datatype. ex:

"hot" === 97;
console.log("hot" === 97); //prints: false

if (hot === power) { // prints: djenvy
    console.log("ebro");
} else {
    console.log("djenvy");
}

if (power === power) { // prints: 1-5
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

} else {
    console.log("djenvy");
}


//      - compares equality of two operands with their types.
//      - it returns true only if both values and data types are the same for the two variables.
//      - if two variable values are not similar then === will not perform any conversion.


// =================KEY POINTS============================

// = is used for assigning values to a variable, == is used for comparing two variables, but it ignores the datatype of variable whereas === is used for comparing two variables, but this operator also checks datatype and compares two values.

// = is called as assignment operator, == is called as comparison operator whereas It is also called as comparison operator.

// = does not return true or false, == Return true only if the two operands are equal while === returns true only if both values and data types are the same for the two variables.