from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import user, comment, post, tag

urlpatterns = [
    path('signup/', user.signup),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('whoiam/', user.whoiam),

    path('posts/', post.PostList.as_view()),
    path('posts/<int:id>/', post.post_detail),

    path('<username>/', user.get_user),
    path('<username>/posts/', user.user_posts),
    path('posts/<int:id>/comments/', comment.post_comments),

    path('tags/', tag.TagList.as_view()),
    path('tags/<int:id>/posts/', tag.tag_posts),
]