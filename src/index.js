 module.exports = function check(str, bracketsConfig) { 


    let brackets = '';
        for (bracket of bracketsConfig) {
        brackets += bracket.join('');
    }
    
    // create stack
    let result = [];


    for (item of str) {

        let index = brackets.indexOf(item);


        /* if an item from a string is an opening bracket,
        i. e. even index in bracketsConfig,
        push it onto a stack */
        if (index % 2 === 0) {
            
            /* this checks if brackets are the same
            AND if the bracket which is about to pe pushed 
            is the same as the last one on the stack */ 
            if (brackets[index] === brackets[index + 1] &&
                (index + 1) === result[result.length - 1]) {
                let popped = result.pop();

            } else {
                result.push(index + 1);
            }
        /* if an item from a string is a closing bracket,
        i. e. odd index in bracketsConfig,
        pop it from the stack */ 
        } else {
            
            let popped = result.pop();

            /* if a popped item doesn't match 
            corresponding index in bracketsConfig,
            stop the program, the brackets don't match */
            if (popped !== index) {
                return false;
            }
        }
    }
    // if the stack is empty, all brackets are matched
    return result.length === 0;
}
