//Q.1: 
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str="abcadeecfb", str1="";
let len=str.length;

let newSet=new Set()
for(let i of str)
{
    newSet.add(i)
}
for(let j of newSet)
{
    str1=str1 + j
}
console.log(str1);


//Q.2:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

const str2 = "abcadeecfb";
const mapone = new Map();
let count = 0;
for(let i = 0; i < str2.length; i++){
   for(let j = 0; j < str2.length; j++){
        let a = str2[i];
        if(a === str2[j]){
            count++;
        }
   }
   if(count){
    mapone.set(str2[i],count);
    count = 0;
   }
}
console.log(mapone);