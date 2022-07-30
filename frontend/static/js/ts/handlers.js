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
exports.closeOpenBar = exports.is_not_more_then_13_length = exports.onlyLatinCharacters = exports.is_digit = exports.is_empty = exports.copy = exports.createTextElement = exports.addNewWord = exports.getGetParam = exports.decodeFunc = exports.addAlert = exports.word = void 0;
var constants_1 = require("./constants.js");
exports.word = constants_1.buttonGenerateLink.onclick = function () {
    // @ts-ignore
    return constants_1.input.value;
};
function addAlert(text) {
    // @ts-ignore
    Swal.fire({
        title: text,
        confirmButtonColor: '#944743'
    });
}
exports.addAlert = addAlert;
var decodeFunc = function (encodedWord) {
    var decodedWord = "";
    for (var i = 0; i < encodedWord.length; i++) {
        if (encodedWord[i] in constants_1.decodeDict) {
            decodedWord += constants_1.decodeDict[encodedWord[i]];
        }
        else {
            decodedWord += encodedWord[i];
        }
    }
    return decodedWord;
};
exports.decodeFunc = decodeFunc;
var getGetParam = function () {
    var currentUrl = window.location.href;
    if (currentUrl.includes("=")) {
        return currentUrl.split('?').slice(-1)[0];
    }
};
exports.getGetParam = getGetParam;
var addNewWord = function (word) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // @ts-ignore
            window.hardcodedWord = (0, exports.decodeFunc)(word.toLowerCase());
            return [2 /*return*/];
        });
    });
};
exports.addNewWord = addNewWord;
var createTextElement = function (linkText) {
    return __awaiter(this, void 0, void 0, function () {
        var input_1;
        return __generator(this, function (_a) {
            if (!document.getElementById('linkTextId') && linkText) {
                input_1 = document.getElementById('input');
                // @ts-ignore
                input_1.value = linkText;
            }
            return [2 /*return*/];
        });
    });
};
exports.createTextElement = createTextElement;
function copy() {
    var copyText = document.getElementById('input');
    // @ts-ignore
    copyText.select();
    document.execCommand('copy');
}
exports.copy = copy;
function is_empty() {
    // @ts-ignore
    return !constants_1.wordInput.value;
}
exports.is_empty = is_empty;
function is_digit() {
    // @ts-ignore
    return constants_1.wordInput.value.match(/\d/g);
}
exports.is_digit = is_digit;
function onlyLatinCharacters() {
    // @ts-ignore
    return !/^[a-zA-Z]+$/.test(constants_1.wordInput.value);
}
exports.onlyLatinCharacters = onlyLatinCharacters;
function is_not_more_then_13_length() {
    // @ts-ignore
    return constants_1.wordInput.value.length > 13;
}
exports.is_not_more_then_13_length = is_not_more_then_13_length;
function closeOpenBar(event) {
    var btn_main;
    var btn_less;
    var bool = true;
    while (bool) {
        if (event.target === constants_1.buttonRules) {
            btn_main = constants_1.buttonRules;
            btn_less = constants_1.buttonGenerateLink;
        }
        else {
            btn_main = constants_1.buttonGenerateLink;
            btn_less = constants_1.buttonRules;
        }
        if (btn_main.getAttribute('firstClick') !== 'true') {
            btn_main.setAttribute('firstClick', 'true');
            btn_less.setAttribute('firstClick', 'false');
            constants_1.panels.style.opacity = '1';
            bool = false;
            break;
        }
        if (btn_main.getAttribute('firstClick') === 'true') {
            btn_main.setAttribute('firstClick', 'false');
            btn_less.setAttribute('firstClick', 'false');
            constants_1.panels.style.opacity = '0';
            bool = false;
            break;
        }
        btn_main.setAttribute('active', 'true');
        btn_less.setAttribute('active', 'false');
    }
}
exports.closeOpenBar = closeOpenBar;
