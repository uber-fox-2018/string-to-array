function stringToArray(str){
    // split terlebih dahulu kedalam array
    let splitString = []
    let stringArr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ','){
            stringArr += str[i]
        }
        if(str[i] === ',' || i === str.length-1){
            splitString.push(stringArr)
            stringArr = ''
        }
    }

    // membuat nested array berdasarkan string yang sudah di split diatas
    let result = []
    for(let j = 0; j < splitString.length; j++){
        let tmp = []
        for(let k = 0; k < splitString[j].length; k++){
            tmp.push(splitString[j][k])
        }
        result.push(tmp)
    }

    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('harles,bayu,anggara'))