let arr1 = ["January", "july", "march", "august"];
console.log(arr1);

//making it into final
arr1.splice(0, 2, "july", "june" );
console.log("final: ", arr1);

//solving qs2
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
let ans = lang.reverse().indexOf("javascript");

console.log("index of javscript: ", ans);
console.log("og array:: after mathods: ", lang );


//now just practicing the //array references
let arr2  = ['a', 'b', 'c'];
let arr2copy = arr2;
 console.log("ARR-1: ", arr2);
 console.log("ARR-1-COPY: ", arr2copy);

 //now using references for array, now both arrays equals to each other so 
 //they are pointing to the same of the memory location,
 //so changing in one array reflects in other array variable
arr2copy.push('d');
//now printing both arrays
console.log("Arr-2-COPY: ", arr2copy);
console.log("ARR-2 ", arr2);

//now comparing them
console.log(arr2 == arr2copy);
console.log(arr2 === arr2copy);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//now I am going to do Practice qs for NESTED ARARY
let arr3 = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
console.log(arr3);
