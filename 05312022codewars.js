//CodeWars
//05-31-2022

//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive an array of integers as input and return, respectively, the largest and lowest number in that list.

let min = function(list){
    return Math.min.apply(null, list);
}

let max = function(list){ 
    return Math.max.apply(null, list);
}

//the built in methods Math.min/max are used to return the min/max of the set of numbers. 
//apply method used to apply it to the array