//CODEWARS
//04-20-2022
//Complete the method that takes a boolean value and returns "Yes" string for true and no string for false.

function boolToWord( bool ){
    if(bool == true){
        return "Yes"
    }else
    return "No"
}

//Here since we are not assigning bool and it is a comparison, use ==.