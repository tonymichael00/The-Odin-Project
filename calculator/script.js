//console.log("works");
let progStart = new Boolean(true);

let calcDisplay = document.getElementById("calcDisplay");

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
   let entry;
   if (
      (calcKey === "1" ||
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
         calcKey === ".") &&
      progStart
   ) {
      numCalc(calcKey);

      //console.log("entry");
      //console.log(entry);
      console.log("numbers");
   } else if (
      (calcKey === "%" ||
         calcKey === "1/X" ||
         calcKey === "X^2" ||
         calcKey === "X^1/2") &&
      progStart
   ) {
      quickCalc(calcKey);
      console.log("quickMath");
   } else if (
      (calcKey === "+" ||
         calcKey === "-" ||
         calcKey === "*" ||
         calcKey === "/") &&
      progStart
   ) {
      arithCalc(calcKey);
      console.log("arithmetic");
   } else if (calcKey === "=" && progStart) {
      equalCalc(calcKey);
      console.log("equal");
   } else if (calcKey === "C" && progStart) {
      clearCalc(calcKey);
      console.log("clear");
   } else if (calcKey === "PREVIOUS" && progStart) {
      previousCalc(calcKey);
      console.log("PREVIOUS");
   } else if (calcKey === "BACKSPACE" && progStart) {
      backCalc(calcKey);
      console.log("BACKSPACE");
   }
}

function arithCalc(calcKey) {
   console.log("arithCalc");
}

function equalCalc(calcKey) {
   console.log("equalCalc");
}
function clearCalc(calcKey) {
   console.log("clearCalc");
}
function previousCalc(calcKey) {
   console.log("previousCalc");
}
function backCalc(calcKey) {
   console.log("backCalc");
}

function quickCalc(calcKey) {
   console.log("quickCalc");
}

function numCalc(calcKey) {
   let entry;
   if (entry === undefined) {
      entry = calcKey;
      console.log("works");
   } else {
      entry += calcKey;
   }

   console.log("numCalc");
   console.log(calcKey);
}
