'use client';

import { useTransition } from "react";
import { createLike } from "../action";

export default function LikeButton() {
    const [pending, startTransition] = useTransition();
    async function handleLike() {
        startTransition(async () => {
            await createLike();
        });
    }

    return (
        <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            {pending ? 'Liking...' : 'Like'}
        </button>
    );
}