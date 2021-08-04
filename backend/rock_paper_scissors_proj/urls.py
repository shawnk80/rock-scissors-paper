from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token_auth/', obtain_jwt_token),
    path('auth/', include('auth_app.urls')),
    path('rps/', include('rps_app.urls')),
]
