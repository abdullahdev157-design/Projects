function convertToRoman(num) {
 let romanTable = [
 ["M",1000],
["CM",900],
["D",500],
["CD",400],
["C",100],
["XC",90],
["L",50],
["XL",40],
["X",10],
["IX",9],
["V",5],
["IV",4],
["I",1]
 ]
 let result = ""
 for(let i = 0;i < romanTable.length;i++){
  let sym = romanTable[i][0];
  let value = romanTable[i][1];

  while(num >= value){
    result = result + sym
    num = num - value;
  }
 }
 return result
}

console.log(convertToRoman(3));