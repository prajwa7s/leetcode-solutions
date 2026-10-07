var lengthOfLastWord = function(x){
    let words = x.trim().split(" ");
    return words[words.length - 1].length;

}
console.log(lengthOfLastWord("Hello World")); 
