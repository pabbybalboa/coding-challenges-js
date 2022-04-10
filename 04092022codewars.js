//CODEWARS
//04-09-2022
//8kyu

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//Examples:
makeNegative(1)
makeNegative(-5)
makeNegative(0)
makeNegative(0.12)

//Solution
function makeNegative(num){
    return(-Math.abs(num))
}

//This works because the 'Math' is a built in object that has properties and methods for mathematical constants and functions.
//'abs' returns the absolute value of a number. If a number is 5 it's absolute value is 5. If a number is -5, it's absolute value is still 5.
//Since 'Math.abs()' will return the absolute value of a number whether it is positive or negative, the - sign at the begin ensures it is always negative.