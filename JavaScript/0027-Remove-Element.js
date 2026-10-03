function removeElements(nums,val){
    let x = 0;
    for(let key of nums){
        if(key !== val){
            nums[x] = key;
            x++;
        }
    }
    return x;
}
console.log(removeElements([0,1,2,2,3,0,4,2],2))



