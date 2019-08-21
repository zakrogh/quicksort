var myArray = [4, 4, 3 ,6, 1, 9, 0, 8, 7, 5];

var swap = function(a, left, right){
  var temp = a[left];
  a[left] = a[right];
  a[right] = temp;
  console.log(myArray);
}

var partition = function(a, left, right){
  var pivot = a[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;
  while(i <= j){
    while(a[i] < pivot){
      i++;
    }
    while(a[j] > pivot){
      j--;
    }
    if(i <= j){
      swap(a, i, j);
      i++;
      j--;
    }
  }
  return i;
}

var quicksort = function(a, left, right){
  var i;
  if(a.length > 1){
    i = partition(a, left, right)
    if (left < i - 1){
      quicksort(a, left, i - 1);
    }
    if(i < right){
      quicksort(a, i, right);
    }
  }
  return a;
}

var sortedArray = quicksort(myArray, 0, myArray.length - 1);

console.log(sortedArray);
