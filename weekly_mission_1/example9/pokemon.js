class Pokemon{ //Contruir un Contructor
  constructor (name){
    this.name = name
  }

  sayHello(){
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }

  sayMessage(msg){
    console.log(`Mi pokemon ${this.name} dice: ${msg}`)
 }
}

module.exports = Pokemon //Clase que se Exporta
