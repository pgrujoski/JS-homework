//zadaca 5
function checkGrade(points) {
    const grade = points >= 90
      ? 'A'
      : points >= 80
        ? 'B'
        : points >= 70
          ? 'C'
          : points >= 60
            ? 'D'
            : 'F';
  
    return grade;
  }
  
  const examplePoints = 98;
  console.log(checkGrade(examplePoints))