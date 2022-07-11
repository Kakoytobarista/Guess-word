from rest_framework import viewsets

from guess_app.models import Link
from api.serializers import LinkSerializers


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializers
