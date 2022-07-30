"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var handlers_1 = require("../handlers");
var requests_1 = require("../requests");
var constants_1 = require("../constants");
var TabBar = /** @class */ (function () {
    function TabBar() {
        this.linkText = "";
    }
    TabBar.prototype.createElementWithLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, (0, requests_1.createLink)()];
                    case 1:
                        _a.linkText = _b.sent();
                        return [4 /*yield*/, (0, handlers_1.createTextElement)(this.linkText)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TabBar.prototype.startGenerateLink = function () {
        // This method responsible for open close tab bar //
        // and copy generated link from input on panel "Generate Link //
        constants_1.buttonsTabBar.forEach(function (item) {
            item.addEventListener("click", handlers_1.closeOpenBar);
        });
        constants_1.buttonGenerateLink.addEventListener("click", this.createElementWithLink);
        constants_1.buttonCopy.addEventListener('click', handlers_1.copy);
    };
    return TabBar;
}());
var Game = /** @class */ (function () {
    function Game(attempts) {
        this.attempts = attempts;
        this.currentAttempt = 1;
        this.lettersEntered = {};
    }
    Game.prototype.getWord = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!!uuid) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, requests_1.getRandomWord)()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, requests_1.getConcreteWord)(uuid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.backspaceClick = function (cells) {
        // This method responsible for removing letters //
        cells = cells.reverse();
        for (var i = 0; i < cells.length; i += 1) {
            if (cells[i].innerText) {
                cells[i].innerText = "";
                cells[i].classList.remove("Game-cells-cell-entered");
                // @ts-ignore
                window.rowFilled = false; // TODO Research about properties window
                break;
            }
        }
    };
    Game.prototype.keyboardLetterClick = function (cells, letterText) {
        // This method responsible for typing letter on keyboard //
        for (var i = 0; i < cells.length; i += 1) {
            if (!cells[i].innerText) {
                cells[i].innerText = letterText;
                cells[i].classList.add("Game-cells-cell-entered");
                if (i === cells.length - 1) {
                    // @ts-ignore
                    window.rowFilled = true;
                }
                break;
            }
        }
    };
    Game.prototype.submitWord = function (cells) {
        return __awaiter(this, void 0, void 0, function () {
            var lettersGuessed, i;
            var _this = this;
            return __generator(this, function (_a) {
                lettersGuessed = 0;
                // @ts-ignore
                if (window.rowFilled) {
                    // @ts-ignore
                    window.rowFilled = false;
                    for (i = 0; i < cells.length; i += 1) {
                        cells[i].classList.remove("Game-cells-cell-entered");
                        // @ts-ignore
                        if (cells[i].innerText.toLowerCase() === window.hardcodedWord[i]) {
                            cells[i].classList.add("Game-cells-cell-correct");
                            this.lettersEntered[cells[i].innerText] = "correct";
                            lettersGuessed += 1;
                        }
                        else { // @ts-ignore
                            if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) === -1) {
                                cells[i].classList.add("Game-cells-cell-absent");
                                if (this.lettersEntered[cells[i].innerText] !== "correct" &&
                                    this.lettersEntered[cells[i].innerText] !== "elsewhere") {
                                    this.lettersEntered[cells[i].innerText] = "absent";
                                }
                            }
                            else { // @ts-ignore
                                // @ts-ignore
                                // @ts-ignore
                                // @ts-ignore
                                // @ts-ignore
                                if (window.hardcodedWord.indexOf(cells[i].innerText.toLowerCase()) > -1 && cells[i].innerText !== window.hardcodedWord[i]) {
                                    cells[i].classList.add("Game-cells-cell-elsewhere");
                                    if (this.lettersEntered[cells[i].innerText] !== "correct") {
                                        this.lettersEntered[cells[i].innerText] = "elsewhere";
                                    }
                                }
                            }
                        }
                    }
                    // @ts-ignore
                    if (lettersGuessed === window.hardcodedWord.length) {
                        (0, handlers_1.addAlert)('You won!');
                        // @ts-ignore
                        window.gameEnded = true;
                    }
                    else if (this.currentAttempt === this.attempts) {
                        (0, handlers_1.addAlert)('You blew it!');
                        // @ts-ignore
                        window.gameEnded = true;
                    }
                    else {
                        this.currentAttempt += 1;
                        Object.keys(this.lettersEntered).forEach(function (letter) {
                            var keyboardButtons = Array.from(document.querySelectorAll(".Game-keyboard-button"));
                            keyboardButtons.forEach(function (keyboardButton) {
                                // @ts-ignore
                                // @ts-ignore
                                // @ts-ignore
                                if (keyboardButton.innerText.toLowerCase() === letter.toLocaleLowerCase()) {
                                    keyboardButton.classList.add("Game-keyboard-button-".concat(_this.lettersEntered[letter]));
                                }
                                document.querySelectorAll('.Game-keyboard-button-absent')
                                    .forEach((function (x) {
                                    x.setAttribute("style", "pointer-events: none;");
                                }));
                            });
                        });
                    }
                }
                else {
                    (0, handlers_1.addAlert)('Fill in all the cells in the row!');
                }
                return [2 /*return*/];
            });
        });
    };
    Game.prototype.createGameTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, newRow, j, newCell;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // This method create a table for //
                    // game with rows and cells //
                    return [4 /*yield*/, this.getWord((0, handlers_1.getGetParam)())];
                    case 1:
                        // This method create a table for //
                        // game with rows and cells //
                        _a.sent();
                        for (i = 1; i <= this.attempts; i += 1) {
                            newRow = document.createElement("div");
                            newRow.className = "Game-cells-row Game-cells-row-".concat(i);
                            // @ts-ignore
                            for (j = 1; j <= window.hardcodedWord.length; j += 1) {
                                newCell = document.createElement("div");
                                newCell.className = "Game-cells-cell Game-cells-cell-".concat(j);
                                newRow.appendChild(newCell);
                            }
                            constants_1.Cells.appendChild(newRow);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.buttonsHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var currentRow, cells;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // This method give functional for delete approve and  //
                        // type any available letters.  //
                        // @ts-ignore
                        if (window.gameEnded)
                            return [2 /*return*/];
                        currentRow = document.querySelector(".Game-cells-row-".concat(this.currentAttempt));
                        cells = Array.from(currentRow.querySelectorAll(".Game-cells-cell"));
                        if (!event.target.classList.contains("Game-keyboard-button-backspace")) return [3 /*break*/, 1];
                        this.backspaceClick(cells);
                        return [3 /*break*/, 4];
                    case 1:
                        if (!event.target.classList.contains("Game-keyboard-button-enter")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.submitWord(cells)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        // @ts-ignore
                        this.keyboardLetterClick(cells, event.target.innerText);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // This method for start working game //
                    return [4 /*yield*/, this.createGameTable()];
                    case 1:
                        // This method for start working game //
                        _a.sent();
                        constants_1.keyboardButtons.forEach(function (button) {
                            return button.addEventListener("click", function (event) { return _this.buttonsHandler(event); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Game;
}());
var game = new Game(5);
// @ts-ignore
await game.startGame();
var tabBar = new TabBar();
tabBar.startGenerateLink();
