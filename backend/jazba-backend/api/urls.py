from django.urls import path

from api.views import user, comment, post, tag

urlpatterns = [
    path('posts/', post.PostList.as_view()),
    path('posts/<int:id>/', post.post_detail),

    path('<username>/posts/', user.user_posts),
    path('posts/<int:id>/comments/', comment.post_comments),

    path('tags/', tag.TagList.as_view()),
    path('tags/<int:id>/posts/', tag.tag_posts),
]