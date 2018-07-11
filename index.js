function StringArray(str){
    
    let split = str.split(',') //split data string, menjadi array
    // console.log(split)
    let result = [];

    for(let i = 0; i<split.length; i++){
        result.push([]) // membuat board sesuai baris
        
        for(let j = 0; j<split[i].length; j++){
            result[i].push(split[i][j]); 
            // console.log('result i ->',result[i])
            // console.log('split i j ->', split[i][j])
        }
    }
    return result

}
console.log(StringArray('aqrst,ukaei,ffooo'))
console.log(StringArray('qwer,tyui,asdf,ghjk'))
