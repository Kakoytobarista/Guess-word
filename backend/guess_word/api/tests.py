from django.test import TestCase

from guess_app.models import Word

# Create your tests here.


class PostModelTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.word = Word.objects.create(username='word')

    def test_post_have_correct_object_name(self):
        """Проверяем, что у модели Post строка возвращаемая
         методом __str__ берется из поля text."""

        self.assertIn(self.word.__str__(), self.word.text)

    # def test_post_have_length_str_method_with_15_symbols(self):
    #     """Проверяем, что у модели Post длина строки
    #      возвращаемая методом __str__ не более 15 символов."""
    #
    #     self.assertLess(len(self.post.__str__()), 16)
