//TODO:
//

//console.log("works");
let progStart = new Boolean(true);
let decCheck = new Boolean(true);
let quickCalcOrder = new Boolean(true);

let entry = [""];
let solutions = [];
let operations = [];

let calcDisplay = document.getElementById("calcDisplay");
calcDisplay.textContent = "working";
// KEY EVENT
document.addEventListener("keydown", function onPress(e) {
   switch (e.key) {
      case "-":
         mathCalc("-");
         break;
      case "=":
      case "Enter":
         mathCalc("=");
         break;
      case "+":
         mathCalc("+");
         break;
      case "*":
         mathCalc("*");
         break;
      case "/":
         mathCalc("/");
         break;
      case "Backspace":
         mathCalc("BACKSPACE");
         break;
      case "p":
      case "P":
         mathCalc("%");
         break;
      case "o":
      case "O":
         mathCalc("X^1/2");
         break;
      case "i":
      case "I":
         mathCalc("X^2");
         break;
      case "u":
      case "U":
         mathCalc("1/X");
         break;
      case ".":
         mathCalc(".");
         break;
      case "Delete":
         mathCalc("C");
         break;
      case "1":
         mathCalc("1");
         break;
      case "2":
         mathCalc("2");
         break;
      case "3":
         mathCalc("3");
         break;
      case "4":
         mathCalc("4");
         break;
      case "5":
         mathCalc("5");
         break;
      case "6":
         mathCalc("6");
         break;
      case "7":
         mathCalc("7");
         break;
      case "8":
         mathCalc("8");
         break;
      case "9":
         mathCalc("9");
         break;
      case "0":
         mathCalc("0");
         break;
      case "ArrowLeft":
         mathCalc("PREVIOUS");
         break;
      case "ArrowUp":
      case "ArrowDown":
         mathCalc("+/-");
         break;
   }
});

document.addEventListener("click", function onPress(e) {
   console.log(e);

   switch (e.target.id) {
      case "1/X":
         mathCalc("1/X");
         break;
      case "%":
         mathCalc("%");
         break;
      case "PREVIOUS":
         mathCalc("PREVIOUS");
         break;
      case "C":
         mathCalc("C");
         break;
      case "BACKSPACE":
         mathCalc("BACKSPACE");
         break;
      case "X^2":
         mathCalc("X^2");
         break;
      case "X^1/2":
         mathCalc("X^1/2");
         break;
      case "/":
         mathCalc("/");
         break;
      case "7":
         mathCalc("7");
         break;
      case "8":
         mathCalc("8");
         break;
      case "9":
         mathCalc("9");
         break;
      case "*":
         mathCalc("*");
         break;
      case "4":
         mathCalc("4");
         break;
      case "5":
         mathCalc("5");
         break;
      case "6":
         mathCalc("6");
         break;
      case "-":
         mathCalc("-");
         break;
      case "1":
         mathCalc("1");
         break;
      case "2":
         mathCalc("2");
         break;
      case "3":
         mathCalc("3");
         break;
      case "+":
         mathCalc("+");
         break;
      case "+/-":
         mathCalc("+/-");
         break;
      case "0":
         mathCalc("0");
         break;
      case ".":
         mathCalc(".");
         break;
      case "=":
         mathCalc("=");
         break;
   }
});

function mathCalc(calcKey) {
   console.log(calcKey);
   if (
      calcKey === "1" ||
      calcKey === "2" ||
      calcKey === "3" ||
      calcKey === "4" ||
      calcKey === "5" ||
      calcKey === "6" ||
      calcKey === "7" ||
      calcKey === "8" ||
      calcKey === "9" ||
      calcKey === "0" ||
      calcKey === "+/-" ||
      calcKey === "."
   ) {
      numCalc(calcKey);
   } else if (
      (calcKey === "%" ||
         calcKey === "1/X" ||
         calcKey === "X^2" ||
         calcKey === "X^1/2") &&
      !(entry[entry.length - 1] === "")
   ) {
      quickCalc(calcKey);
      console.log("quickMath");
   } else if (
      calcKey === "+" ||
      calcKey === "-" ||
      calcKey === "*" ||
      calcKey === "/"
   ) {
      arithCalc(calcKey);
      console.log("arithmetic");
   } else if (calcKey === "=") {
      equalCalc(calcKey);
      console.log("equal");
   } else if (calcKey === "C") {
      clearCalc(calcKey);
      console.log("clear");
   } else if (calcKey === "PREVIOUS") {
      previousCalc(calcKey);
      console.log("PREVIOUS");
   } else if (calcKey === "BACKSPACE") {
      backCalc(calcKey);
      console.log("BACKSPACE");
   }
}

