from backend_api.views import BookViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'books', views.BookViewSet, basename='book')
urlpatterns = router.urls
