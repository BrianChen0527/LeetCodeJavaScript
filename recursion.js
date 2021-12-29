function findFactorialRecursive(number) {
  if(number === 1){
    return 1;
  }
    let answer = number*findFactorialRecursive(number-1)
  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;
  for(let i = 1; i <= number; i++){
    answer = answer*i;
  }
  return answer;
}




findFactorialIterative(5)