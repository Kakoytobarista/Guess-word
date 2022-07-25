import {wordInput, decodeDict, buttonRules, panels, buttonGenerateLink} from "./constants.js";


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

export async function copy() {
  const copyText = await document.getElementById('input');
  copyText.select()
  document.execCommand('copy')
}


export async function is_empty() {
    return !await wordInput.value;
}

export async function is_digit() {
    return await wordInput.value.match(/\d/g)
}


export async function onlyLatinCharacters() {
    return !/^[a-zA-Z]+$/.test(wordInput.value);
}

export async function is_not_more_then_13_length() {
    return wordInput.value.length > 13;
}


export async function addTrueForRules() {
    let bool = true
    while (bool) {
        if (buttonRules.getAttribute('active') === 'true' &&
            panels.style.display === 'none') {
            panels.style.display = 'block';
            bool = false
            break
        }
        if (buttonRules.getAttribute('active') === 'true' &&
            panels.style.display !== 'none') {
            panels.style.display = 'none';
            bool = false
            break
        }
    }

    await buttonRules.setAttribute('active', 'true')
    await buttonGenerateLink.setAttribute('active', 'false')
}

export async function addTrueForGenerateLink() {
  let bool = true
  while (bool) {
      if (buttonGenerateLink.getAttribute('active') === 'true' &&
          panels.style.display === 'none') {
          panels.style.display = 'block';
          bool = false
          break
      }
      if (buttonGenerateLink.getAttribute('active') === 'true' &&
          panels.style.display !== 'none') {
          panels.style.display = 'none';
          bool = false
          break
      }
  }
  await buttonGenerateLink.setAttribute('active', 'true')
  await buttonRules.setAttribute('active', 'false')
}
