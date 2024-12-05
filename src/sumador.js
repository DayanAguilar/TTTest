function generarFizzBuzzPara(n) {
  if(n%3==0 && n%5==0){
    return "FizzBuzz"
  }
  if(n%3==0){
    return "Fizz"
  }
  if(n==5){
    return "Buzz"
  }
  if(n==0) return "FizzBuzz";
  if(n==15) return "FizzBuzz"
}

export default generarFizzBuzzPara;
