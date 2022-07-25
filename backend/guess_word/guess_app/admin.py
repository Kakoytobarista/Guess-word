from django.contrib import admin

from guess_app.models import Word


class WordAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'word',
        'uuid',
    )
    fields = (
        'word', 'uuid',
    )
    list_editable = (
        'word',
    )
    search_fields = (
        'word',
    )
    list_filter = (
        'word',
    )
    readonly_fields = (
        'uuid',
    )
    empty_value_display = '--empty--'


admin.site.register(Word, WordAdmin)
