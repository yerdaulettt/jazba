from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = '__all__'

class SiteUserSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.SiteUser
        fields = '__all__'

class CommentSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    post = serializers.PrimaryKeyRelatedField(queryset=models.Post.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=models.SiteUser.objects.all())
    body = serializers.CharField()
    published_date = serializers.DateField()

    def create(self, validated_data):
        return models.Comment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.post = validated_data.get('post', instance.post)
        instance.user = validated_data.get('user', instance.user)
        instance.body = validated_data.get('body', instance.body)
        instance.published_date = validated_data.get('published_date', instance.published_date)
        instance.save()
        return instance

class TagSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=250)

    def create(self, validated_data):
        return models.Tag.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance