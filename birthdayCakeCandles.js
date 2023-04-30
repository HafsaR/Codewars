function birthdayCakeCandles(candles) {
n = candles.length
let maxValue = candles.reduce((a,b) => Math.max(a,b))
let occurrences = candles.filter((v) => v === maxValue).length
console.log(maxValue);
console.log(occurrences);
}

let candles = [3,1,2,3]
birthdayCakeCandles(candles)