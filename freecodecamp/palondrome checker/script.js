function palindrome(str) {
  let cleanstr = str.toLowerCase().replace(/[^0-9a-z]/gim,"")
  let reversedstr = cleanstr.split("").reverse().join("")
  if(cleanstr === reversedstr){
    return true
  }
  else{
    return false;
  }
}

console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man,a plan, a canal. panama"));
