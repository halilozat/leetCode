/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = (x) => {

    //negatifse false döndür
    if (x < 0) {
      return false;
    }
  
    //tek haneliyse true döndür.
    if (x < 10) {
      return true;
    }
  
    //10'un katı ve 0 değilse false döndür.
    if (x % 10 === 0 && x !== 0) {
      return false;
    }
  
    const str = String(x);
    let i = 0, j = str.length - 1;
  
    //i<j olduğu sürece str[i] eşit değilse str[j]'ye false döndür,
    //eşitse i'yi arttır, j'yi azalt. 
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
  };