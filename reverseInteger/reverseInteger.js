/**
 * @param {number} x
 * @return {number}
 */
 var reverse = (x) => {
    return parseFloat(   // parseFloat = verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür. Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur.
        x.toString()     // x.toString() = x'i string yap,
        .split('')       // split() = değerleri '' ile ayırarak diziye ekler,
        .reverse()       // reverse() = diziyi ters çeverir,
        .join('')        // join =  arrayi birleştirip, string olarak geriye döndürür,
    ) * Math.sign(x)  }; // Math.sign = sayının pozitif mi negatif mi olduğunu döndürür. (1,-1)

