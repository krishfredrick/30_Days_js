// --->Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let information ={
    firstName:'Rohit',
    LastName:'Sharma',
    Country :'India',
    city: 'Mumbai',
    isMarried : true,

}
console.log(`This is the type of the input firstName ${typeof(information.firstName)}`)

/*      What is the year today?
        What is the month today as a number?
        What is the date today?
        What is the day today as a number?
        What is the hours now?
        What is the minutes now?
        Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let now = new Date()
let year = now.getFullYear();
console.log(year);
let date =now.getDate();
console.log(date);
let  day =now.getDay();
console.log(day);

// Area of the circle

let area_circle= (radius, PI = Math.PI) =>{
    return 2*radius*PI
}
let a_circle = area_circle(5);
console.log(`This is the area of the a_Cricle ->${a_circle}`)
let Time = new Date();
console.log(`${Time.getFullYear}-${Time.getMonth}-${Time.getDate} ${Time.getHours}:${Time.getMinutes}`)
