class WordEncodingUtility:
    @staticmethod
    def encode(word: str) -> str:
        """Encod method for hide word on frontend part"""
        encoded_text = ''
        for char in word:
            encoded_text += str(ord(char)) + ' '
        return encoded_text.strip()
