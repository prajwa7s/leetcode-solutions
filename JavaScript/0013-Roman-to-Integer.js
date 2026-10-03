/**
 * LeetCode #13 - Roman to Integer
 * Difficulty: Easy
 */
function romanToInt(x){
    const values = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    let result = 0;
    for(let i=0; i<x.length; i++){
        if(values[x[i]]<values[x[i+1]]){
            result -= values[x[i]];
        }else{
            result += values[x[i]];
        }
    }
    return result;
}
console.log(romanToInt("LVIII"))