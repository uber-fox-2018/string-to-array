function stringToArray(words) {
  const arrWords = [];
  let getWords = '';
  for(let i = 0; i < words.length; i++) {
    getWords += words[i];
    if(i !== words.length-1) {
      if(words[i+1] === ',') {
        i++;
        arrWords.push(getWords);
        getWords = '';
      }
    } else {
      arrWords.push(getWords);
    }
  }

  const output = [];
  for(let i = 0; i < arrWords.length; i++) {
    const arrAlpha = [];
    for(let j = 0; j < arrWords[i].length; j++) {
      arrAlpha.push(arrWords[i][j]);
    }
    output.push(arrAlpha);
  }

  return output;

}

console.log(stringToArray('aqrst,ukaei,ffooo'));