//sorts into 4 arithmetic functions. First time sends entry to solutions array and saves operation in array to be handled later.
function arithCalc(calcKey) {
   if (entry[entry.length - 1] == "" && progStart === false) {
      return;
   }
   if (parseFloat(entry[entry.length - 1]).toString() == "NaN") {
      window.alert("Write a number.");
      return;
   }
   quickCalcOrder = true;

   //check for decimal on the end
   // if (entry[entry.length - 1][entry[entry.length - 1].length] == ".") {
   //    entry[entry.length - 1][entry[entry.length - 1].length] =
   //       entry[entry.length - 1][entry[entry.length - 1].length].pop();
   //    console.log("i cant believe this worked");
   // }

   decCheck = true;
   switch (calcKey) {
      case "+":
         if (progStart) {
            operations.push(addition);
            entry[entry.length - 1] = parseFloat(entry[entry.length - 1]);
            solutions.push(entry[entry.length - 1].toString());
            entry[entry.length - 1] = entry[entry.length - 1].toString();
            entry.push("");
            updateDisplay(solutions[solutions.length - 1]);
            progStart = false;
         } else {
            operations.push(addition);
            updateDisplay(operations[operations.length - 2]());
            solutions.push(operations[operations.length - 2]().toString());
            entry.push("");
         }
         console.log("solutions.length: " + solutions[solutions.length - 1]);
         console.log("operations");
         console.table(operations);
         console.log("solutions");
         console.table(solutions);
         break;
      case "-":
         if (progStart) {
            operations.push(subtraction);
            entry[entry.length - 1] = parseFloat(entry[entry.length - 1]);
            solutions.push(entry[entry.length - 1].toString());
            entry[entry.length - 1] = entry[entry.length - 1].toString();
            entry.push("");
            updateDisplay(solutions[solutions.length - 1]);
            progStart = false;
         } else {
            operations.push(subtraction);
            updateDisplay(operations[operations.length - 2]());
            solutions.push(operations[operations.length - 2]().toString());
            entry.push("");
         }
         console.log("solutions.length: " + solutions[solutions.length - 1]);
         console.log("operations");
         console.table(operations);
         console.log("solutions");
         console.table(solutions);
         break;
      case "/":
         //divide by 0 check
         if (progStart) {
            if (parseFloat(entry[entry.length - 1]) === 0) {
               window.alert("Not even a Jedi can divide by zero.");
               break;
            }

            operations.push(division);
            entry[entry.length - 1] = parseFloat(entry[entry.length - 1]);
            entry[entry.length - 1] = entry[entry.length - 1].toString();
            solutions.push(entry[entry.length - 1].toString());
            entry.push("");
            updateDisplay(solutions[solutions.length - 1]);
            progStart = false;
         } else {
            if (parseFloat(solutions[solutions.length - 1]) === 0) {
               window.alert("Not even a Jedi can divide by zero.");
               break;
            }

            operations.push(division);
            updateDisplay(operations[operations.length - 2]());
            solutions.push(operations[operations.length - 2]());
            entry.push("");
         }
         console.log("solutions.length: " + solutions[solutions.length - 1]);
         console.log("operations");
         console.table(operations);
         console.log("solutions");
         console.table(solutions);
         break;
      case "*":
         if (progStart) {
            operations.push(multiplication);
            entry[entry.length - 1] = parseFloat(entry[entry.length - 1]);
            entry[entry.length - 1] = entry[entry.length - 1].toString();
            solutions.push(entry[entry.length - 1].toString());
            entry.push("");
            updateDisplay(solutions[solutions.length - 1]);
            progStart = false;
         } else {
            operations.push(multiplication);
            updateDisplay(operations[operations.length - 2]());
            solutions.push(operations[operations.length - 2]().toString());
            entry.push("");
         }
         console.log("solutions.length: " + solutions[solutions.length - 1]);
         console.log("operations");
         console.table(operations);
         console.log("solutions");
         console.table(solutions);
         break;
   }
}

function equalCalc(calcKey) {
   if (parseFloat(entry[entry.length - 1]).toString() == "NaN") {
      window.alert("Write a number.");
      return;
   }
   if (operations[operations.length - 1] == undefined) {
      return;
   }

   quickCalcOrder = true;

   updateDisplay(operations[operations.length - 1]());

   clearCalc("equal");

   console.log("equalCalc");
}

function clearCalc(calcKey) {
   quickCalcOrder = true;
   progStart = new Boolean(true);
   decCheck = new Boolean(true);

   entry = [""];
   solutions = [];
   operations = [];

   if (!(calcKey == "equal")) {
      updateDisplay(entry);
   }
   console.log("clearCalc");
}

function previousCalc(calcKey) {
   quickCalcOrder = true;

   if (entry.length > solutions.length && entry.length > operations.length) {
      entry.pop();
      solutions.pop();
      operations.pop();
   }
   if (entry.length == solutions.length && entry.length == operations.length) {
      solutions.pop();
      operations.pop();
   }

   if (entry == undefined) {
      entry[entry.length - 1] = "";
   }
   updateDisplay(entry[entry.length - 1]);

   console.log("entry");
   console.table(entry);
   console.log("solutions");
   console.table(solutions);
   console.log("operations");
   console.table(operations);
   console.log("previousCalc");
}

