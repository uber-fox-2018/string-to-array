function stringToArray(string) {
    let output = []
    let newArr = []

    for (let i = 0; i <= string.length; i++) {
        if (i === string.length) {
           output.push(newArr) 
        }else if (string[i] !== ',') {
            newArr.push(string[i])
        }else {
            output.push(newArr)
            newArr = []
        }
        
        
    }
    return output
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
