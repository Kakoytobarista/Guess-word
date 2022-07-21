class DecodeEncodeObject(object):
    """Class for decoding string"""
    def __init__(self):
        self.first_letter = 0
        self.last_letter = -1
        self.encode_dict = {
            "a": "!",
            "b": "@",
            "c": "#",
            "d": "$",
            "e": "%",
            "f": "^",
            "g": "&",
            "h": "*",
            "i": "(",
            "j": ")",
            "k": "-",
            "l": "+",
            "m": "Q",
            "n": "W",
            "o": "e",
            "p": "r",
            "q": "T",
            "s": "y",
            "t": "U",
            "v": "i",
            "w": "o",
            "x": "p",
            "y": "A",
            "z": "s"
        }

    def encode(self, word: str) -> str:
        """Function for encode word"""
        return "".join([self.encode_dict.get(i) or i for i in word])
