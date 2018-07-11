function stringToArray(str) {
    let outerArr = [];
    let strSplit = str.split(',');
    // console.log(strSplit);

    for (let i = 0; i < strSplit.length; i++) {
        let wordArr = [];
        outerArr.push(wordArr);
        for (let j = 0; j < strSplit[i].length; j++) {
            wordArr.push(strSplit[i][j]);
        }
    }
    return outerArr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));