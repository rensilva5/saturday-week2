let students = [
    {
        name: "maxx",
        here: true,
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

function getStudentsNames (studentsArray) {
    let studentName = []
    for (let i = 0; i < studentsArray.length; i++) {
        studentName.push(studentsArray[i].name)
    }
    return studentName
}
console.log(getStudentsNames(students))