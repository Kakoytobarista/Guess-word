import re
from typing import Union

from django.core.exceptions import ValidationError


def validate_length(value: Union[str, int], length: int = 1):
    """Validator for check length of string no less 2"""
    if len(str(value)) < length:
        raise ValidationError(u'%s is not the correct length' % value)


def validate_is_digits_inside(value: Union[str, int]):
    """Validator for check is digit present inside"""
    if not value.isalpha():
        raise ValidationError(u'%s you need using only letters' % value)


def validate_is_latin_letters(value: Union[str, int]):
    """Validator for check is latin letters"""
    if re.search(r'[^a-zA-Zа]', value):
        raise ValidationError(u'%s you need using only latin letters' % value)
