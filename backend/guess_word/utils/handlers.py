from dotenv import load_dotenv

load_dotenv()


class WordEncodingUtility:
    @staticmethod
    def encode(word: str) -> str:
        encoded_text = ''
        for char in word:
            encoded_text += str(ord(char)) + ' '
        return encoded_text.strip()
