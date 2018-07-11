
function createArr(str) {

    var result = []
    let name = str.split(',')
    for (let i = 0; i < name.length; i++) {
        var innerArr = []
        result.push(innerArr)

        for (let j = 0; j < name[i].length; j++) {

            innerArr.push(name[i][j])
        }

    }


    return result
}
console.log(createArr('aqrst,ukaei,ffoo'));
console.log(createArr('qwer,tyui,asdf,ghjk'));


