const students = [
  {
    name: "Luiz",
    age: 20,
    n: 7,
    n1: 1,
    n2: 8
  },
  {
    name: "Alexandra",
    age: 27,
    n: 10,
    n1: 7,
    n2: 8
  },
  {
    name: "Carlos",
    age: 42,
    n: 2,
    n1: 3,
    n2: 8
  },
  {
    name: "Douglas",
    age: 23,
    n: 9,
    n1: 9,
    n2: 8
  },
]


for (let i = 0; i < students.length; i++) {

  function averageStudent(a, b, c){
    let average = ((a + b + c)/3).toFixed(1)
    return average
  }

  let averageStudents = averageStudent(students[i].n, students[i].n1, students[i].n2)
  // let media = ((students[i].n + students[i].n1 + students[i].n2) / 3).toFixed(1)
 
   if(averageStudents >= 7) {
    alert(` A média do(a) aluno(a) ${students[i].name} é: ${averageStudents}\n Parabéns, ${students[i].name}! você foi aprovado(a) no concurso!`)
   } else {
    alert(` A média do(a) aluno(a) ${students[i].name} é: ${averageStudents}\n Não foi dessa vez, ${students[i].name}! Tente novamente!`)
   }

 
}