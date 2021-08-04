from rest_framework import serializers
from rps_app.models import rpsGame
from auth_app.serializers import UserSerializer

class rpsGameSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = rpsGame
        fields = ['id', 'user', 'gameWon', 'userThrow', 'computerThrow']