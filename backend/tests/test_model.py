from django.test import TestCase

from guess_app.guess_app.models import Word


class PostModelTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.word = Word.objects.create(word='word')

    def test_check_word_creating_correct(self):
        """Check that object of model word creating is correct"""
        self.assertIn(self.word.__str__(), self.word.word)

    def test_check_word_have_is_minimum_1_length(self):
        """Check that object of model word"""
        word_with_min_value = Word.objects.create(word='w')
        self.assertIn(word_with_min_value.__str__(), word_with_min_value.word)

    def test_check_uid_creating_automatically(self):
        """Check uid create automatically"""
        self.assertTrue(self.word.uuid)
