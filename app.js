// This variable holds a string 
var myName = "Sir";

//This constant holds a number 
const states = 50;

//This variable is the sum of 5 and 4
var result = 5+4;

//This function sends an alert of Hello World
function sayHello(){
    alert("Hello World!");
    }

//This function checks ages for people viewing a webpage
function checkAge(age, name){
    if(age < 21){
        return("Sorry " + name + ", you are not old enough to view this page.")
    }
    }
console.log(checkAge(21, "Charles"));
console.log(checkAge(27, "Abby"));
console.log(checkAge(18, "James"));
console.log(checkAge(17, "John"));

//This loop displays the elements of an array
var veg = ["carrots", "peas", "squash"]
for(i=0;i<veg.length;i++){
    console.log(veg[i])
}

// This log prints an object to the console
var pet = 
{
    name:"Kelly",breed:"Pit Bull"
}
console.log(pet);

// This is an array of objects
var people = 
[
    {name:"Mark",age:19},
    {name:"Alex",age:22},
    {name:"Jessica",age:28},
    {name:"Chris",age:24},
    {name:"Celena",age:18}
]

//
var friends = ["Chris", "Fred", "Velma", "Squidward", "Joshua"];
for (i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ":")
    for (j = 99; j >= 1; j--) {
        if (j > 1)
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
        else
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.")
    }
}