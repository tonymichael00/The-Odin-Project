let enteredNo = "0",
   displayNo = "0";

let storeOp = [],
   storeCalc = [];

let isClear = new Boolean(true),
   opRepeat = new Boolean(true),
   opRan = new Boolean(true);

let calcDisplay = document.getElementById("calcDisplay");

// KEY EVENT
document.addEventListener("keydown", function onPress(event) {
   // MAKE SURE ONLY 12 DIGIT NUMBERS ARE ENTERED
   if (event.key >= 0 && event.key <= 9) {
      // if (!opRan) {
      //    enteredNo = "0";
      //    opRan = true;
      // }
      if (enteredNo.length == 12) {
         window.alert("You can only input 12 digits.");
      } else if (enteredNo == "0") {
         enteredNo = event.key;
         calcDisplay.textContent = enteredNo;
      } else {
         enteredNo += event.key;
         calcDisplay.textContent = enteredNo;
      }
      console.log("number");
   }
   console.log(event.key);

   // MATH OPERATIONS SWITCH
   switch (event.key) {
      case "-":
         computeNo("subtraction");
         console.log("subtract");
         break;
      case "=":
      case "Enter":
         computeNo("equal");
         console.log("equal");
         break;
      case "+":
         computeNo("addition");
         console.log("addition");
         break;
      case "*":
         computeNo("multiplication");
         console.log("multiplication");
         break;
      case "/":
         computeNo("division");
         console.log("division");
         break;
      case "Backspace":
         computeNo("backspace");
         console.log("backspace");
         break;
      case "%":
         computeNo("percent");
         console.log("percent");
         break;
      case ".":
         computeNo("decimal");
         console.log("decimal");
         break;
      case "Delete":
         computeNo("C");
         console.log("C");
         break;
   }
   //console.log(something);
});
function computeNo(mathOperation) {
   //FIRST TIME
   // if (mathOperation == "equal" && isClear) {
   //    return;
   // }

   //OPERATIONS SWITCH
   switch (mathOperation) {
      case "subtraction": {
         console.log("mathOp subtract");
         subtraction();
         console.log("enteredNo");
         console.log(enteredNo);
         break;
      }
      case "equal": {
         equalTrig = new Boolean(true);
         console.log("mathOp equal");
         console.table(storeOp);
         // if (!isClear) {
         //    storeOp[0]();
         //    console.log("previousNum");
         //    console.log(previousNum);
         //    console.log("enteredNo");
         //    console.log(enteredNo);
         // }
         break;
      }
   }
   console.log("computeNo Function");
}

function subtraction() {
   console.log("subtraction function");

   //first time push values into arrays
   // if (isClear) {
   //    previousNum.push(enteredNo);
   //    storeOp.push(subtraction);
   //    enteredNo = "0";
   //    isClear = false;
   //    return;
   // }

   //equal trigger shoves operation in and doesn't do math yet
   let answer =
      parseFloat(previousNum[previousNum.length - 1]) - parseFloat(enteredNo);
   previousNum.push(answer);
   calcDisplay.textContent = answer;
   enteredNo = "0";
   storeOp.push(subtraction);
   // opRan = false;
   console.table("storeOp");
   console.table(storeOp);
   console.table("previousNum");
   console.table(previousNum);
   console.log("answer");
   console.log(answer);
}
