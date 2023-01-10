const removeFromArray = function(a,b,d,e,f) {
  let result = a.filter(a => a!== b && a !== d && a !== e && a !== f)
  return result
};
// Do not edit below this line
module.exports = removeFromArray;
