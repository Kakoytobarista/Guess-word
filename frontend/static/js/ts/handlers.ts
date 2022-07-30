import {
    wordInput,
    decodeDict,
    buttonRules,
    panels,
    buttonGenerateLink,
    input
} from "./constants";



export const word: any = buttonGenerateLink.onclick = function(): any {
  // @ts-ignore
    return input.value
}


export function addAlert(text: string) {
    // @ts-ignore
    Swal.fire({
        title: text,
        confirmButtonColor: '#944743',
    })
}


export const decodeFunc = function(encodedWord: string) {
    let decodedWord: string = ""
    for (let i = 0; i < encodedWord.length; i++) {
        if (encodedWord[i] in decodeDict) {
            decodedWord += decodeDict[encodedWord[i]]
        } else {
            decodedWord += encodedWord[i]
        }
    }
    return decodedWord
}


export const getGetParam = function(): string {
    const currentUrl: string = window.location.href
    if (currentUrl.includes("=")) {
      return currentUrl.split('?').slice(-1)[0]
    }
}


export const addNewWord = async function(word: string) {
  // @ts-ignore
    window.hardcodedWord = decodeFunc(word.toLowerCase())
}


export const createTextElement = async function(linkText: string) {
    if (!document.getElementById('linkTextId') && linkText) {
        const input: HTMLElement = document.getElementById('input');
        // @ts-ignore
        input.value = linkText
    }
}


export function copy() {
  const copyText : HTMLElement= document.getElementById('input');
  // @ts-ignore
    copyText.select()
  document.execCommand('copy')
}


export function is_empty(): boolean {
    // @ts-ignore
    return !wordInput.value;
}


export function is_digit(): boolean {
    // @ts-ignore
    return wordInput.value.match(/\d/g)
}


export function onlyLatinCharacters(): boolean {
    // @ts-ignore
    return !/^[a-zA-Z]+$/.test(wordInput.value);
}


export function is_not_more_then_13_length(): boolean {
    // @ts-ignore
    return wordInput.value.length > 13;
}


export function closeOpenBar(event: Event): any {
    let btn_main: HTMLElement
    let btn_less: HTMLElement
    let bool: boolean = true
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
