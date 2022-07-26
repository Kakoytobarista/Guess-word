import {word} from './main.js'
import {
    addAlert, addNewWord,
    is_digit,
    is_empty,
    is_not_more_then_13_length,
    onlyLatinCharacters
} from "./handlers.js";


export const createLink = async function() {
    if (await is_empty()) {
        await addAlert('You need to write a word!')
        return
}
    if (await is_digit()) {
        await addAlert('You can using only letters!')
        return
    }

    if (await onlyLatinCharacters()){
        await addAlert('You can using only latin letters!')
        return
    }
    if (await is_not_more_then_13_length()){
        await addAlert('Word can"t be with more then 13 letter!')
    }
    else {
        const response = await fetch('http://guess-word.onthewifi.com/api/word/', {
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
    let response = await fetch('http://guess-word.onthewifi.com/api/word/random_word/', {
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
    const response = await fetch('http://guess-word.onthewifi.com/api/word?' + uuid, {
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
