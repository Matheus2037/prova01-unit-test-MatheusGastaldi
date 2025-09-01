const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });


    test("O metódo deve inverter a String passada pelo parametro", async () => {
        expect(utilitarios.inverterString("Teste")).toBe("etseT");
      });

});

