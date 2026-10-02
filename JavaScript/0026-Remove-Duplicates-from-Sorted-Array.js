function removeDuplicates(num){
    let x = 1;
    for(let i = 1; i<num.length; i++){
        if(num[i] !== num[i - 1]){
            num[x] = num[i];
            x++;
        }
    }
    return x;
}
let num = [1,1,2];
let x = removeDuplicates(num);
console.log(x);
console.log(num.slice(0, x));