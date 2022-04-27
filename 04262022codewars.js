//CODEWARS
//04/26/2022

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num){
    let sum = 0
    for(let i = 0; i <= num; i++){
        sum += i
    }
    return sum
}

//So here we declare sum as zero.
//We create a for loop as we don't know what num is before we begin the program will be making sure that the loop only runs num times.
//We use sum to compute the sum of the list of values of each loop, using += to add i into the sum each time.
//Once the loop is done running num times, we return the final sum outside of the loop.