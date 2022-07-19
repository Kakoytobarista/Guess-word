export const getGetParam = function() {
    const currentUrl = window.location.href
    if (currentUrl.includes("=")) {
      return currentUrl.split('?').slice(-1)[0]
    }
}

export const addNewWord = async function(word) {
  window.hardcodedWord = word.toLowerCase()
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
    const wordInput = await document.getElementById('lname');
    return !await wordInput.value;
}

export async function is_digit() {
    const wordInput = await document.getElementById('lname');
    return await wordInput.value.match(/\d/g)
}


export async function onlyLatinCharacters() {
    const wordInput = await document.getElementById('lname');
    return !/^[a-zA-Z]+$/.test(wordInput.value);
}
