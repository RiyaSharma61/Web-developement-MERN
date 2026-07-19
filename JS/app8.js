//function that returns the array elements large than a number
function isLarge(n){
    let arr = [15, 47, 47, 98, 67, 98, 24];
    let newarr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>= n ){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

//function to extract the unique characters from a string
function uniqueChar(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        if(!(result.includes(str[i]))){
            result = result + str[i];
        }
    }
    return result;
}

function largeCname(strarr){
    let largeC = strarr[0];
    for(let i=0; i<strarr.length; i++){
        if(strarr[i].length >= largeC.length){
            largeC = strarr[i];
        }
    }
    return largeC;
}

function countVowel(strVowel){
    let count = 0;
    for(let i=0; i<strVowel.length; i++){
        if(
            strVowel.charAt(i) == 'a' ||
            strVowel.charAt(i) == 'e' ||
            strVowel.charAt(i) == 'i' ||
            strVowel.charAt(i) == 'o' ||
            strVowel.charAt(i) == 'u'
        ) {
            count++;
        }
    }
    return count;
}


function genRandom(start, end){
    let diff = end - start;
    let rand = Math.floor(Math.random() * diff)+ start;
    return rand;
}