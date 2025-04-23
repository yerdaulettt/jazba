export interface User {
    username: string;
    name: string;
    bio: string;
}

export interface Post {
    id: number;
    user: string;
    tag_id: number;
    title: string;
    body: string;
    published_date: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Comment {
    id: number;
    post_id: number;
    user: string;
    body: string;
    published_date: string;
}

export interface Token {
    refresh: string;
    access: string;
}