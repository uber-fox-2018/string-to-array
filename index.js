const strToArr = (str) => {
  let mainBoard = [];
  let strArr = str.split(',')
  for (let i in strArr){
    let row = [];
    for (let j in strArr[i]){
      row.push(strArr[i][j]);
    }
    mainBoard.push(row);
  }
  return mainBoard;
}

console.log(strToArr('aqrst,ukaei,ffooo'))