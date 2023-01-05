const repeatString = function(string,num) {
    tries = 0
    if (num < 0){
        return('ERROR')
     }
    phrase = ""
    while (tries < num) {
        tries++
    phrase = phrase + string
     
    }
    return (phrase)
};

// Do not edit below this line
module.exports = repeatString;
