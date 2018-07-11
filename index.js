function stringToArray(inputStr) {
    let resultArr = []
    let subArr = []
    inputStr += ','
    for(let i = 0; i < inputStr.length; i++) {
      if(inputStr[i] === ',') {
        resultArr.push(subArr)
        subArr = []
      } else {
        subArr.push(inputStr[i])
      }
    }
    return resultArr
  }
  
  console.log(stringToArray('aqrst,ukaei,ffooo'));