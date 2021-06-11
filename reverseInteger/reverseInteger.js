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
    }

// parseFloat = verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür. Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur.
// x.toString() = x'i string yap,
// split() = değerleri '' ile ayırarak diziye ekler,
// reverse() = diziyi ters çeverir,
// join =  arrayi birleştirip, string olarak geriye döndürür,
// Math.sign = sayının pozitif mi negatif mi olduğunu döndürür. (1,-1)


