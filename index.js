"use strict"

function stringToArray(str) {
    var result = [];
    let strChunks = stringSplit(str, ',');
    for(let i = 0; i < strChunks.length; i++) {
        let chars = charSplit(strChunks[i]);
        result.push(chars);
    }
    return result;
}

function charSplit(str) {
    var result = [];
    for(let i = 0; i < str.length; i++) result.push(str[i]);
    return result;
}

function stringSplit(str, delimeter) {
    var result = [];

    let chunk = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === delimeter) {
            result.push(chunk);
            chunk = '';
        }
        else
            chunk += str[i];
    }
    result.push(chunk);
    return result;
}

console.log(stringToArray('asdf,ghij,abcd'))