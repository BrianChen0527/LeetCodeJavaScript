// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let n1 = 0;
  let n2 = 1

  index = 1;
  while(n !== index){
    let n3 = n1+n2;
    n1 = n2;
    n2 = n3
    index++;
  }
  return n2
}
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(6));

function fibonacciRecursive(n) {
  
  if(n < 2){
    return n;
  }
  return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2));
  
}

console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(6));