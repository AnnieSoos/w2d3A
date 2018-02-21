
var grades=[9,10,1,5.9,6,6.9]

function toAmericanGrade(grades) {
  var toAmericanGrade=grades.map(grade=[] => {
    if (grade<=10 && grade>9)
    return "A"
    else if (grade<=8.9 && grade>8)
    return "B"
    else if (grade<=7.9 && grade>7)
    return "C"
    else
    return "D"
}
);

function printing(grades, toAmericanGrade){
  var res=[]
  for (var i=0; i<grades.length; i++){
  return res=console.log('This ${grades} is ${toAmericanGrade} in America')
  }
};
printing(grades, toAmericanGrade);


const average= grades.map(grade => {
  return grade/2
}


function toAmericanGrades(grades) {
  americanGrades = []
  return americanGrades = grades.map(function(grade) {
     if (grade >= 9 && grade <= 10) {
        return 'A'
      } else if (grade >= 8 && 8.9) {
        return 'B'
      } else if (grade >= 7 && 7.9) {
        return 'C'
      } else if (grade >= 6 && 6.9) {
        return 'D'
      } else if (grade >= 1 && 5.9) {
        return 'F'
      } else {
        return 'incorrect input'
      }
  })
}

// test
var grades1 = [9, 5.5, 6, 7.3]
console.log(`last is C -> ${'C' == toAmericanGrades(grades1)[3]}`)
// test
var grades1 = [9, 5.5, 6, 7.3]
console.log(`average: -> ${'D' == averageAmericanGrade(grades1)}`)

// tests*/
/*
console.log(`9 = A -> ${'A' == toAmericanGrade(9)}`)
console.log(`10 = A -> ${'A' == toAmericanGrade(10)}`)
console.log(`1 = F -> ${'F' == toAmericanGrade(1)}`)
console.log(`5.9 = F -> ${'F' == toAmericanGrade(5.9)}`)
console.log(`6 = D -> ${'D' == toAmericanGrade(6)}`)
console.log(`6.9 = D -> ${'D' == toAmericanGrade(6.9)}`)
*/
