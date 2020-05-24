/* https://www.hackerrank.com/challenges/grading/problem */

function gradingStudents(grades) {
  return grades.map(g => {
    if (g < 38) return g;
    let roundUp = Math.ceil(g / 5) * 5;
    return roundUp - g < 3 ? roundUp : g;
  });
}