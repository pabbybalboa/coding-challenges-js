//CODEWARS
//04-27-2022

//Write a program that given time in hours, how many liters will someone drink when drinking 0.5 liters per hour; rounded to the smallest number.

function litres(time) {
    return Math.floor(time * 0.5);
}

//Math.floor here rounds to the smallest number.