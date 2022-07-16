from django.urls import include, path
from rest_framework import routers

from api.views import WordViewSet


router = routers.DefaultRouter()
router.register('word', WordViewSet, basename='word')
# router.register('get_random_word', )


urlpatterns = (
    path('', include(router.urls)),
)
