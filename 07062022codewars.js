//CodeWars
// 07-06-2022


//create an array that takes in a number a and puts each iteration in array up to b

function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }

//for loop i is equal to a, while i is less than or equal to b return pushing i to the array, then start new iteration