import random

from django_filters.rest_framework import DjangoFilterBackend
from ratelimit.decorators import ratelimit
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from django.utils.decorators import method_decorator


from guess_app.models import Word
from api.serializers import WordSerializers


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializers
    filter_backends = [DjangoFilterBackend, ]
    filterset_fields = ['word', 'uuid']

    @method_decorator(ratelimit(key='ip', rate='1/m', method='POST'))
    def post(self, request):
        pass

    @action(methods=['get'],
            detail=False, )
    def random_word(self, *args):
        """Method for getting random word"""
        random_word = str((random.choice(Word.objects.all())))
        return Response(random_word)
