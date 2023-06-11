'use client';

import { User } from "@prisma/client";
import { useForm } from "react-hook-form";

type TForm = {
    name: string;
    bio: string;
    age: number;
    image: string;
};

type TProps = {
    user: User;
};

export function UserForm({ user }: TProps) {
    const { register, handleSubmit } = useForm<TForm>({
        defaultValues: {
            age: user.age || 18,
            bio: user.bio || '',
            image: user.image || '',
            name: user.name || '',
        }
    });
    const onSubmit = async (data: TForm) => {
        await fetch('/api/user', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
                <label htmlFor="name">Name</label>
                <input {...register("name", { required: true })} className="text-black" type="text" name="name" />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="bio">Bio</label>
                <textarea {...register("bio")} defaultValue={user.bio || ''} name="bio"
                    className="border border-gray-300 p-2 rounded-md text-black"
                    rows={10}
                    cols={50}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="age">Age</label>
                <input {...register("age", { min: 18, max: 100 })} className="text-black" defaultValue={user.age || 0} type="number" name="age" />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="image">Image</label>
                <input {...register("image", { min: 18, max: 100 })} className="text-black" type="string" name="image" />
            </div>
            <div className="flex flex-col mb-4">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}