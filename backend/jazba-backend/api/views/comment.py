from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Post
from api.serializers import PostSerializer

@api_view(['GET'])
def post_comments(request, id):
    return Response({'s': 's'})