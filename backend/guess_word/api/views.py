import random

from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


from guess_app.models import Word
from api.serializers import WordSerializers


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


def error_404_view(request, exception):
    # we add the path to the the 404.html file
    # here. The name of our HTML file is 404.html
    return render(request, '/static/html/404.html')
