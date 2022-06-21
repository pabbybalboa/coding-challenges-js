//CodeWars
//06/20/2022
//write a function that returns a boolean if your remaining fuel and mpg will get you to through the distance of the next fill up point

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ((mpg*fuelLeft) >= distanceToPump){
      return true
    }else{return false}
  }

  //here we use the variables given to the function to is an if statement. if mpg times fuelleft is greater than or equal to distance to pump it returns true. if not returns false.