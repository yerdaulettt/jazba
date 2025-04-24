export interface User {
    username: string;
    bio: string;
}

export interface Post {
    id: number;
    username: string;
    title: string;
    body: string;
    published_date: string;
    tag: number;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Comment {
    post: number;
    username: string;
    body: string;
    published_date: string;
}

export interface Token {
    refresh: string;
    access: string;
}