from rest_framework import serializers

from guess_app.models import Link


class LinkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = {
            'id',
            'uuid',
            'author',
            'receiver'
        }
