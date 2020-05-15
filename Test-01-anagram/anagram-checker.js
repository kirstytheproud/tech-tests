
function Check(s1, s2) {
  if( typeof s1 == "string") {   
      if(typeof s2 ==  'string'){
          var charArray1=[];
          for(i=0; i<s1.length; i++) {
              var c = s1[i]; charArray1.push(c);
          }

          var charArray2=[];
          for(i=0; i<s2.length; i++) {
              var c = s2[i]; charArray2.push(c);
          }

          charArray1.sort()
          charArray2.sort()

          if (
              (charArray1[0] == charArray2[0]) &&
                (charArray1[1] == charArray2[1]) &&
              (charArray1[2] == charArray2[2]) &&
              (charArray1[3] == charArray2[3]) 
          ) {
              return true;
          }
          else {
              return false;
          };
      }
  else {
      console.log("Invalid Input");
  }}
  else {
      console.log("Invalid Input");
  }
}

console.log(Check('bobo', 'obob'), 'true');
console.log(Check('bobo', 'boo4b'), 'false');
console.log(Check('dog', 'god'), 'true');


// This test case fails
console.log(Check('gabety', 'gabmen'), 'false');