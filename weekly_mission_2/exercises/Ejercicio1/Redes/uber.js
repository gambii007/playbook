const user = {
  img: 'Foto1',
  name:'Fernando',
  lastName: 'Gamboa',
  money: 350,
  travel: {
    origen: 'las americas2',
    destino: 'centro',
    time: 15,
    costo: 50,
    conductor: {
      img: 'P2',
      name: 'nameConductor',
      placas: 'FCASD25',
      carroColor: 'azul',
      carroModelo: 'Nissan',
      calificacion: 5,
    }
  }
}

console.log(`User
  Foto: ${user.img}
  Name User: ${user.name}
  Credits User: ${user.money}
  `);

console.log(`Travel
  Origin: ${user.travel.origen}
  Destino: ${user.travel.destino}
  Time: ${user.travel.time} minutos
  Costo: $${user.travel.costo} pesos
  `);

console.log(`Conductor
  Foto: ${user.travel.conductor.img}
  Name Driver: ${user.travel.conductor.name}
  Placas: ${user.travel.conductor.placas}
  Color: ${user.travel.conductor.carroColor}
  Modelo: ${user.travel.conductor.carroModelo}
  `);
