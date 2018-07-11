let stringToArray = function (str) {
    str = str.split(',')
    let result = []

    for(let i=0; i<str.length; i++){
        let temp = []
        for(let j=0; j<str[i].length; j++){
            temp.push(str[i][j])
        }
        result.push(temp)
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'))