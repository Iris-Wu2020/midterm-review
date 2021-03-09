console.log("Outcome from tut6q7");

const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
  }, {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
  },
  {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
  }, {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
  } ];


  // Compute female student results

  const femaleStudentsResults = students.filter(student => student.sex === "f").map(student => {
    return {
      avgGrade: student.grades.reduce((acc, number)=> acc + number, 0) / student.grades.length,
      name: student.name,
      maxGrade: student.grades.reduce((number, value) => Math.max(number, value), -99)
    };
  });

console.log(femaleStudentsResults);