// const studentName = "Tushar";
// const studentcity ="M/garh";
// const studentrollNumber = "2616400118";
// const studentcollege ="KRMU";

// const student = {
//     name: "Tushar",
//     city: "M/garh",
//     college: "KRMU",
//     rollNumber: "2616400118"
// };
// console.log (student);
// console.log(typeof student);

// console.log (student.name);
// console.log(student["city"]);

// console.log(student.rollNumber);
// console.log(student["rollNumber"]);

// console.log(student.phone);

// student["Country"] = "INDIA";
// console.log(student);

// student["college"] = "Zenith";
// console.log(student);
// ---------------/////////////---------------------------------
// const product = {
//     title: "Monitor",
//     price:7000,
//     brand: "Sony",
// };
// console.log(product);
// product.warranty = '3 years';
// product.price = '9000';
// console.log(product);
// product.price  = 11000;


// const student = {
//     name: "Tushar",
//     city: "M/garh",
//     college: "KRMU",
//     rollNumber: "2616400118"
// };
// console.log(student);
// delete student.college;
// console.log(student);


const student = {
    name: "Tushar",
    city: "M/garh",
};
const teacher = student;
teacher.name = "Anuj";
console.log(student);