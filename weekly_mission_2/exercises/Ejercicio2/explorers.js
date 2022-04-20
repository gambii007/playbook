const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: true
     }
   }
 }
]
//1.-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombre de los Explorers");
explorers.forEach((name) => {
  console.log(`Name: ${name.name}`)
});

//2.-Imprime el stack de cada explorer, usa FOR EACH
console.log("\nStacks de los Explorers");
explorers.forEach((stack) => {
  console.log(`Stack: ${stack.stack}`);
});

//3.-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nLista de los Stacks con MAP");
var cStack = explorers.map(function(explorers){
  return explorers.stack;
})
console.log('Stacks: ' + cStack);

//4.-Obtén la lista de explorers que tengan en su stack "js",
//usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\nLista de los Explorers con 'JS' en sus Stacks usando MAP");
console.log(" Validacion");
var cJs = ''
explorers.forEach((stack, i) => {
  console.log('Explorer ' + i + ', ' + stack.stack.includes('js'));
  cJs = explorers.filter(explorer => explorer.stack >= 'js')
});
console.log(" Lista");
cJs.forEach((name) => {
  console.log(name.name);
});

//5.-Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\nPrimer elemento con CDMX usando FIND");
var found = explorers.find(explorer => explorer.city == 'CDMX')
console.log(`El primer Explorer de la ${found.city} es el ${found.name}`);

//6.-Obtén la suma de todos los exercises_completed, usa REDUCE
const result_of_reduce = explorers.reduce((acc, suma) => acc + suma.exercises_completed, 0)
console.log("\nUso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

//7.-Obtén la validación si al menos uno de los explorers tiene la propiedad
//exercisesFinished en frontend como true, usa SOME
const check = explorers.some(element => element.missions.frontend.exercisesFinished === true)
console.log("\nTodos los Explorer terminaron el Frontend: " + check);

//8.-Obtén la validación si todos los explorers tienen la propiedad isFinished
//del onboarding como true. Usa EVERY.
const check2 = explorers.every(element => element.missions.onboarding.isFinished === true)
console.log("\nTodos los Explorer terminaron el Onboarding: " + check2);
