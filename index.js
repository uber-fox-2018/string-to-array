const stringToArr = (input) => {
  const inputSplit = input.split(',')
  let mainBoard = []

  for (var i = 0; i < inputSplit.length; i++) {
    var isiBoard = []
    for (var j = 0; j < inputSplit[i].length; j++) {
      isiBoard.push(inputSplit[i][j])
    }
    mainBoard.push(isiBoard)
  }

  console.log(mainBoard);
  
}
stringToArr('aqrst,ukaei,ffooo')