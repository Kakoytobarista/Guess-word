import random

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action

from guess_app.models import Word
from api.serializers import WordSerializers
from rest_framework.filters import SearchFilter
from rest_framework.response import Response


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializers
    filter_backends = [DjangoFilterBackend, ]
    filterset_fields = ['word', 'uuid']

    @action(methods=['get'],
            detail=False, )
    def random_word(self, *args):
        """Method for getting random word"""
        random_word = str((random.choice(Word.objects.all())))
        return Response(random_word)
