//CODEWARS
//04-28-2022

//You get an array of numbers, return the sum of all the positive ones.

function positiveSum(arr){
    let newArr = arr.filter(num => num > -1) //Make new array with only positives. Filter arr where nums(numbers) in the new array have to be greater than -1.
    let sum = 0 //Create a new variable to hold the sum.
    for(let i = 0; i < newArr.length; i++){ //Use for loop to run through each number in the array.
        sum += newArr[i] //Add the number to the sum, after each loop iteration.
    }
    return sum //return the sum of the positive numbers of the array
}