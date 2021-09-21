// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}
const newStudent ={...student};
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')
// console.log(newStudent.skills.dataBase)

// Use the student object to solve the following questions: 
// a. Find the length of student object keys 
// b. Find the length of the student object values 
// c. Find the length of skills object keys 
// d. check if the student object has graphicDesign property 
// e. Iterate the keys of the student object

// a
const keyLength = Object.keys(student).length
console.log(keyLength)

//b
const valuesLength = Object.values(student).length
console.log(valuesLength)

//c
const skillKeysLength = Object.keys(student.skills).length
console.log(skillKeysLength)

//d
const keys = Object.keys(student)
for(let i = 0; i < keys.length; i++){
    if(keys != 'graphicDesign'){
        console.log('property does not exist')
        break
    }
}

//e
const Allkeys = Object.keys(student)
console.log(Allkeys) 
