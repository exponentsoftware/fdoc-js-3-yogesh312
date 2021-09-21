const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students){
    newObject = []

    for(let i = 0; i < students.length; i++){  
        let [names, skills, scores] = students[i]
        let object = {
            name: names,
            skills: skills,
            scores: scores
                }
        newObject.push(object)}   
        return newObject
    }

//convertArrayToObject(students)
console.log(convertArrayToObject(students))

