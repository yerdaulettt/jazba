from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import User, Post
from api.serializers import PostSerializer, SiteUserSerializer

@api_view(['GET'])
def user_posts(request, username):
    return Response({'s': 's'})