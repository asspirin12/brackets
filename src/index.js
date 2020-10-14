 module.exports = function check(str, bracketsConfig) { 


    let brackets = '';
        for (bracket of bracketsConfig) {
        brackets += bracket.join('');
    }

    //console.log(`brackets ${brackets}`);
    //console.log(`str ${str}`);
    
    let result = [];


    for (item of str) {
        //console.log(`НОВЫЙ ШАГ`);
        //console.log(`символ: ${item}`);


        let index = brackets.indexOf(item);

        if (index % 2 === 0) {
            //console.log(`index ${index}`);
            
            /* this checks if brackets are the same
            AND if the bracket which is about to pe pushed 
            is the same as the last one on the stack */ 
            if (brackets[index] === brackets[index + 1] &&
                (index + 1) === result[result.length - 1]) {
                let popped = result.pop();

                //console.log(`popped equal ${popped}`);

                //console.log(`else result ${result}`);
            } else {
                result.push(index + 1);
                //console.log(`result ${result}`);
            }

        } else {
            //console.log(`index ${index}`);
            
            let popped = result.pop();
            //console.log(`popped ${popped}`);

            //console.log(`else result ${result}`);

            if (popped !== index) {
                return false;
            }
        }
    }

    return result.length === 0;
}
