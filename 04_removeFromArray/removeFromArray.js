const removeFromArray = function(a,b,d) {
        c = a.splice(b-1,1)
        if (d != undefined){
        e = a.splice(d-1,1)
        }
        
        return a
      };
// Do not edit below this line
module.exports = removeFromArray;
