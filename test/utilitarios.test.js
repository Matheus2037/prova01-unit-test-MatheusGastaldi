const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });


    test("O metódo deve inverter a String passada pelo parametro", async () => {
        expect(utilitarios.inverterString("Teste")).toBe("etseT");
    });

    test("O metódo deve contar e retornar a quantidade de caracteres da String passada pelo parametro", async () => {
    expect(utilitarios.contarCaracteres("Teste")).toBe(5);
    });

    test("O metódo deve converter a String para maiusculo", async () => {
        expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
    });
    
    test("O metódo deve converter a String para minusculo", async () => {
        expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    });
        
    test("O metódo deve converter a primeira letra da String para maiuscula", async () => {
        expect(utilitarios.primeiraLetraMaiuscula("teste")).toBe("Teste");
    });
    
    test("O metódo soma recebe dois valores e retorna a soma deles", async () => {
        expect(utilitarios.somar(1, 2)).toBe(3);
    });

    test("O metódo subtrair recebe dois valores e retorna a subtração deles", async () => {
        expect(utilitarios.subtrair(5, 2)).toBe(3);
    });

    test("O metódo multiplicar recebe dois valores e retorna a multiplicação deles", async () => {
        expect(utilitarios.multiplicar(9, 9)).toBe(81);
    });

    test("O metódo dividir recebe dois valores e retorna a divisão deles", async () => {
        expect(utilitarios.dividir(49, 7)).toBe(7);
    });

    test("O metódo dividir recebe dois valores e retorna Error caso o divisor seja zero", () => {
        expect(() => { utilitarios.dividir(10, 0);}).toThrow("Divisão por zero");
    });

    test("O metódo ehPar verifica se o número informado no parametro é par", async () => {
        expect(utilitarios.ehPar(2)).toBe(true);
        expect(utilitarios.ehPar(3)).toBe(false);
    });

});


