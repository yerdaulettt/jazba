from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from api.serializers import PostSerializer
from api.models import SiteUser
from django.shortcuts import get_object_or_404
from api.models import Post
from django.contrib.auth.models import User

@api_view(['GET'])
# @permission_classes([IsAuthenticated,])
def user_posts(request, username):
    if request.method == 'GET':
        user = get_object_or_404(User, username=username)

        posts = Post.objects.raw(f'select * from api_post where username = \'{username}\'')

        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        username = request.data["username"]
        password = request.data["password"]

        if User.objects.filter(username=username).exists():
            return Response({'message': 'Such user already exists!'})
        
        u = User.objects.create_user(username=username, password=password)
        u2 = SiteUser.objects.create(user=u, bio="asd")

        return Response({'message': f'{u2} User created successfully'})