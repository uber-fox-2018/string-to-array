function stringToArray(input){
    let result = [];
    let splitInput = input.split(',')
    for(let i = 0; i<splitInput.length; i++){
        let row = splitInput[i].split('');
        result.push(row)
    }
    return result
}

console.log(stringToArray("qwer,tyui,asdf,ghjk"))
// output:
// [['q','w','e','r'],
//  ['t','y','u','i'],
//  ['a','s','d','f'],
//  ['g','h','j','k']]