import generarFizzBuzzPara from "./sumador.js";

describe("FizzBuzz", () => {
  it("Deberia mostrar FizzBuzz porque es el numero 0", () => {
    expect(generarFizzBuzzPara(0)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar Fizz porque es el numero 3", () => {
    expect(generarFizzBuzzPara(3)).toEqual("Fizz");
  });
  it("Deberia mostrar Buzz porque es el numero 5", () => {
    expect(generarFizzBuzzPara(5)).toEqual("Buzz");
  });
  it("Deberia mostrar FizzBuzz porque es el numero 15", () => {
    expect(generarFizzBuzzPara(15)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar FizzBuzz porque es el numero 30", () => {
    expect(generarFizzBuzzPara(30)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar Fizz porque es el numero 9", () => {
    expect(generarFizzBuzzPara(9)).toEqual("Fizz");
  });
  it("Deberia mostrar Fizz porque es el numero 10", () => {
    expect(generarFizzBuzzPara(10)).toEqual("Buzz");
  });
});


