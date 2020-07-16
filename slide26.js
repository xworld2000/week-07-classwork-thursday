const students = [
  { name: 'Steve', gpa: 3.5, gradYear: 2020 },
  { name: 'Mary', gpa: 4.0, gradYear: 2021 },
  { name: 'Tasha', gpa: 3.8, gradYear: 2022 },
  { name: 'Edgar', gpa: 3.2, gradYear: 2020 },
]

function getNameOnly(student) {
  return student.name
}

const names = students.map(getNameOnly)

console.log(names)
