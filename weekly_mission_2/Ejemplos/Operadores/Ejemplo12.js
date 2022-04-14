// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 75 },
  { name: 'M', score: 91 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find((user) => user.score > 91)
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)
