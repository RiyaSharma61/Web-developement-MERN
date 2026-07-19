let arr = [1, 2, ,3, 4, 5];

arr.forEach(function riyaName(el){
    console.log(el);
});

//arrow function
arr.forEach((el) => {console.log(el + 10)});

//array of objects
let arr2 = [{
    name: "Riya",
    marks: 90
}, {
    name: "aman",
    marks: 80
}, {
    name: "shashi",
    marks: 86
}];


//map method
let num1 = [1, 2, 3, 4, 5];
let newNum1 = num1.map(
    function(element){
        return element*4;
    }
);
//map method for array of objects

//filter array
let even = num1.filter(
    (num) => {
        return num % 2 === 0;
    }
)


//assignment questions
//qs-1
let array1 = [1, 2, 3, 4, 5, 6];
//arrow function
let result1 = array1.reduce((res, curr) => {return (res = (curr**2) + res)}, 0);
let avg1 = result1/array1.length;
console.log(avg1);
//qs-2
let newArr1 = array1.map((el)=> {
    return el + 5;
});
console.log(newArr1);
//qs-3
let arr3 = ['a', 'b','c' , 'd' ];
let newArr2 = arr3.map((el)=> {
    return el.toUpperCase();
});
console.log(newArr2);
//yeah I am right this approach is correct

//qs-3
function doubleAndReturnArgs(arr, ...args){
    let newArr = args.map((el)=> el*2);
    let latest = [...arr, ...newArr];

    console.log(latest);
}
let arraaa = [1, 2, 3, 4, 5, 6]; 
doubleAndReturnArgs(arraaa, 50,20,10,30,15);

//QS-5
function mergeObj ( obj1, obj2){
    let merge = {...obj1, ...obj2};
    console.log(merge);
}
obj1 = {a: 1 , b: 2};
obj2 = {c:3, d:4};
mergeObj(obj1, obj2);