from django.urls import include, path
from rest_framework import routers
from ratelimit.decorators import ratelimit

from api.views import WordViewSet


router = routers.DefaultRouter()
router.register('word', ratelimit(key='ip', method='POST', rate='1/m')(WordViewSet, basename='word'))


urlpatterns = (
    path('', include(router.urls)),
)
