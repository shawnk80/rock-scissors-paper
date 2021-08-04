from .views import rpsGameViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'games', rpsGameViewSet, basename='games')
urlpatterns = router.urls

