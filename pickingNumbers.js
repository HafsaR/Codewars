function pickingNumbers(a) {
    // Write your code here
a.sort((a,b) => a-b)
let i =0, j=i+1;
while(a[j] - a[i] <= 1){
  
    i++;
    j++;
}
let subarray1 =  a.slice(0, j)
console.log(subarray1)
}

pickingNumbers([1,1,2,2,4,4,5,5,5])