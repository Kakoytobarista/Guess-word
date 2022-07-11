const sumbitWord = (cells) => {
  let lettersGuessed = 0;
  if (window.rowFilled) {
    window.rowFilled = false;
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].classList.remove("Game-cells-cell-entered");
      if (cells[i].innerText.toLowerCase() == window.hardcodedWord[i]) {
        cells[i].classList.add("Game-cells-cell-correct");
        lettersEntered[cells[i].innerText] = "correct";
        lettersGuessed += 1;
      } else if (
        window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) == -1
      ) {
        cells[i].classList.add("Game-cells-cell-absent");
        if (
          lettersEntered[cells[i].innerText] != "correct" &&
          lettersEntered[cells[i].innerText] != "elsewhere"
        ) {
          lettersEntered[cells[i].innerText] = "absent";
        }
      } else if (
        window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) > -1 &&
        cells[i].innerText != window.hardcodedWord[i]
      ) {
        cells[i].classList.add("Game-cells-cell-elsewhere");
        if (lettersEntered[cells[i].innerText] != "correct") {
          lettersEntered[cells[i].innerText] = "elsewhere";
        }
      }
    }

    if (lettersGuessed == window.hardcodedWord.length) {
      console.log("won");
      window.gameEnded = true;
    } else if (window.currentAttempt == window.attempts) {
      console.log("lost");
      window.gameEnded = true;
    } else {
      window.currentAttempt += 1;
      Object.keys(lettersEntered).forEach((letter) => {
        keyboardButtons = Array.from(
          document.querySelectorAll(".Game-keyboard-button")
        );

        keyboardButtons.forEach((keyboardButton) => {
          if (
            keyboardButton.innerText.toLowerCase() == letter.toLocaleLowerCase()
          ) {
            keyboardButton.classList.add(
              `Game-keyboard-button-${lettersEntered[letter]}`
            );
          }
        });
      });
    }
  } else {
    console.log("fill the row");
  }
};

const backspaceClick = (cells) => {
  cells = cells.reverse();
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].innerText) {
      cells[i].innerText = "";
      cells[i].classList.remove("Game-cells-cell-entered");
      window.rowFilled = false;
      break;
    }
  }
};

const keyboardLetterClick = (cells, letterText) => {
  for (let i = 0; i < cells.length; i += 1) {
    if (!cells[i].innerText) {
      cells[i].innerText = letterText;
      cells[i].classList.add("Game-cells-cell-entered");
      if (i == cells.length - 1) {
        window.rowFilled = true;
      }
      break;
    }
  }
};

const buttonsHandler = (e) => {
  if (window.gameEnded) return;

  const currentRow = document.querySelector(
    `.Game-cells-row-${window.currentAttempt}`
  );

  let cells = Array.from(currentRow.querySelectorAll(".Game-cells-cell"));

  if (e.target.classList.contains("Game-keyboard-button-backspace")) {
    backspaceClick(cells);
  } else if (e.target.classList.contains("Game-keyboard-button-enter")) {
    sumbitWord(cells);
  } else {
    keyboardLetterClick(cells, e.target.innerText);
  }

  return;
};

const startGame = () => {
  window.currentAttempt = 1;
  window.attempts = 5;
  window.hardcodedWord = "fresh";
  window.lettersEntered = {};

  const Cells = document.querySelector(".Game-cells");
  for (let i = 1; i <= window.attempts; i += 1) {
    const newRow = document.createElement("div");
    newRow.className = `Game-cells-row Game-cells-row-${i}`;

    for (let j = 1; j <= window.hardcodedWord.length; j += 1) {
      const newCell = document.createElement("div");
      newCell.className = `Game-cells-cell Game-cells-cell-${j}`;
      newRow.appendChild(newCell);
    }
    Cells.appendChild(newRow);
  }

  keyboardButtons = Array.from(
    document.querySelectorAll(".Game-keyboard-button")
  );

  keyboardButtons.forEach((button) =>
    button.addEventListener("click", buttonsHandler)
  );
};

startGame();
