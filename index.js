function stringToArray(str){
    let arr = str.split(',')
    let result = []
    for (let i = 0; i < arr.length; i++){
        let char = []
        for (let j = 0; j < arr[i].length; j++){
            char.push(arr[i][j])
        }
        result.push(char)
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))