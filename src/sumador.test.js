import generarFizzBuzzPara from "./sumador.js";

describe("FizzBuzz", () => {
  it("Deberia mostrar FizzBuzz porque es el numero 0", () => {
    expect(generarFizzBuzzPara(0)).toEqual("FizzBuzz");
  });
});


