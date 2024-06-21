function reception(input) {
  input = input.map(Number);
  const studentCount = input.pop();
  const studenstHandleForHour = input[0] + input[1] + input[2];
  let answeredStudents = 0;
  let allhours = 0;
  let all3housr = 0;

  while (answeredStudents < studentCount) {
    if (all3housr === 3) {
      all3housr = 0;

      allhours++;
    } else {
      allhours++;
      answeredStudents += studenstHandleForHour;
      all3housr++;
    }
  }

  console.log(`Time needed: ${allhours}h.`);
}
// reception(['5','6','4','20']);
reception(["1", "2", "3", "45"]);
reception(["3", "2", "5", "40"]);
