const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for(let i = 0; i < array.length; i++){
    console.log(array);
    for(let j = i; j > 0; j--){
      curr = array[j]
      if(curr > array[j-1]){
        break;
      }
      else{
        array[j] = array[j-1];
        array[j-1] = curr;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);