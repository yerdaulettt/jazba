from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Post
from api.serializers import CommentSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def post_comments(request, id):
    if request.method == 'GET':
        post = get_object_or_404(Post, id=id)

        comments = post.comment_set.all()

        serializer = CommentSerializer(comments, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)