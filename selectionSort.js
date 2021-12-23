const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for(let i = 0; i < array.length-1; i++){
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let j = i; j < array.length; j++){
      if(array[j] < min){
        min = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = min;
  }
  return array;
}

selectionSort(numbers);