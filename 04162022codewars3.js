//CODEWARS
//04-16-2022

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and up with '1'. Return the resulting string.
//Here use .replace(). its a regex method that searches a string for the value you input and replaces it with another value.
//Have to use 0-4 first otherwise will turn the whole string into 0

function fakeBin(x){
    x = x.replace(/[0-4]/g, 0).replace(/[5-9]/g, 1)
    return x
}

