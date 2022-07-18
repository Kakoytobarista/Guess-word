from django.core.exceptions import ValidationError


def validate_length(value, length=2):
    """Validator for check length of string no less 2"""
    if len(str(value)) != length:
        raise ValidationError(u'%s is not the correct length' % value)
