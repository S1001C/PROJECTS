const passwordbox = document.querySelector("#password");
const button = document.querySelector("#button");
const copyy = document.querySelector("#copy");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTQVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*(){}[]-=+><?/";
const allchar = uppercase + numbers + lowercase + symbol;

function createpasswordbox() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (password.length < length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordbox.value = password;
}

button.addEventListener("click", () => {
  createpasswordbox();
});
copyy.addEventListener("click", () => {
  copypass();
});
function copypass() {
  passwordbox.select();
  document.execCommand("copy");
}
