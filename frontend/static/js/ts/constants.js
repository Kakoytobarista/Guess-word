"use strict";
exports.__esModule = true;
exports.decodeDict = exports.headersParams = exports.mainApiUrl = exports.Cells = exports.buttonCopy = exports.wordInput = exports.panels = exports.buttonsTabBar = exports.buttonRules = exports.keyboardButtons = exports.input = exports.buttonGenerateLink = void 0;
exports.buttonGenerateLink = document.getElementById("generate_link");
exports.input = document.getElementById('lname');
exports.keyboardButtons = Array.from(document.querySelectorAll(".Game-keyboard-button"));
exports.buttonRules = document.getElementById('one');
exports.buttonsTabBar = document.querySelectorAll('.my-element');
exports.panels = document.querySelector('.panels');
exports.wordInput = document.getElementById('lname');
exports.buttonCopy = document.getElementById('copy');
exports.Cells = document.querySelector(".Game-cells");
exports.mainApiUrl = "http://guess-word.onthewifi.com";
exports.headersParams = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
exports.decodeDict = {
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
};
