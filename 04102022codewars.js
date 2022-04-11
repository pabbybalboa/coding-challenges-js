//CODEWARS
//04-10-2022

//Convert a number to a reverse array of digits.
//Given a random non-negative number, return the digits in an array in reverse order.

function digitize(n){
    return n.toString().split('').reverse().map(Number)
}

//Single line solution. toString(), turns n into a string. .split then turns the string into an array of substrings. The .reverse then reverses the array. Finally, the .map call turns the array, into a new array of numbers.