const Superhero = require("../app/Superhero")

describe("Unit Test for SuperHero", ()=> {
    test('Caso 1: Get a superhero', ()=> {

        const ironman = new Superhero("Iron Man","Tony Stark","Robert Downey Jr.")

        expect(ironman.name).toBe("Iron Man")
        expect(ironman.heroName).toBe("Tony Stark")
        expect(ironman.actor).toBe("Robert Downey Jr.")
    });
});