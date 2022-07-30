export const buttonGenerateLink: HTMLElement = document.getElementById("generate_link");
export const input: HTMLElement = document.getElementById('lname');
export const keyboardButtons: Array<HTMLElement> = Array.from(
    document.querySelectorAll(".Game-keyboard-button")
);
export const buttonRules: HTMLElement = document.getElementById('one');
export const buttonsTabBar: any = document.querySelectorAll('.my-element');
export const panels: HTMLElement = document.querySelector('.panels');
export const wordInput: HTMLElement = document.getElementById('lname');
export const buttonCopy: HTMLElement = document.getElementById('copy');
export const Cells: HTMLElement = document.querySelector(".Game-cells");

export const mainApiUrl: string = "http://guess-word.onthewifi.com"

export const headersParams: {} = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

export const decodeDict: {} = {
    "!": "a",
    "@": "b",
    "#": "c",
    "$": "d",
    "%": "e",
    "^": "f",
    "&": "g",
    "*": "h",
    "(": "i",
    ")": "j",
    "-": "k",
    "+": "l",
    "_": "m",
    ":": "n",
    ",": "o",
    "{": "p",
    "}": "q",
    "[": "s",
    "]": "t",
    "|": "v",
    "~": "w",
    "<": "x",
    ">": "y",
    "/": "z"
}
