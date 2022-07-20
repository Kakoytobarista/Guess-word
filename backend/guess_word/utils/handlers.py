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
            "l": "+"
        }

    def encode(self, word: str) -> str:
        """Function for encode word"""
        return "".join([self.encode_dict.get(i) or i for i in word])
