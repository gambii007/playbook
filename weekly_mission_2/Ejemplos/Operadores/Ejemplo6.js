// Ejemplo 6: Uso de map para convertir las 3 primeras letras a mayusculas 
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir las primeras 3 letras a mayúsculas en una lista")
console.log(countriesFirstThreeLetters)
