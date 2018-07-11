function stringToArray(str){
	var result=[]
	var temp=[]
	for (var i = 0 ; i < str.length ; i++){
		if (str[i] !== ','){
			temp.push(str[i])
		}
		if (str[i] === ',' || str[i+1] === undefined){
			result.push(temp)
			temp=[]
		}
	}
	return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjkl'))
console.log(stringToArray('uber,fox,2018'))