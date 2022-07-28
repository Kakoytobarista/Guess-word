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



class TabBar {
  linkText = ""

  async createElementWithLink() {
  // This method responsible for creating html with link //
    try {
      this.linkText = await createLink(window.hardcodedWord)
      await createTextElement(this.linkText)

    } catch (e) {
      console.error(e)
    }
  }

  startGenerateLink() {
  // This method responsible for open close tab bar //
  // and copy generated link from input on panel "Generate Link //
    buttonsTabBar.forEach(item => {
      item.addEventListener("click", closeOpenBar)
    })

    buttonGenerateLink.addEventListener("click", this.createElementWithLink)
    buttonCopy.addEventListener('click', copy)
  }
}

class Game {

  constructor(attempts) {
    this.attempts = attempts;
    this.currentAttempt = 1;
    this.lettersEntered = {};
  }

  async getWord (uuid){
  // This method helps yo getting random //
  // by uuid word or special word //
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

  backspaceClick(cells) {
  // This method responsible for removing letters //
  cells = cells.reverse();
  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i].innerText) {
      cells[i].innerText = "";
      cells[i].classList.remove("Game-cells-cell-entered");
      window.rowFilled = false;
      break;
    }
  }
}

  keyboardLetterClick(cells, letterText) {
  // This method responsible for typing letter on keyboard //
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
}

  async submitWord(cells) {
    // This method with main logic game //
    // changing color of letters //
    // (if they true or not) and //
    let lettersGuessed = 0;
    if (window.rowFilled) {
      window.rowFilled = false;
      for (let i = 0; i < cells.length; i += 1) {
        cells[i].classList.remove("Game-cells-cell-entered");
        if (cells[i].innerText.toLowerCase() === window.hardcodedWord[i]) {
          cells[i].classList.add("Game-cells-cell-correct");
          this.lettersEntered[cells[i].innerText] = "correct";
          lettersGuessed += 1;
        } else if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) === -1) {
          cells[i].classList.add("Game-cells-cell-absent");
          if (this.lettersEntered[cells[i].innerText] !== "correct" &&
              this.lettersEntered[cells[i].innerText] !== "elsewhere") {
            this.lettersEntered[cells[i].innerText] = "absent"
          }
        } else if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) > -1 &&
            cells[i].innerText !== window.hardcodedWord[i]) {
          cells[i].classList.add("Game-cells-cell-elsewhere");
          if (this.lettersEntered[cells[i].innerText] !== "correct") {
            this.lettersEntered[cells[i].innerText] = "elsewhere";
          }
        }
      }
      if (lettersGuessed === window.hardcodedWord.length) {
        addAlert('You won!');
        window.gameEnded = true;
      } else if (this.currentAttempt === this.attempts) {
        addAlert('You blew it!');
        window.gameEnded = true;
      } else {
        this.currentAttempt += 1;
        Object.keys(this.lettersEntered).forEach((letter) => {
          let keyboardButtons = Array.from(
              document.querySelectorAll(".Game-keyboard-button")
          );

          keyboardButtons.forEach((keyboardButton) => {
            if (
                keyboardButton.innerText.toLowerCase() === letter.toLocaleLowerCase()
            ) {
              keyboardButton.classList.add(
                  `Game-keyboard-button-${this.lettersEntered[letter]}`
              );
            }
            document.querySelectorAll('.Game-keyboard-button-absent')
                .forEach((function (x) {
                  x.setAttribute("style", "pointer-events: none;");
                }))
          });
        });
      }
    } else {
      addAlert('Fill in all the cells in the row!')
    }
  }


  async createGameTable() {
    // This method create a table for //
    // game with rows and cells //
    await this.getWord(getGetParam())
    for (let i = 1; i <= this.attempts; i += 1) {
      const newRow = document.createElement("div");
      newRow.className = `Game-cells-row Game-cells-row-${i}`;

      for (let j = 1; j <= window.hardcodedWord.length; j += 1) {
        const newCell = document.createElement("div");
        newCell.className = `Game-cells-cell Game-cells-cell-${j}`;
        newRow.appendChild(newCell);
      }
      Cells.appendChild(newRow);
    }
  }

  async buttonsHandler(event) {
    // This method give functional for delete approve and  //
    // type any available letters.  //
    if (window.gameEnded)
      return;
    const currentRow = document.querySelector(
        `.Game-cells-row-${this.currentAttempt}`
    );
    let cells = Array.from(currentRow.querySelectorAll(".Game-cells-cell"));
    if (event.target.classList.contains("Game-keyboard-button-backspace")) {
      this.backspaceClick(cells);
    } else if (event.target.classList.contains("Game-keyboard-button-enter")) {
      await this.submitWord(cells);
    } else {
      this.keyboardLetterClick(cells, event.target.innerText);
    }
  }


  async startGame() {
    // This method for start working game //
    await this.createGameTable()
    await keyboardButtons.forEach((button) =>
        button.addEventListener("click", (event)=> this.buttonsHandler(event))
    );
  }
  }

const game = new Game(5)
await game.startGame()
const tabBar = new TabBar()
await tabBar.startGenerateLink()
