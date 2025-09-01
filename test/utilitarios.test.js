const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });


    test("Teste se o retorno do metódo é a minha String inverida", async () => {
        expect(utilitarios.inverterString("Teste")).toBe("etseT");
    });

    test("Teste se o metódo está retornando a quantidade de caracteres da String ", async () => {
    expect(utilitarios.contarCaracteres("Teste")).toBe(5);
    });

    test("Teste se o metódo está retornando a String em maiusculo", async () => {
        expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
    });
    
    test("Teste se o metódo converte e retorna a String para minusculo", async () => {
        expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    });
        
    test("Teste se o metódo muda e retorna o primeiro caracter da String para maiusculo", async () => {
        expect(utilitarios.primeiraLetraMaiuscula("teste")).toBe("Teste");
    });
    
    test("Teste se o metódo está retornando a soma dos parametros passados", async () => {
        expect(utilitarios.somar(1, 2)).toBe(3);
    });

    test("Teste se o metódo está retornando a subtração dos parametros passados", async () => {
        expect(utilitarios.subtrair(5, 2)).toBe(3);
    });

    test("Teste se o metódo está retornando a multiplicação dos parametros passados", async () => {
        expect(utilitarios.multiplicar(9, 9)).toBe(81);
    });

    test("Teste se o metódo está retornando a divisão dos parametros passados", async () => {
        expect(utilitarios.dividir(49, 7)).toBe(7);
    });

    test("Teste se o metódo retorna o erro de divisão por zero", () => {
        expect(() => { utilitarios.dividir(10, 0);}).toThrow("Divisão por zero");
    });

    test("Teste se o metódo está validando e retornando caso o parametro seja par ou não", async () => {
        expect(utilitarios.ehPar(2)).toBe(true);
        expect(utilitarios.ehPar(3)).toBe(false);
    });

    test("Teste se o metódo está retornando o primeiro elemento do array", () => {
        expect(utilitarios.primeiroElemento([1, 2, 3, 4, 5])).toEqual(1);
    });

    test("Teste se o metódo está retornando  o ultimo elemento do array", () => {
        expect(utilitarios.ultimoElemento([1, 2, 3, 4, 5])).toEqual(5);
    });

    test("Teste se o metódo está retornando o tamanho do array passado no parametro", () => {
        expect(utilitarios.tamanhoArray([1, 2, 3, 4, 5])).toEqual(5);
    });

    test("Teste se o metódo está retornando o array ordenado que foi passado no parametro", () => {
        expect(utilitarios.ordenarArray([7, 1, 4, 8, 3, 9])).toEqual([1, 3, 4, 7, 8, 9]);
    });

    test("Teste se o metódo está retornando o array passado no parametro invertido", () => {
        expect(utilitarios.inverterArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    test('Teste se o metódo está gerando um número menor que o maximo e maior que o minimo', () => {
        const max = 100;
        const resultado = utilitarios.gerarNumeroAleatorio(max);
    
        expect(resultado).toBeGreaterThanOrEqual(0);
        expect(resultado).toBeLessThan(100);
    });

    test("Teste se o metódo está validando corretamente se o parametro passado é número", () => {
        expect(utilitarios.ehNumero(2)).toBe(true);
        expect(utilitarios.ehNumero("teste")).toBe(false);
    });

    test("Teste se o metódo está removendo espaços da String", () => {
        expect(utilitarios.removerEspacos("   Testando a remoção de espaços   ")).toBe("Testando a remoção de espaços");
    });

    test("Teste se o metódo está retornando uma string reptida com base no parametro passado", () => {
        expect(utilitarios.repetirTexto("Teste", 4)).toBe("TesteTesteTesteTeste");
    });

    test("Testando se o metódo retorna uma String dos elementos do array separados por virgula", () => {
        expect(utilitarios.juntarArray([1, 2, 3, 4, 5, 6])).toEqual("1,2,3,4,5,6");
    });

    test("Teste se o metódo retorna a quantidade de palavras passadas no parametro", () => {
        expect(utilitarios.contarPalavras("Essa frase tem 5 palavras")).toBe(5);
    });

    test("Teste se o metódo está retornando a média dos elementos do array", () => {
        expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toEqual(3);
    });

    test("Testando se o metódo remove os elementos duplicados do array", () => {
        expect(utilitarios.removerDuplicados([1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Teste se o metódo retorna true para palavras Palindromo", () => {
        expect(utilitarios.ehPalindromo("subinoonibus")).toBe(true);
        expect(utilitarios.ehPalindromo("teste")).toBe(false);
    });
});