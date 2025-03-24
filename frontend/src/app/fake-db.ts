import { Post, Tag, Comment, User } from "./models";

export const POSTS: Post[] = [
    {
        'id': 1,
        'user': 'superman',
        'tag_id': 17,
        'title': 'Title 1',
        'body': 'Some text 1',
        'published_date': '17 July, 2012'
    },
    {
        'id': 2,
        'user': 'batman',
        'tag_id': 14,
        'title': 'Title 2',
        'body': 'Some text 2',
        'published_date': '10 May, 2001'
    },
    {
        'id': 3,
        'user': 'ironman',
        'tag_id': 28,
        'title': 'Title 3',
        'body': 'Some text 3',
        'published_date': '26 April, 2020'
    },
    {
        'id': 4,
        'user': 'spiderman',
        'tag_id': 51,
        'title': 'Title 4',
        'body': 'Some text 4',
        'published_date': '1 March, 2007'
    },
]

export const TAGS: Tag[] = [
    {
        'id': 17,
        'name': 'DIY'
    },
    {
        'id': 14,
        'name': 'News'
    },
    {
        'id': 28,
        'name': 'TV'
    },
    {
        'id': 51,
        'name': 'Hero'
    },
]

export const COMMENTS: Comment[] = [
    {
        'id': 1,
        'post_id': 1,
        'user': 'batman',
        'body': 'Cool!',
        'published_date': '18 July, 2019'
    },
    {
        'id': 2,
        'post_id': 1,
        'user': 'ironman',
        'body': 'Not bad',
        'published_date': '19 July, 2019'
    },
    {
        'id': 3,
        'post_id': 1,
        'user': 'spiderman',
        'body': 'Great!',
        'published_date': '20 July, 2019'
    },
]

export const USER: User = {
    'username': 'superman',
    'name': 'Superman',
    'bio': 'Hero who can fly!'
}