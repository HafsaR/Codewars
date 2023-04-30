function miniMaxSum(arr) {
    // Write your code here
    let len = arr.length
    arr.sort((a,b) => a - b)
    console.log(arr)
    
    let minSum = arr.slice(0, len -1).reduce((a,b) => a +b, 0)
    let maxSum = arr.slice(1).reduce((a,b) => a+b,0)


    console.log(`${minSum} ${maxSum}`)
}

let a = [1,4,5,3]
miniMaxSum(a)