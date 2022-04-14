//CODEWARS
//04-13-2022

//Write a function bmi that calculates body mass index (bmi = weight/height^2) with following conditions:
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

//Declare variable doing the equation bmi = weight/height^2
//Create conditionals for different bmi classifications
//bmi > 30 is the else and no brackets needed

function bmi(weight, height){
    let bmi = weight / (height**2)
    if(bmi <= 18.5){
        return ("Underweight")
    }else if(bmi <= 25.0){
        return ("Normal")
    }else if(bmi <= 30.0){
        return ("Overweight")
    }else(bmi > 30)
        return("Obese")
}