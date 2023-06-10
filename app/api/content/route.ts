import { NextResponse } from "next/server";

const mock = [
    {
        "id": "1",
        "title": "First steps with Next Space",
        "content": "Just signed up for Next Space, looking forward to connecting with all of you!",
        "author": "John Doe",
        "date": "2023-06-10T10:00:00Z"
    },
    {
        "id": "2",
        "title": "Hello Next Space!",
        "content": "Hello everyone! Excited to be a part of this community!",
        "author": "Jane Smith",
        "date": "2023-06-11T11:30:00Z"
    },
    {
        "id": "3",
        "title": "My first post",
        "content": "Just testing out the posting functionality on Next Space. Can't wait to share more updates!",
        "author": "Alice Johnson",
        "date": "2023-06-11T13:00:00Z"
    },
    {
        "id": "4",
        "title": "Sharing my day",
        "content": "Had a fantastic day at the park. Love the simple pleasures of life!",
        "author": "Bob Williams",
        "date": "2023-06-12T09:30:00Z"
    },
    {
        "id": "5",
        "title": "Inspiring Quote",
        "content": "Remember, the only limit is the one you set yourself!",
        "author": "Charlie Brown",
        "date": "2023-06-12T12:00:00Z"
    },
    {
        "id": "6",
        "title": "Exciting news to share",
        "content": "Just landed my dream job! Hard work really does pay off.",
        "author": "David Wilson",
        "date": "2023-06-13T08:30:00Z"
    },
    {
        "id": "7",
        "title": "Recipe recommendation",
        "content": "Tried making homemade pizza for the first time. Definitely recommend it!",
        "author": "Emma Davis",
        "date": "2023-06-13T11:00:00Z"
    },
    {
        "id": "8",
        "title": "New to Next Space",
        "content": "Joined Next Space today. Hoping to make new connections and share interesting thoughts.",
        "author": "Frank Thompson",
        "date": "2023-06-14T10:30:00Z"
    },
    {
        "id": "9",
        "title": "Book recommendation",
        "content": "Just finished reading 'The Great Gatsby'. A must-read classic!",
        "author": "Grace Taylor",
        "date": "2023-06-14T12:30:00Z"
    },
    {
        "id": "10",
        "title": "Weekend Plans",
        "content": "Planning a weekend getaway. Any recommendations for places to visit?",
        "author": "Harry Johnson",
        "date": "2023-06-15T09:00:00Z"
    }
];

export async function GET() {
    return NextResponse.json(mock);
};