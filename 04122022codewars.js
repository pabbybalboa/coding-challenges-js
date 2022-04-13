//CODEWARS
//04-12-2022

//Create a function that does four basic mathematical operations.
//Function takes in three arguements, operation(string/char), value1, and value2 (numbers).
//The function should return the numbers after applying the chosen operation.
//('+', 4, 7) the string would have to go in the middle and the numbers go to the output.
//Turn the string into a math operator

function basicOp(operation, value1, value2){
    let output = eval(value1 + operation + value2)
    return output
}

//Here, eval() evaluates or executes an arguement. If it is an expression, evaluates expression. If one or more statements, executes the statements.
//If you use switch or cases this also works.