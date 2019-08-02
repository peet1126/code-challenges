//August 1 2019 HackerRank challenge

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = solveMeFirst(a, b);
  console.log("pop");
}

// console.log(solveMeFirst(2, 3));

// August 1 2019 HackerRank compareTriplets

("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (a[i] < b[i]) {
      score[1] += 1;
    }
  }
  return score;
}

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

// August 1 2019 HackerRank A Very Big Sum

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}
console.log(
  aVeryBigSum([
    1000000000000000000000000000000001,
    1000000000000000000000000000000002,
    1000000000000000000000000000000003,
    1000000000000000000000000000000004,
    1000000000000000000000000000000005
  ])
);
