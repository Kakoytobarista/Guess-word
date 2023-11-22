import uuid as uuid

from django.db import models

from utils.validators import validate_is_digits_inside, validate_is_latin_letters, validate_length
from utils.handlers import WordEncodingUtility

from dotenv import load_dotenv


load_dotenv()


class Word(models.Model):
    word = models.CharField(verbose_name='word',
                            max_length=256,
                            unique=False,
                            validators=[validate_length, validate_is_digits_inside,
                                        validate_is_latin_letters])
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    def save(self, *args, **kwargs):
        self.word = WordEncodingUtility.encode(self.word)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.word
