//QS-1
let random1 = Math.floor(Math.random() * 6)+1;
console.log(random1);

//QS-2
const car = {
    name: "BMW",
    color: "Brown rich",
    model: "2026"
};
console.log(car.name);


//QS-3
const person = {
    name: "riyasharma",
    age: 19,
    city: "Dehradun"
};
console.log(person.city);
console.log(`city after edit: ${person.city = "New York"}`);
console.log("after adding a new property named country..");
person.country = "United state";
console.log(person);