import os
import random
import requests


#  0 its letter not in word
#  1 its letter in word but not in needed place
#  2 its letter on needed place

# WORDS = open(word_file).read().splitlines()

def get_all_words():
    response = requests.get('https://raw.githubusercontent.com/danakt/russian-words/master/russian.txt')
    words = response.content.decode('cp1251').splitlines()
    return words


def get_random_word(words):
    return random.choice(words)


def guess_word(word):
    while True:
        print("Try guess word:\n")
        input_word = input().lower()
        print(word)
        if input_word == word:
            print("You are WIN")
            break
        if [i for i in input_word if i in word]:
            letter_with_index = [(i, j) for i, j in enumerate(word) if j in input_word]
            print(f"These letters are present: {letter_with_index}", sep=", ")
        else:
            print("That's wrong")

# guess_word(words=all_words)


guess_word(get_random_word(get_all_words()))


class Dict:
    def is_include(self, letter):
        if letter in self:
            return True
        return False

    def is_include_and_good_place(self, letter):
        if letter in self and letter.index == self.index:
            return True
        return False

    def not_present(self, letter):
        if letter not in self:
            return False
        return True


