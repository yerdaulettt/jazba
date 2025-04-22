from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.name}'

class SiteUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()

    def __str__(self):
        return f'{self.user.username}'
    
class Post(models.Model):
    user = models.ForeignKey(SiteUser, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    title = models.CharField(max_length=500)
    body = models.TextField()
    published_date = models.DateField()

    def __str__(self):
        return f'{self.title}'

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(SiteUser, on_delete=models.CASCADE)
    body = models.TextField()
    published_date = models.DateField()

    def __str__(self):
        return f'{self.body}'