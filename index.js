function toArray (str) {
    var result= []
    var grup= []

    for (var letter of str) {

        if (letter === ',') {
            result.push(grup)
            var grup = []

        } else {
            grup.push(letter)            
        }      
    }
    result.push(grup)
    return result
}

console.log (toArray('aqrst,ukaei,ffooo'))
console.log (toArray('qwer,tyui,asdf,ghjk'))