import generarFizzBuzzPara from "./sumador.js";

describe("FizzBuzz", () => {
  it("Deberia mostrar FizzBuzz porque es el numero 0", () => {
    expect(generarFizzBuzzPara(0)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar Fizz porque es el numero 3", () => {
    expect(generarFizzBuzzPara(3)).toEqual("Fizz");
  });
});


