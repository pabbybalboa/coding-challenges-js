//CODEWARS 
//04-29-2022

//Create a function that reverses a string passed into it.

function solution(str){
    return str.split("").reverse().join()
}

//This method turns the string into an array of substrings by using split. The reverse method, reverses the said substring array. The join method then rejoins the array of substrings and out puts the string reversed.