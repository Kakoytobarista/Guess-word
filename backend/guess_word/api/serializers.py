from rest_framework import serializers

from backend.guess_word.guess_app.models import Link


class LinkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = {
            'id',
            'uuid',
            'author',
            'receiver'
        }
