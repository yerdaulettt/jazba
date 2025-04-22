from rest_framework import status
from api.models import Tag
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from api.serializers import TagSerializer, PostSerializer
from rest_framework.response import Response

class TagList(APIView):
    pass

@api_view(['GET'])
def tag_posts(request, id):
    pass