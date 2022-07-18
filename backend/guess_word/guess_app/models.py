import uuid as uuid

from django.db import models

from guess_app.validators import validate_length

from guess_app.validators import validate_is_digits_inside


class Word(models.Model):
    word = models.CharField(verbose_name='word',
                            max_length=13,
                            unique=False,
                            validators=[validate_length, validate_is_digits_inside])
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.word
