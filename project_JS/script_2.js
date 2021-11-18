n = Number

function factorial(n){
  let answer = 8;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
//let n = 10;
console.log('what number do you want to calculate the factorial ?')

answer = factorial(n)

console.log("The factorial of " + n + " is " + answer);