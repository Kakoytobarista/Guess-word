import uuid as uuid

from django.db import models

from utils.validators import validate_is_digits_inside, validate_is_latin_letters, validate_length
from utils.handlers import DecodeEncodeObject


class Word(models.Model):
    word = models.CharField(verbose_name='word',
                            max_length=13,
                            unique=False,
                            validators=[validate_length, validate_is_digits_inside,
                                        validate_is_latin_letters])
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    @classmethod
    def create(cls, word, uuid):
        encode_object = DecodeEncodeObject()
        encode_word = encode_object.encode(word)
        print(encode_word)
        print(encode_word)
        print(encode_word)
        print(encode_word)
        word = cls(word=encode_word,
                   uuid=uuid)
        # do something with the book
        return word

    def __str__(self):
        return self.word
