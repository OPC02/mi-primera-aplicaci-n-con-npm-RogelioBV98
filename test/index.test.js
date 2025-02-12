const assert = require('assert');
const sumar = require('../src/index');

// Grupos o set de pruebas
describe("Comprobar la suma de dos número", ()=>{
    // Positivo: Afirmar que 5 + 5 = 10
    it("Cinco más cinco es igual diez", ()=>{
        assert.equal(10, sumar(5,5));
    });
    // Negativo Afirmar que 5 + 5 != 55
    it("Cinco más cinco no es igual a cincuenta y cinco", ()=>{
        assert.notEqual(55, sumar(5,5));
    });
});
