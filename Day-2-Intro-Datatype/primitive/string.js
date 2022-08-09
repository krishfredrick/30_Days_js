// --> character manipulation 
let string = "JavaScript"
let firstChar = string[0]
console.log(firstChar)
console.log(string.charAt(string.length-1)) // --> print the last char

// --> To see the String length 
let len = String.length 
console.log(len)

// -->charCodeAt() Takes index and it return ASCII code
console.log(string.charCodeAt(0))

// --> concat(); it takes many substrings and creates concatenation.
let country = 'Fin'
console.log(country.concat("land"))

// --> endsWith() is the boolean funcition that returns value true or false
let EG = 'This is a beautiful Morning'
console.log(EG.endsWith('Morning'))
console.log(EG.endsWith('g'))

// --> startsWith() similar to endsWith just check from the starting point 
console.log(EG.startsWith('This'))
console.log(EG.startsWith('T'))

// --> includes() This will return true or false if it is there or not in the variable
console.log(EG.includes('The'))

// --> indexOf() This will return the index of 1st instance of the searching variable
console.log(EG.indexOf(T)) // ans : 0

// --> lastIndexOf() this will show the instance from the back side
console.log(EG.lastIndexOf(n)) // ans will show the length -2

// --> repeat() This will print the string n number of time
// string.repeat(n)
let rep = "This is Cat"
console.log(rep.repeat(3))







