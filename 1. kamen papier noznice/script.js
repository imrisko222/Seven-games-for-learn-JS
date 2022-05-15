let computer = document.getElementById("computer");
let me = document.getElementById("me");
let result = document.getElementById("result");
let buttons = document.querySelectorAll(".button");

const choices = ["kamen", "papier", "noznice"];

function computerChoice() {
  let index = Math.floor(Math.random() * 3);
  computer.innerHTML = choices[index];
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    me.innerHTML = button.value;
    computerChoice();
    if (me.innerHTML === computer.innerHTML) {
      result.innerHTML = "remiza";
    } else if (me.innerHTML === "kamen" && computer.innerHTML === "noznice") {
      result.innerHTML = "vyhra";
    } else if (me.innerHTML === "kamen" && computer.innerHTML === "papier") {
      result.innerHTML = "prehra";
    } else if (me.innerHTML === "papier" && computer.innerHTML === "noznice") {
      result.innerHTML = "prehra";
    } else if (me.innerHTML === "papier" && computer.innerHTML === "kamen") {
      result.innerHTML = "vyhra";
    } else if (me.innerHTML === "noznice" && computer.innerHTML === "kamen") {
      result.innerHTML = "prehra";
    } else if (me.innerHTML === "noznice" && computer.innerHTML === "papier") {
      result.innerHTML = "vyhra";
    }
  })
);
