import uuid as uuid

from django.db import models


class Word(models.Model):
    word = models.CharField(verbose_name='word',
                            max_length=13,
                            min_length=1,
                            unique=False)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.word
