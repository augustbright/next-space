'use client'
import { useState } from "react";

type TProps = {
    targetUserId: string;
    isFollowing: boolean;
}

export const FollowButton = ({ targetUserId, isFollowing }: TProps) => {
    const [isFollowingState, setIsFollowingState] = useState(isFollowing);
    const [isLoading, setIsLoading] = useState(false);

    const follow = async () => {
        setIsLoading(true);
        await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({ targetUserId }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setIsFollowingState(true);
        setIsLoading(false);
    };
    const unfollow = async () => {
        setIsLoading(true);
        await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE'
        });
        setIsFollowingState(false);
        setIsLoading(false);
    };

    if (isLoading) {
        return <button disabled>...</button>
    }

    if (!isFollowingState) {
        return <button onClick={() => follow()}>Follow</button>
    }
    return <button onClick={() => unfollow()}>Unfollow</button>
};