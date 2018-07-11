function strToArray(str) {
    var strInArr = str.split(',');
    var hasil = [];
    for(let i = 0; i < strInArr.length; i++) {
        hasil.push(strInArr[i].split(''))
    }
    return hasil;
}

console.log(strToArray('qwer,tyui,asdf,ghjk'));