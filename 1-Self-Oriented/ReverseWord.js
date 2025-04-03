let str = "Hey I am learner in JavaScript";
let result  = str.replace("learner", "learner".split("").reverse().join(""));
console.log(result);