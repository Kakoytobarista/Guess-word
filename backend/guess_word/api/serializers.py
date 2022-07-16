from rest_framework import serializers
from rest_framework.fields import SerializerMethodField


from enums.word_enum import WordEnum
from guess_app.models import Word


class WordSerializers(serializers.ModelSerializer):
    link = SerializerMethodField()

    class Meta:
        model = Word
        fields = (
            'id',
            'word',
            'link',
            'uuid'
        )

    @staticmethod
    def get_link(obj):
        """Method for getting field link"""
        uuid_param = Word.objects.filter(id=obj.id)[0].uuid
        return f"{WordEnum.MAIN_URL.value}{WordEnum.UUID_PARAM.value}{uuid_param}"
