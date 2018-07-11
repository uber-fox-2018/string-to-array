function stringToArray(string) {

    var arrChild = []
    var arrMain = []
    var stringSplit = string.split(',')
    
    for(var i = 0; i < stringSplit.length;i++){
        for(var j = 0; j < stringSplit[i].length;j++){
            arrChild.push(stringSplit[i][j])
            
        }

        arrMain.push(arrChild)
        arrChild = []
    }

    return arrMain
}



console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
