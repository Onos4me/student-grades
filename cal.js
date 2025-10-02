function calculateGrade() {
  const studentName = document.getElementById("studentName").value;
  const test1 = Number(document.getElementById("test1").value);
  const test2 = Number(document.getElementById("test2").value);
  const finalExam = Number(document.getElementById("finalExam").value);

  const testAverage = (test1 + test2) / 2;
  const finalGrade = testAverage * 0.4 + finalExam * 0.8;

  const passed = finalGrade >= 50;

  const excellent = passed && finalExam > 80;

  console.log("Student Name:", studentName);
  console.log("Your Final Grade:", finalGrade);
  console.log("You Passed:", passed);
  console.log("You Performed Excellently:", excellent);
}
