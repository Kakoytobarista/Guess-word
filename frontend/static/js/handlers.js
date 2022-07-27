import {
    wordInput,
    decodeDict,
    buttonRules,
    panels,
    buttonGenerateLink,
    input
} from "./constants.js";



export const word = buttonGenerateLink.onclick = function() {
  return input.value
}


export function addAlert(text) {
    Swal.fire({
        title: text,
        confirmButtonColor: '#944743',
    })
}


export const decodeFunc = function(encodedWord) {
    let decodedWord = ""
    for (let i = 0; i < encodedWord.length; i++) {
        if (encodedWord[i] in decodeDict) {
            decodedWord += decodeDict[encodedWord[i]]
        } else {
            decodedWord += encodedWord[i]
        }
    }
    return decodedWord
}


export const getGetParam = function() {
    const currentUrl = window.location.href
    if (currentUrl.includes("=")) {
      return currentUrl.split('?').slice(-1)[0]
    }
}


export const addNewWord = async function(word) {
  window.hardcodedWord = decodeFunc(word.toLowerCase())
}


export const createTextElement = async function(linkText) {
    if (!document.getElementById('linkTextId') && linkText) {
        const input = document.getElementById('input');
        input.value = linkText
    }
}


export function copy() {
  const copyText = document.getElementById('input');
  copyText.select()
  document.execCommand('copy')
}


export function is_empty() {
    return !wordInput.value;
}


export function is_digit() {
    return wordInput.value.match(/\d/g)
}


export function onlyLatinCharacters() {
    return !/^[a-zA-Z]+$/.test(wordInput.value);
}


export function is_not_more_then_13_length() {
    return wordInput.value.length > 13;
}


export function closeOpenBar(event) {
    let btn_main
    let btn_less
    let bool = true
    while (bool) {
        if (event.target === buttonRules) {
            btn_main = buttonRules
            btn_less =buttonGenerateLink
        }
        else {
            btn_main = buttonGenerateLink
            btn_less =buttonRules
        }
            if (btn_main.getAttribute('firstClick') !== 'true') {
                btn_main.setAttribute('firstClick', 'true')
                btn_less.setAttribute('firstClick', 'false')
                panels.style.opacity = '1';
                bool = false
                break
            }
            if (btn_main.getAttribute('firstClick') === 'true') {
                btn_main.setAttribute('firstClick', 'false')
                btn_less.setAttribute('firstClick', 'false')
                panels.style.opacity = '0';
                bool = false
                break
            }
            btn_main.setAttribute('active', 'true')
            btn_less.setAttribute('active', 'false')
        }
}
