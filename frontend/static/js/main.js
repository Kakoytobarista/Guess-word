import {
  createTextElement,
  getGetParam,
  copy,
  closeOpenBar,
  addAlert
} from './handlers.js'

import {
  createLink,
  getConcreteWord,
  getRandomWord
}from "./requests.js";

import {
  buttonGenerateLink,
  keyboardButtons,
  buttonCopy,
  buttonsTabBar,
  Cells
}from './constants.js'



const createElementWithLink = async function () {
  try {
    let linkText;
    linkText = await createLink(window.hardcodedWord)
    await createTextElement(linkText)

  } catch (e) {
    console.error(e)
  }
}


const getWord = async function (uuid){
    try {
      if (!uuid) {
        await getRandomWord()
      }
      else {
        await getConcreteWord(uuid)
      }
    }
    catch(e) {
      console.error(e)
    }
}


const submitWord = (cells) => {
  let lettersGuessed = 0;
  if (window.rowFilled) {
    window.rowFilled = false;
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].classList.remove("Game-cells-cell-entered");
      if (cells[i].innerText.toLowerCase() === window.hardcodedWord[i]) {
        cells[i].classList.add("Game-cells-cell-correct");
        lettersEntered[cells[i].innerText] = "correct";
        lettersGuessed += 1;
      } else if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) === -1) {
        cells[i].classList.add("Game-cells-cell-absent");
        if (lettersEntered[cells[i].innerText] !== "correct" &&
            lettersEntered[cells[i].innerText] !== "elsewhere") {
          lettersEntered[cells[i].innerText] = "absent"
        }
      } else if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) > -1 &&
          cells[i].innerText !== window.hardcodedWord[i]) {
        cells[i].classList.add("Game-cells-cell-elsewhere");
        if (lettersEntered[cells[i].innerText] !== "correct") {
          lettersEntered[cells[i].innerText] = "elsewhere";
        }
      }
    }

    if (lettersGuessed === window.hardcodedWord.length) {
      addAlert('You won!');
      window.gameEnded = true;
    } else if (window.currentAttempt === window.attempts) {
      addAlert('You blew it!');
      window.gameEnded = true;
    } else {
      window.currentAttempt += 1;
      Object.keys(lettersEntered).forEach((letter) => {
        let keyboardButtons = Array.from(
            document.querySelectorAll(".Game-keyboard-button")
        );

        keyboardButtons.forEach((keyboardButton) => {
          if (
            keyboardButton.innerText.toLowerCase() === letter.toLocaleLowerCase()
          ) {
            keyboardButton.classList.add(
              `Game-keyboard-button-${lettersEntered[letter]}`
            );
          }
        document.querySelectorAll('.Game-keyboard-button-absent')
        .forEach((function(x){ x.setAttribute("style","pointer-events: none;");}))
        });
      });
    }
  } else {
    addAlert('Fill in all the cells in the row!')
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
      if (i === cells.length - 1) {
        window.rowFilled = true;
      }
      break;
    }
  }
};


const buttonsHandler = (event) => {
  if (window.gameEnded)
    return;

  const currentRow = document.querySelector(
    `.Game-cells-row-${window.currentAttempt}`
  );

  let cells = Array.from(currentRow.querySelectorAll(".Game-cells-cell"));

  if (event.target.classList.contains("Game-keyboard-button-backspace")) {
    backspaceClick(cells);
  }
  else if (event.target.classList.contains("Game-keyboard-button-enter")) {
    submitWord(cells);
  }
  else {
    keyboardLetterClick(cells, event.target.innerText);
  }
};


let startGame;
(startGame = async () => {
  window.currentAttempt = 1;
  window.attempts = 5;
  window.lettersEntered = {};
  await getWord(getGetParam())

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

})();


// Event listeners

keyboardButtons.forEach((button) =>
  button.addEventListener("click", buttonsHandler)
);

buttonsTabBar.forEach(item =>
{item.addEventListener("click", closeOpenBar)})

buttonGenerateLink.addEventListener("click", createElementWithLink)
buttonCopy.addEventListener('click', copy)
