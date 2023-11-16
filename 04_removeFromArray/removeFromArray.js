const removeFromArray = function(numsArray, ...args) {
    let returnArray = [];
    
    for(i = 0; i < args.length; i++) {
        let removeNum = args[i];
        
        // issue: printing out valid array elements each time instead of once
        for(j = 0; j < numsArray.length; j++) {
            let element = numsArray[j];

            if(element != removeNum) {
                returnArray.push(element);
            }
        }
    }
    
    return returnArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
