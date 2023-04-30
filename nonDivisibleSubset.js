function nonDivisibleSubset(k, s) {
  s.sort((a, b) => a - b);
  let subset = new Set();
  for (let i = 0; i <= s.length - 2; i++) {
    for (let j = i + 1; j <= s.length - 1; j++) {
        let sum = s[i] + s[j]
      if (sum % k !== 0) {
        subset.add(s[i]);
        subset.add(s[j]);
      }
    }
  }
  console.log(subset);
}

let s = [1, 7, 2, 4];
let k = 3;

nonDivisibleSubset(k, s);
