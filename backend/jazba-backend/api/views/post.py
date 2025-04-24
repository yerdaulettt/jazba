from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Post
from api.serializers import PostSerializer
from django.shortcuts import get_list_or_404, get_object_or_404

class PostList(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        posts = get_list_or_404(Post)

        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data)
    
    def post(self, request):
        serializer = PostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([permissions.IsAuthenticated])
def post_detail(request, id):
    post = get_object_or_404(Post, id=id)

    if request.method == 'GET':
        serializer = PostSerializer(post)

        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)