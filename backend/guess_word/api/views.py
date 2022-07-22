import random

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie

from guess_app.models import Word
from api.serializers import WordSerializers


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializers
    filter_backends = [DjangoFilterBackend, ]
    filterset_fields = ['word', 'uuid']

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(8*1))
    @action(methods=['get'],
            detail=False, )
    def random_word(self, *args):
        """Method for getting random word"""
        random_word = str((random.choice(Word.objects.all())))
        return Response(random_word)
