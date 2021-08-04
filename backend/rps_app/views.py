from rps_app.models import rpsGame
from rps_app.serializers import rpsGameSerializer
from rest_framework import viewsets

class rpsGameViewSet(viewsets.ModelViewSet):
    queryset = rpsGame.objects.all()
    serializer_class = rpsGameSerializer
    
