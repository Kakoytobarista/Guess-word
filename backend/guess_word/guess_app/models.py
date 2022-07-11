from django.db import models
from django.contrib.auth.models import User


class Link(models.Model):
    uuid = models.UUIDField(verbose_name='UUID')
    author = models.ForeignKey(to=User,
                               on_delete=models.CASCADE,
                               verbose_name='Username')
    receiver = models.CharField(verbose_name='Receiver')


