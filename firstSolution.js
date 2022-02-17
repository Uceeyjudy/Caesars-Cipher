const ALPHABETS ={
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
  N: 'A',
  O: 'B',
  P: 'C',
  Q: 'D',
  R: 'E',
  S: 'F',
  T: 'G',
  U: 'H',
  V: 'I',
  W: 'J',
  X: 'K',
  Y: 'L',
  Z: 'M'
}

function rot13(str) {
  let decodedLetter='';
  // for each letter in the string
  for(let i =0; i<str.length; i++){
    // if the character is a letter
    if(/[A-Z]/.test(str[i])){
        // decode the letter and add the decoded letter
        decodedLetter += ALPHABETS[str[i]]
    }
    // else add character as it is
    else{
       decodedLetter += str[i]
    }
   
  }
  return decodedLetter;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));