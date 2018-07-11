function stringToArray(str) {
  let result = [];

  let container = [];
  let row = 0;
  let column = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      container.push(str[i]);
      if (row >= 0) {
        row +=1
      }
    } else {
      column += 1;
      row = 0;
    }
  }

  let counter = 0;
  for (let j = 0; j < column; j++) {
    let temp = [];
    for (let k = 0; k < row; k++) {
      temp.push(container[counter]);
      counter += 1;
    }
    result.push(temp);
  }

  return result;
  // console.log(column);
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
