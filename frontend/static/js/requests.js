import {
    addAlert, addNewWord,
    is_digit,
    is_empty,
    is_not_more_then_13_length,
    onlyLatinCharacters,
    word
} from "./handlers.js";

import {
    mainApiUrl
} from "./constants.js"



export const createLink = async function() {
    if (is_empty()) {
        addAlert('You need to write a word!')
        return
}
    if (is_digit()) {
        addAlert('You can using only letters!')
        return
    }

    if (onlyLatinCharacters()){
        addAlert('You can using only latin letters!')
        return
    }
    if (is_not_more_then_13_length()){
        addAlert('Word can"t be with more then 13 letter!')
    }
    else {
        const response = await fetch(`${mainApiUrl}/api/word/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              'word': word()
            }
        )
      }
  );
  const data = await response.json();
  return data['link']
    }
}


export const getRandomWord = async function() {
  try {
    let response = await fetch(`${mainApiUrl}/api/word/random_word/`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
    )
    const data = await response.json();
    await addNewWord(data)
  }
  catch(e) {
    console.log(e)
  }
}


export const getConcreteWord = async function(uuid) {
  try {
    const response = await fetch(`${mainApiUrl}/api/word?${uuid}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
    )
    const data = await response.json();
    await addNewWord(data['results'][0]['word'])
  }
  catch(e) {
    console.log(e)
  }
}
