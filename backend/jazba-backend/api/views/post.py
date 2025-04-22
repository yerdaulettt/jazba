from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Post
from api.serializers import PostSerializer

class PostList(APIView):
    pass

@api_view(['GET, PUT, DELETE'])
def post_detail(request, id):
    pass