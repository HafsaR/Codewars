/*
Staircase detail

This is a staircase of size n:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function staircase(n) {
  let size = n;
  let space = 0
  let sign = 0
  for(let i=1; i<=size; i++){
    space = size - i
    sign = size - space
    console.log(`${' '.repeat(space)}${'#'.repeat(sign)}`)
  }
}

let n = 5;
staircase(n);
