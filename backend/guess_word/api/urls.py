from django.urls import include, path
from rest_framework import routers


from api.views import WordViewSet


router = routers.DefaultRouter()
router.register('word', WordViewSet, basename='word')


urlpatterns = (
    path('', include(router.urls)),
)
