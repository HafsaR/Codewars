/*
Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1.
*/

function findFirstUnique(sentence){

for(let i in sentence){
    let currentValue = new RegExp(`${sentence[i]}`, 'g')
    // console.log(currentValue)
    const matchRegex = sentence.match(currentValue).length
    if(matchRegex === 1){
        return i
    }
}
return -1
}

// console.log(findFirstUnique('loveleetcode'))
console.log(findFirstUnique('aabb'))
// console.log(findFirstUnique('leetcode'))
