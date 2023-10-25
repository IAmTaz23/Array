// //1. Console log the length of the array, console log the 3rd value of the array, console log the 5th vaulue of the array
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log("Question 1:")
console.log(myAlphabet.length)
console.log(myAlphabet[2])
console.log(myAlphabet[4])


// //2. Declare and initialize an array called Planets with 8 string values
console.log("Question 2:")
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
console.log(planets)
// // 3. For each item in this array console.log the item
// let furniture = ['Table', 'Chairs','Couch'];
console.log("Question 3:")
let furniture = ["Table", "Chairs", "Couch"]

furniture.forEach(pieceOfFurniture => {
    console.log(pieceOfFurniture)
})

for(let i = 0; i < furniture.length; i++){
    console.log(furniture[i])
}

// //4. Loop over the array and if the value is "Math" console log "yuck"
let student1Courses = ['Math', 'English', 'Programming'];

console.log("Question 4:")

student1Courses.forEach(course => {
    if(course === "Math"){
        console.log("Yuck!")
    }
})

// //5.  Create an array of 4 fruits, then add 2 fruits (kiwi, grapes) to the end of the array using the method learned. Display the result in the console.
 console.log("Question 5:")
 let fruits = ["apple", "orange", "pear", "banana"]
fruits.push("kiwi", "Grapes")
console.log(fruits)
// // (Array becomes apple, orange, pear, banana, kiwi, grapes)


// //6. Remove the last value (grapes) from the array in #5. Display the result in the console.
// // (Array becomes apple, orange, pear, banana, kiwi)
console.log("Question 6:")
fruits.pop()
console.log(fruits)

// //7. Remove the first fruit (apple) from the array in #5. Display the result in the console.
// // (Array becomes orange, pear, banana, kiwi)
console.log("Question 7:")
fruits.splice(0,1)
console.log(fruits)

// //8.  Add a fruit (dragonfruit) to the beginning of the array in #5. Display the result in the console.
// // (Array becomes dragonfruit, orange, pear, banana, kiwi)
console.log("Question 8:")

fruits.unshift("dragonfruit")
console.log(fruits)
// //9.   Change the fruit 'orange' to be the fruit 'persimmon', and display the result in the console.
// // (Array becomes dragonfruit, persimmon, pear, banana, kiwi)
console.log("Question 9:")

fruits[1] = "persimmon"
console.log(fruits)

// //10.  In our console, display the length of our fruit array from #9.  The output should read "My array has____items."
console.log("Question 10:")

const arrayLength = fruits.length
console.log(`My array has ${arrayLength} items.`)
// // Bonus:  Add a fruit (pomegranate) in the second location of your array. Display the result in the console. (Display should now read dragonfruit, pomegranate, persimmon, pear, banana, kiwi.)
console.log("Bonus")