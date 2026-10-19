//--------var----------------
// "use strict"

// // unexpected behaviour


// console.log(totalMarks);

// // declaration + initalization

// var totalMarks = 100;
// console.log(totalMarks);

// // 1000code
// // re declaration (this work but can introduce bug)

// var totalMarks = 900;
// console.log(totalMarks);

// //re-assign

// totalMarks=700;
// console.log(totalMarks);

// //----------LET------------
// "use strict"

// // expected behaviour


// // console.log(totalMarks);

// // declaration + initalization

// let totalMarks = 100;
// console.log(totalMarks);

// // 1000code
// // re declaration (not allowed)

// // let totalMarks = 900;
// // console.log(totalMarks);

// //re-assign(allowed)

// totalMarks=700;
// console.log(totalMarks);

//--------------CONST----------
"use strict"

// expected behaviour


// console.log(totalMarks);

// declaration + initalization

const totalMarks = 100;
console.log(totalMarks);

// 1000code
// re declaration (not allowed)

// const totalMarks = 900;
// console.log(totalMarks);

//re-assign(not allowed)

totalMarks=700;
console.log(totalMarks);