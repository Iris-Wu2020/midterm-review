/* hw5
Exercise 3 JavaScript code
*/
console.log("Wu's Output from hw5 Exercise 3");
//Declare studentList Array
const studentList = [ 
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    }
];
// TO DO - Write higher order functions / There are many solutions

const cLastNameResults = studentList.filter(student => student.lastName[0] === 'C').map(
student => {
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: Math.min.apply(Math,student.scores),
        maxScore: Math.max.apply(Math,student.scores),
        avgScore: student.scores.reduce((sum, value) => sum + value, 0) / student.scores.length

    };
});
    

//Declare cLastNameResults.  Use functions and map a new array of objects

//Output

console.log(cLastNameResults);
