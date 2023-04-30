function maximmValue(strs) {
  let maxValue = 0;
  for (let s of strs) {
    let possibleMaxValue;
    if (/^\d+$/.test(s)) {
    //   let digitArray = strs[i].split("").map((d) => Number(d));
      
      possibleMaxValue = Number(s);
    } else {
      possibleMaxValue = s.length;
    }
    if (possibleMaxValue > maxValue) {
      maxValue = possibleMaxValue;
    }
  }
  return maxValue;
}

console.log(maximmValue(["alic3","bob","3","4","00000"]));
console.log(maximmValue(["5232","yv","22","c","yawgs","928","4003","2"]));