function backCalc(calcKey) {
   quickCalcOrder = true;

   entry[entry.length - 1] = entry[entry.length - 1].substring(
      0,
      entry[entry.length - 1].length - 1
   );

   updateDisplay(entry[entry.length - 1]);
   console.log("backCalc");
   console.log("entry");
   console.table(entry);
}

function quickCalc(calcKey) {
   if (parseFloat(entry[entry.length - 1]).toString() == "NaN") {
      window.alert("Write a number.");
      return;
   }

   //stops input of numbers after quickMath
   quickCalcOrder = false;

   //check for decimal on the end
   // if (entry[entry.length - 1][entry[entry.length - 1].length] == ".") {
   //    entry[entry.length - 1][entry[entry.length - 1].length].pop();
   //    console.log("i cant believe this worked");
   // }

   switch (calcKey) {
      case "%":
         entry[entry.length - 1] = parseFloat(entry[entry.length - 1]) * 100;
         entry[entry.length - 1] = entry[entry.length - 1].toString();
         updateDisplay(entry[entry.length - 1]);
         break;
      case "1/X":
         entry[entry.length - 1] = 1 / parseFloat(entry[entry.length - 1]);
         entry[entry.length - 1] = entry[entry.length - 1].toString();
         updateDisplay(entry[entry.length - 1]);
         break;
      case "X^2":
         entry[entry.length - 1] =
            entry[entry.length - 1] * entry[entry.length - 1];
         entry[entry.length - 1] = entry[entry.length - 1].toString();
         updateDisplay(entry[entry.length - 1]);
         break;
      case "X^1/2":
         entry[entry.length - 1] = Math.sqrt(entry[entry.length - 1]);
         entry[entry.length - 1] = entry[entry.length - 1].toString();
         updateDisplay(entry[entry.length - 1]);
         break;
   }
   console.log("quickCalc");
   console.table(entry);
}

function numCalc(calcKey) {
   //stops input of numbers after quickMath
   if (!quickCalcOrder) {
      return;
   }
   if (entry[entry.length - 1] == undefined) {
      entry[entry.length - 1] = "";
   }

   switch (calcKey) {
      case ".":
         //check to make sure there is one decimal
         for (let i = 0; i < entry[entry.length - 1].length; i++) {
            if (entry[entry.length - 1][i] === ".") {
               decCheck = false;
            }
         }
         if (decCheck) {
            entry[entry.length - 1] += calcKey;
         }
         updateDisplay(entry[entry.length - 1]);
         break;
      case "+/-":
         if (entry[entry.length - 1] === "") {
            entry[entry.length - 1] = "-";
            updateDisplay(entry[entry.length - 1]);
            break;
         } else if (entry[entry.length - 1] === "-") {
            entry[entry.length - 1] = "";
            updateDisplay(entry[entry.length - 1]);
            break;
         }
         entry[entry.length - 1] = parseFloat(entry[entry.length - 1]) * -1;
         entry[entry.length - 1] = entry[entry.length - 1].toString();
         updateDisplay(entry[entry.length - 1]);

         break;
      default:
         let i = 0;
         let entryCheck = new Boolean(true);
         if (entry[entry.length - 1][0] === "-" && calcKey === "0") {
            window.alert("0 can't be negative.");
            break;
         }
         //12 digit check
         for (let char of entry[entry.length - 1]) {
            if (char <= 9 && char >= 0) {
               i++;
            }
         }
         if (i >= 12) {
            window.alert(
               "I'm sorry Dave. I can't let you type more than 12 digits."
            );
            entryCheck = false;
         }

         if (!entryCheck) {
            break;
         }
         if (entry[entry.length - 1][0] === "0") {
            entry[entry.length - 1] = "";
         }
         entry[entry.length - 1] += calcKey;
         updateDisplay(entry[entry.length - 1]);
         break;
   }

   console.log("numCalc");
   console.log("entry");
   console.table(entry);
}

function subtraction() {
   return (
      parseFloat(solutions[solutions.length - 1]) -
      parseFloat(entry[entry.length - 1])
   ).toString();
}

function addition() {
   return (
      parseFloat(solutions[solutions.length - 1]) +
      parseFloat(entry[entry.length - 1])
   ).toString();
}

function multiplication() {
   return (
      parseFloat(solutions[solutions.length - 1]) *
      parseFloat(entry[entry.length - 1])
   ).toString();
}

function division() {
   return (
      parseFloat(solutions[solutions.length - 1]) /
      parseFloat(entry[entry.length - 1])
   ).toString();
}

function updateDisplay(text) {
   if (text == "" || text == undefined) {
      text = "0";
   }
   text = text.toString();

   if (text.length >= 12) {
      text = Math.round(parseFloat(text) * 1000) / 1000;
      text = Number.parseFloat(text).toExponential(8);
   }
   console.log("text.length " + text.length);
   console.log("text " + text);
   calcDisplay.textContent = text;
}
