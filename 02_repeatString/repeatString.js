const repeatString = function(string, num) {
    let returnString = "";
    
    if(num >= 0) {
        for(i = 0; i < num; i++) {
            returnString = returnString.concat(string);
        } 
    } else {
        returnString = returnString.concat("ERROR");
    }
    
    return returnString;   
};

// Do not edit below this line
module.exports = repeatString;
