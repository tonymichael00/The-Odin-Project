//TODO
//
//NOTES
//trying out factories. Can switch createO or createX

document.getElementById("playArea").addEventListener("mousedown", function (e) {
   const newX = createXO(e);
   newX.createX();
});

const createXO = (e) => {
   const createX = () => {
      // let X = document.createTextNode("X");
      // let selectDiv = document.querySelector(divClass);
      // selectDiv = X;
      e.target.innerText = "X";
      e.target.style.fontSize = "60px";
   };
   const createO = () => {
      // let X = document.createTextNode("X");
      // let selectDiv = document.querySelector(divClass);
      // selectDiv = X;
      e.target.innerText = "O";
      e.target.style.fontSize = "60px";
   };
   return { createX, createO };
};
