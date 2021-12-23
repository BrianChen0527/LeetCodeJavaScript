const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length/2)
  let left = array.slice(0,mid);
  let right = array.slice(mid, array.length);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let arr = [];
  let index1 = 0; //left
  let index2 = 0; //rght
  console.log(left);
  console.log(right);

  while(index1 < left.length && index2 < right.length){
    if(right[index2] === null || left[index1] < right[index2]){
      console.log("left");
      arr.push(left[index1]);
      index1++;
    }
    else{
      console.log("right");   
      arr.push(right[index2]);
      index2++; 
    }
  }
  return arr.concat(left.slice(index1)).concat(right.slice(index2));;
}


const answer = mergeSort(numbers);
console.log(answer);