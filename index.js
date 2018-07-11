function stringToArray (str) {
    var splitStr = str.split(',');
    var arr = [];
    
    for(let i=0; i<splitStr.length; i++){
        arr.push([]);
        for(let j=0; j<splitStr[i].length; j++){
            arr[i].push(splitStr[i][j]);
        }
    }
    return arr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
