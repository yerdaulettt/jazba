from rest_framework import status
from api.models import Tag
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from api.serializers import TagSerializer, PostSerializer
from rest_framework.response import Response
from django.shortcuts import get_list_or_404, get_object_or_404

class TagList(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        tag = get_list_or_404(Tag)

        serializer = TagSerializer(tag, many=True)

        return Response(serializer.data)
    
    def post(self, request):
        serializer = TagSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
def tag_posts(request, id):
    tag = get_object_or_404(Tag, id=id)

    posts = tag.post_set.all()

    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)