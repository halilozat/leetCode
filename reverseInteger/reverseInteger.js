/**
 * @param {number} x
 * @return {number}
 */
 var reverse = (x) => {
    x = parseFloat(x.toString()
        .split('')
        .reverse()
        .join('')) 
    * Math.sign(x)  
    if (x>=2147483647 || x<= -2147483648) {
       return 0
    }else{
       return x
    }
    };


