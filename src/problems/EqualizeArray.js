
function equalizeArraySample() {
  const n = 5;
  const arr = [3, 3, 2, 1, 3];
  equalizeArray(n, arr);
}

function equalizeArray(n, array) {
  let currentIndex = 0;
  let majorOccurence = 0;
  const arr = [...array];
  while(arr.length > 0) {
    const arrItem = arr[currentIndex];
    let startIndex = 0;
    let occurance = 0;
    while(startIndex !== -1) {
      startIndex = arr.indexOf(arrItem, startIndex);
      if(startIndex > -1) {
        occurance++;
        arr.splice(startIndex, 1);
      }
    }
    if(majorOccurence < occurance) {
      majorOccurence = occurance;
    }
  }
  console.log("Need to delete items : ", n-majorOccurence);
  return  n-majorOccurence;
}

equalizeArraySample();