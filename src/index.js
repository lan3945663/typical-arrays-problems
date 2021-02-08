exports.min = function min (array) {
  if(array && array.length > 0) {
    let temp = array[0];

    array.forEach((el, i) => {
      if(el < temp) {
        temp = array[i];
      }
    })

    return temp;
  }
  
  return 0;
}

exports.max = function max (array) {
  if(array && array.length > 0) {
    let temp = array[0];

    for(let i = 0; i < array.length; i++) {
      if(array[i] > temp) {
        temp = array[i];
      }
    }

    return temp;
  }
  
  return 0;
}

exports.avg = function avg (array) {
  if(array && array.length > 0) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    // II variant

    // const res = array.reduce((sum, current) => {
    //   return sum + current;
    // }, 0);

    const avg = sum/array.length;

    return avg
  }

  return 0;
}