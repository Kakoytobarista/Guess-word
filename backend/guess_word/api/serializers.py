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
    def get_link(obj: Word) -> str:
        """
        Method for getting the 'link' field.

        Parameters:
        - obj (Word): The Word object.

        Returns:
        - str: The generated link.
        """
        uuid_param = Word.objects.filter(id=obj.id)[0].uuid
        return f"{WordEnum.MAIN_URL.value}{WordEnum.UUID_PARAM.value}{uuid_param}"
