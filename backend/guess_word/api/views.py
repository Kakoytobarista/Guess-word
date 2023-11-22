from typing import Any, List

import random

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie

from guess_app.models import Word
from api.serializers import WordSerializers

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class WordViewSet(viewsets.ModelViewSet):
    queryset: List[Word] = Word.objects.all()
    serializer_class: Any = WordSerializers
    filter_backends: List[Any] = [DjangoFilterBackend, ]
    filterset_fields: List[str] = ['word', 'uuid']

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(8))
    @action(
        methods=['get'],
        detail=False,
    )
    def random_word(self, *args: Any) -> Response:
        """
        Method for getting a random word.

        Parameters:
        - args: Additional arguments.

        Returns:
        - Response: Response object containing the random word.
        """
        random_word: str = str(random.choice(Word.objects.all()))
        return Response(random_word)
