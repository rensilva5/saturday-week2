//creating an array of objects
let students = [
    {
        name: "maxx",
        here: true,   // /they are here (true)
    },
    {
        name: "pam",
        here: true,
    },
    {
        name: "Javier",
        here: true,
    },
]

// returns an array of string w/ student's name only from the student array
function getStudentsNames (studentsArray) {
    let studentName = []
    for (let i = 0; i < studentsArray.length; i++) {
        studentName.push(studentsArray[i].name)
    }
    return studentName
}
console.table(getStudentsNames(students))

// //functions getStudentsNames(studentsArrays) {}

// const getStudentsNames = (studentsArray) => {
//     let studentName = []
//     for (let i = 0; i < studentsArray.length; i++) {
//         studentName.push(studentsArray[i].name)
//     }
//     return studentName
// }
// // print aut what the getStudents returns
console.log(getStudentsNames(students))

// let a = "hello"
// a ++
// console.log(a)