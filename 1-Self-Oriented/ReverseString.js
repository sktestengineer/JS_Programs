//Reverse a string: with inbuilt method and without inbuilt
//Inbuilt Method
let str = "Hey I am learner in JavaScript";
let result = str.split("").reverse().join("");
console.log(result);

//Without Inbuilt Method
function revrseStr(str)
{
    let revesred = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        revesred += str[i];
    }
    return revesred;
}
let str1 = "Hey I am learner in JavaScript";
let result1 = revrseStr(str1);
console.log(result1);
