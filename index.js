function strToArr(str){
    var arr=[];
    var box=[];
    var word="";
    for(var letters of str){
        if(letters !== ","){
            word+=letters;
        }else{
            for(var letter of word){
                box.push(letter);
            }
            arr.push(box);
            box=[];
            word="";
        }
    }
    for(var letter of word){
          box.push(letter);
    }
    arr.push(box);
    return arr;
}
console.log(strToArr("aqrst,ukaei,ffooo"));
/* 
[ [ 'a', 'q', 'r', 's', 't' ],
  [ 'u', 'k', 'a', 'e', 'i' ],
  [ 'f', 'f', 'o', 'o', 'o' ] ]
 */
console.log(strToArr("qwer,tyui,asdf,ghjk"));
/* 
[ [ 'q', 'w', 'e', 'r' ],
  [ 't', 'y', 'u', 'i' ],
  [ 'a', 's', 'd', 'f' ],
  [ 'g', 'h', 'j', 'k' ] ]
 */