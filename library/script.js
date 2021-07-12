//TODO
//
let library = [];
const bookForm = document.querySelector(".bookForm");
const bookArea = document.querySelector("#bookCol");

bookForm.addEventListener("submit", (e) => {
   e.preventDefault();
   library.push(
      new Book(
         bookForm.title.value,
         bookForm.author.value,
         bookForm.pgRead.value,
         bookForm.pgTotal.value,
         bookForm.finishChk.checked
      )
   );

   library[library.length - 1].create();
   console.table(library);
});

class Book {
   constructor(title, author, pgRead, pgTotal, finished) {
      this.title = title;
      this.author = author;
      this.pgRead = pgRead;
      this.pgTotal = pgTotal;
      this.finished = finished;
   }

   create() {
      let div = document.createElement("div");
      let bookDivs = document.querySelector("div.books");
      console.log(bookDivs);
      // let p = document.createElement("p");

      // div.append(p, what);

      function createP(numP, select) {
         for (let i = 0; i < numP; i++) {
            let p = document.createElement("p");
            select.append(p);
         }
      }

      function changeP() {
         let selectP =
            bookDivs[bookDivs.length - 1].document.querySelector("p");

         selectP[0] = this.title;
         selectP[1] = this.author;
         selectP[2] = this.pgRead + " / " + this.pgTotal;
      }
      bookArea.append(div);
      div.className = "books";
      createP(4, div);
      changeP();

      // bookDivs[bookDivs.length - 1].document.querySelector("p");

      // div.insertAdjacentElement("beforeend", p);

      // div.textContent = this.title;
      // div.insertAdjacentElement("beforeend", p);
      // div.textContent = this.author;
      // div.insertAdjacentElement("beforeend", p);
      // div.textContent = this.pgRead + " / " + this.pgTotal;

      // p.textContent = `${this.title}
      // ${this.author}
      // ${this.pgRead}/${this.pgTotal}`;
      // p.append(br);
      // p.textContent += this.author;
      // p.append(br);
      // p.textContent = this.title;
      // p.append(br);
      // p.textContent = this.title;
      // p.append(br);
      // bookArea.getElementsByTagName("div").textContent = this.title;
      // bookArea.appendChild(br);
      // bookArea.getElementsByTagName("div").text = this.author;
      // bookArea.appendChild(br);
      // bookArea.getElementsByTagName("div").text =
      //    "${this.pgRead}/${this.pgTotal}";
      // bookArea.appendChild(br);

      // sketchTbl.getElementsByTagName("TR")[i].appendChild(td);
      // sketchTbl.getElementsByTagName("TR")[i].getElementsByTagName("TD")[j].style.backgroundColor = 'rgb(255, 255, 255)';
   }
}

function createBkItm() {
   let div = document.createElement("div");
   bookArea.appendChild(div);

   bookArea.getElementsByTagName("div").style.backgroundColor =
      "rgb(224, 224, 224)";
   // sketchTbl.getElementsByTagName("TR")[i].appendChild(td);
   // sketchTbl.getElementsByTagName("TR")[i].getElementsByTagName("TD")[j].style.backgroundColor = 'rgb(255, 255, 255)';
}

console.table(library);
