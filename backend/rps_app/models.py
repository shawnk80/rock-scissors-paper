from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE

class rpsGame(models.Model):
    THROW_CHOICES = (
        ('R', 'Rock'),
        ('P', 'Paper'),
        ('S', 'Scissors')
    )

    GAME_RESULT_CHOICES = (
        ('W', 'UserWon'),
        ('L', 'UserLost'),
        ('T', 'Tie')
    )

    user = models.ForeignKey(User, on_delete=CASCADE, related_name='games')
    gameWon = models.CharField(max_length=1, choices=GAME_RESULT_CHOICES)
    userThrow = models.CharField(max_length=1, choices=THROW_CHOICES)
    computerThrow = models.CharField(max_length=1, choices=THROW_CHOICES)

    def __str__(self):
        return f'Game ID: {self.id}, Who won: {"User" if self.gameWon == "W" else "Computer" if self.gameWon == "L" else "Tie"}'


