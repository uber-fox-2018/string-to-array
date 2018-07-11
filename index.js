/*
buat fungsi yang menerima sebuah sting, kemudian mengubahnya menjadi dalam bentuk nested array. lihat contoh di bawah ini

input: 'aqrst,ukaei,ffooo'
output:
[ [ 'a', 'q', 'r', 's', 't' ], 
  [ 'u', 'k', 'a', 'e', 'i' ],
  [ 'f', 'f', 'o', 'o', 'o' ]]
*/

function stringToArray (str){
    var arr = str.split(',')
    var result = []
    for(var i = 0 ; i < arr.length ; i++){
        var newArr = []
        for(var j = 0 ; j < arr[i].length ; j++){
            newArr.push(arr[i][j])
        }
        result.push(newArr)
    }
    return result
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
/*
[ [ 'a', 'q', 'r', 's', 't' ], 
  [ 'u', 'k', 'a', 'e', 'i' ],
  [ 'f', 'f', 'o', 'o', 'o' ]]
*/
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
/*
[ [ 'q', 'w', 'e', 'r' ],
  [ 't', 'y', 'u', 'i' ],
  [ 'a', 's', 'd', 'f' ],
  [ 'g', 'h', 'j', 'k' ] ]
*/
