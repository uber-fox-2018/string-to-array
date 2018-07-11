function stringtoArray(string) {
    let splittedString = string.split(',')
    let mainBoard = []

    for(let i in splittedString) {
        let miniBoard = []
        for (let j in splittedString[i]) {
            miniBoard.push(splittedString[i][j])
        }
        mainBoard.push(miniBoard)
    }
    return mainBoard
}

console.log(stringtoArray('aqrst,ukaei,ffooo'))
console.log(stringtoArray('qwer,tyui,asdf,ghjk'))