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

    def clean(self):
        encode_object = DecodeEncodeObject()
        if self.word:
            self.word = encode_object(self.word)

    def __str__(self):
        return self.word
