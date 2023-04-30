function lengthOfLastWord(s) {
    let a= s.trim().split(' ').slice(-1).join('').length
    console.log(a);

};

lengthOfLastWord('Hello world!   ')