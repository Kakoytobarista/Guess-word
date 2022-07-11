from rest_framework import viewsets

from backend.guess_word.guess_app.models import Link
from backend.guess_word.guess_app.serializers import LinkSerializers


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializers
