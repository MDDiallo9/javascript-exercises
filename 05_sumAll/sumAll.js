const sumAll = function(min,max) {
let sum = 0
if (max > min && min > 0 && max > 0 && Number.isInteger(min) && Number.isInteger(max)){
for (let i = min; i < max + 1 ; i++) {
    sum += i
 }
 return sum
} else if (min > max && min > 0 && max > 0 && Number.isInteger(min) && Number.isInteger(max)){
    for (let i = max; i < min + 1 ; i++) {
        sum += i
     }
     return sum
} else {
    return "ERROR"
}
};

// Do not edit below this line
module.exports = sumAll;
