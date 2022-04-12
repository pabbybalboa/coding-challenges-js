//CODEWARS
//04-11-2022

//Given a string, you have to return a string in which each character is repeated once.
//The function will be called when a stirng goes into it.
//Create a new variable that turns it into a string.
//Use for loop to make repeat iterations.
//The for loop will double each iteration as it goes through array.
//Return doubleChar.

function doubleChar(str){
    let doubledChar = " "
    for(let i = 0; i < str.length; i++){
        doubledChar += str[i] + str[i]
    }
    return doubleChar
}