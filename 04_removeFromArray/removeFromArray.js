const removeFromArray = function(a,b,d) {
    if (b < a.length && b > -1){
        c = a.splice(b-1,1)
      } 
    if (d != undefined && d < a.length && d > -1){
        e = a.splice(d-1,1)
        }
    return a
      };
// Do not edit below this line
module.exports = removeFromArray;
