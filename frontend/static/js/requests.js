import {word} from './main.js'
import {addNewWord, is_digit, is_empty, is_not_more_then_13_length, onlyLatinCharacters} from "./handlers.js";

export const createLink = async function() {
    if (await is_empty()) {
        Swal.fire({
          title: 'You need to write a word!',
          confirmButtonColor: '#944743',
    })
        return

}
    if (await is_digit()) {
        Swal.fire({
          title: 'You can using only letters!',
          confirmButtonColor: '#944743',
    })
        return
    }

    if (await onlyLatinCharacters()){
        Swal.fire({
          title: 'You can using only latin letters!',
          confirmButtonColor: '#944743',
    })
        return
    }
    if (await is_not_more_then_13_length()){
        Swal.fire({
          title: 'Word can"t be with more then 13 letter!',
          confirmButtonColor: '#944743',
    })
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
