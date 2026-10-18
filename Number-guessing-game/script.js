const checkBtn = document.getElementById("check-btn");

let attempt = 0;

let countEl = document.getElementById("count-el");

let numberFromUser = document.getElementById("user-guess");

let guessedNumber = document.getElementById("guessedNumber");

let winningNumber = document.getElementById("winningNumber");

checkBtn.addEventListener("click", function () {
  if (!numberFromUser.value) {
    document.getElementById("empty").textContent =
      "OOPS You didn't select a number";
    document.getElementById("empty").style.color = "red";
  }

  if (numberFromUser.value) {
    attempt++;

    countEl.textContent = attempt;

    countEl.style.fontWeight = "800";

    guessedNumber.textContent =
      "Your Selected Number Was: " + numberFromUser.value;

    document.getElementById("empty").style.display = "none";

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    winningNumber.textContent = randomNumber;
  }
});
