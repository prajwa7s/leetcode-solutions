function isValid(x){
    let result = [];
    let pair = {
        ')':'(',
        ']':'[',
        '}':'{'
    };
    for (let char of x){
        if(char === '(' || char === '[' || char === '{'){
            result.push(char);
        }else {
            if(result.pop() !== pair[char]){
                return false;
            }
        }
    }
    return result.length === 0;
}
console.log(isValid("()"))