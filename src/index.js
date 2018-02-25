module.exports = function getZerosCount(number, base) {
    
    var obj = {};
    var arr = [];
    var zeros; 
    var i = 2;

    while (i < base){

        if (base % i == 0) {
        
            if(obj.hasOwnProperty(i) == true){
                obj[i] += 1;          
            } else {
                obj[i] = 1;
            }
            
        base = base / i;
        } else {
            i++;
        }
    }

    if(obj.hasOwnProperty(i) == true){
        obj[i] += 1;         
    } else {
        obj[i] = 1;
    }

    for (var key in obj){
        i=1;
        zeros = 0; 
        while(Math.pow(key, i)<number){
            zeros += Math.floor(number/Math.pow(key, i));
            i++;       
        }
    arr.push (Math.floor(zeros/obj[key]));
    }

    return Math.min.apply(null, arr);
}
