const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () =>{
    test('Caso de prueba 1: Creacion de objeto', ()=>{
        //Se puede usar el codigo como se requiera
        const woopa = new Ajolonauta("Woopa")

        //Vaslidar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})