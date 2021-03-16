let entry = "0",
  displayNum = "0";

let previousOp = [],
  previousNum = [];

let isClear = new Boolean(true),
  opRepeat = new Boolean(true),
  opRan = new Boolean(true);

let calcDisplay = document.getElementById("calcDisplay");

function computeNo(mathOperation) {
  //FIRST TIME
  if (mathOperation == "equal" && isClear) {
    return;
  }

  //OPERATIONS SWITCH

  switch (mathOperation) {
    case "subtraction": {
      console.log("mathOp subtract");

      subtraction();

      console.log("entry");
      console.log(entry);
      break;
    }

    case "equal": {
      console.log("mathOp equal");

      console.table(previousOp);

      if (!isClear) {
        // computeNo(previousOp.name);

        previousOp[0]();
        console.log("previousNum");
        console.log(previousNum);
        console.log("entry");
        console.log(entry);
      }

      break;
    }
  }

  console.log("computeNo Function");
}

function subtraction() {
  console.log("subtraction function");

  //first time push values into arrays

  if (isClear) {
    previousNum.push(entry);
    previousOp.push(subtraction);
    entry = 0;
    isClear = false;

    return;
  }

  //

  let answer =
    parseFloat(previousNum[previousNum.length - 1]) - parseFloat(entry);

  previousNum.push(answer);

  calcDisplay.textContent = answer;

  //entry = "0";

  if (isClear) {
    previousOp.push(subtraction);

    isClear = false;
  } else {
    previousOp.splice(0, 1, subtraction);
  }

  opRan = false;

  console.table("previousOp");
  console.table(previousOp);
  console.table("previousNum");
  console.table(previousNum);
  console.log("answer");
  console.log(answer);
}

//calcDisplay.textContent = entry;

// KEY EVENT

document.addEventListener("keydown", function onPress(event) {
  // MAKE SURE ONLY 12 DIGIT NUMBERS ARE ENTERED

  if (event.key >= 0 && event.key <= 9) {
    if (!opRan) {
      entry = "0";
      opRan = true;
    }
    if (entry.length == 12) {
      window.alert("You can only input 12 digits.");
    } else if (entry == "0") {
      entry = event.key;
      calcDisplay.textContent = entry;
    } else {
      entry += event.key;
      calcDisplay.textContent = entry;
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
