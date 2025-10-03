function calculateGrade() {
  const studentName = document.getElementById("studentName").value;
  const test1 = Number(document.getElementById("test1").value);
  const test2 = Number(document.getElementById("test2").value);
  const finalExam = Number(document.getElementById("finalExam").value);

  const testAverage = (test1 + test2) / 2;
  const finalGrade = testAverage + finalExam * 0.6;

  const passed = finalGrade >= 60;

  const excellent = passed && finalExam > 80;

  console.log("Student Name:", studentName);
  console.log("Your Final Grade:", finalGrade);
  console.log("You Passed:", passed);
  console.log("You Performed Excellently:", excellent);
}
// const age = 30;
// if (age > 30) {
//   console.log("Eat piza")
// } 
// else if( age >=20 && age <= 30){console.log("Eat rice")}
// else if(){console.log("Eat piza")}
// else if(){console.log("Eat piza")}
// else if(){console.log("Eat piza")}
// else {
//   console.log("order something else")
// }
