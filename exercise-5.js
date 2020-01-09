// 1. Create a new array `shoppingList` with a few string elements
shoppingList = ['eggs','milk','carrot']



//2a. Using for loop to log every element in the shopping list

for(let i = 0; i<shoppingList.length;i+=1){
    console.log(shoppingList[i])
}



// 2b. Using `forEach`, log every element of the `shoppingList` array to the console

shoppingList.forEach(function(element){
    console.log(element)
})



// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)


// 4. Create a new array `numbers` with a few numeric elements
let numbers = [1,2,3,4,5]

//5a Use for loop.
let squareNumbers = []
for(let i = 0;i<numbers.length;i+=1){
    
    squareNumber = numbers[i]**2
    squareNumbers.push(squareNumber)

}

console.log(squareNumbers)



// 5b. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array

let squareNumbers2 = numbers.map(function(number){
    return number**2
})

console.log(squareNumbers2)
