//CODEWARS
//04-16-2022

//Write a function that takes in the speed of a cockroach in km per hour and returns it in cm per second, rounded down to the interger (floored)
//Conversion for KM/hr to cm/sec is km/hr * 27.77778.
//Math.floor() returns the largest interger less than or equal to a given number.

function cockroachSpeed(s){
    s = (s * 27.777778)
    return(Math.floor(s))
}

//floor in the return will round down to a solid interger. 