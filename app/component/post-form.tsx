'use client';
import { FormEvent } from "react";

export const PostForm = () => {
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const content = formData.get("content");
        
        await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-between p-4 sm:p-24">
                <textarea
                    name="content"
                    className="w-full h-24 p-2 border border-gray-300 rounded-md text-black"
                    placeholder="What's on your mind?"                     
                 />
                <button
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    type="submit"
                >
                    Post
                </button>
            </form>
        </div>
    );
}