const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  if (inputbox.value === "") {
    alert("DO WRITE SOMETHING");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    inputbox.value = "";
    li.appendChild(span);
    savedata();
  }
});
listcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showdata() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();
