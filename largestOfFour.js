// Question: Return Largest Numbers in Arrays
function largestOfFour(arr) {
    // initailize an empty array
   const result =[];
    // for each array, loop through the array
    for( let subArr of arr){
      // declare the biggest variable
       let biggest =subArr[0];
  
      // loop through each subArr
      for (let number of subArr){
      // if subArr number is bigger than the biggest number, set biggest to number
        if(number> biggest){
          biggest = number;
        }
      }
  // In each arr Check if the numbers in the array which is bigger push biggest to result
      biggest += result.push(biggest)
    }
    
    // return the result largest numbers in each array
    return result;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  function truncateString(str, num) {
    // if str.length is bigger than num
   
    if(str.length>num){
    // cut of string afer num characters and add ... to result
      return str.slice(0, num) +"...";
    }
   else{
     return str;
   }
  }
  
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));