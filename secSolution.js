function rot13(str) {
    // Declare an empty string
    let decodedStr = "";
  
    // loop over string; for every item in the string
    for (let i =0; i<str.length; i++){
      const char = str[i];
      const charCode =str.charCodeAt(i);
      // if char is a letter, decode string
      if (/[A-M]/.test(char)){
          const decodedChar = charCode + 13;
          decodedStr += String.fromCharCode(decodedChar);
      }
      else if (/[N-Z]/.test(char)){
          const decodedChar = charCode - 13;
          decodedStr += String.fromCharCode(decodedChar);
      }
      // else add char as it is
      else{
        decodedStr += char;
      }
    }
        return decodedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));