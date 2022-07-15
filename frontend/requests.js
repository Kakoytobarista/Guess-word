import {word} from './main.js'
import {addNewWord} from "./handlers.js";


export const createLink = async function() {
  const response = await fetch('http://127.0.0.1:8000/api/word/', {
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


export const getRandomWord = async function() {
  try {
    let response = await fetch('http://127.0.0.1:8000/api/word/random_word', {
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
    const response = await fetch('http://127.0.0.1:8000/api/word?' + uuid, {
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
