const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");
shownotes();
createbtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatestorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updatestorage();
      };
    });
  }
});

function updatestorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

function shownotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}
