function StringArray (param){
var sementara = []
var cek = ''
for (var i=0 ; i < param.length ; i++){  
    if (param[i] !== ',') {
      cek += param[i]
    }
    if (param[i] == ',' || i == param.length-1){
      sementara.push(cek) 
      cek = '' 
    }
}

var hasil = []
for (var i=0 ; i < sementara.length ;  i++){
  var tampung = []
  for (var j=0 ; j < sementara[i].length ; j++){
    tampung.push(sementara[i][j])
    
  }
hasil.push(tampung)
}
return hasil
}

console.log(StringArray('visnck,vo12ck,v321ck'))