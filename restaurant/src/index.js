import _ from "lodash";
import printMe from "./print.js";
import { default as pg1Txt } from "./page1Txt.js";
import { default as homeTxt } from "./homeTxt.js";

// import "./style.css";
// import Icon from "./icon.png";
// import Data from "./data.xml";
// import Notes from "./data.csv";
// import toml from "./data.toml";
// import yaml from "./data.yaml";
// import json from "./data.json5";

const createDiv = (selector) => {
   document.createElement("div");
};

const navBar = (() => {
   let contentDiv = document.createElement("div");
   contentDiv.id = "content";
   const body = document.querySelector("body");
   const content = document.querySelector("#content");
   body.append(contentDiv);

   const homeBtn = document.createElement("div");
   contentDiv.append(homeBtn);
   homeBtn.id = "homeBtn";
   homeBtn.style.width = "100px";
   //homeBtn.style.height = "300px";
   homeBtn.style.backgroundColor = "grey";
   homeBtn.innerText = "Home Page";

   const page1 = document.createElement("div");
   contentDiv.append(page1);
   page1.id = "page1";
   page1.style.width = "100px";
   //page1.style.height = "300px";
   page1.style.backgroundColor = "grey";
   page1.innerText = "Page 1";

   printMe();
   console.log("component fired.");
})();

const webContent = (() => {
   const content = document.querySelector("#content");

   const info = document.createElement("div");
   content.append(info);
   info.id = "info";
   info.style.width = "100%";
   info.style.height = "100%";
   //info.style.backgroundColor = "grey";
   info.innerText = "Info";

   console.log("webcontent running");

   return { info };
})();

// webContent.info.innerText = "changed";

const navClick = (() => {
   const content = document.querySelector("#content");
   content.addEventListener("mousedown", function (event) {
      switch (event.target.id) {
         case "homeBtn":
            webContent.info.innerText = pg1Txt;
            break;
         case "page1":
            webContent.info.innerText = homeTxt;
            break;
      }
   });
})();

// function component() {
//    const element = document.createElement("div");
//    const btn = document.createElement("button");

//    element.innerHTML = _.join(["Hello", "webpack"], " ");
//    btn.innerHTML = "Click me and check the console!";
//    btn.onclick = printMe;
//    element.appendChild(btn);

//    return element;
// }

// document.body.appendChild(component());

//new
