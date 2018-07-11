function stringToArr(str) {
    let arrStr = str.split(',')
    let res = []

    for (let i = 0; i < arrStr.length; i++) {
        let temp = []
        for (let j =0; j < arrStr[i].length; j++) {
            temp.push(arrStr[i][j])
        }
        res.push(temp)
    }
    return res
}

console.log(stringToArr('aqrst,ukaei,ffooo'))
console.log(stringToArr('qwer,tyui,asdf,ghjk'))