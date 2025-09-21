'use client';

import { CreateComment } from "../action";
import { useActionState } from "react";

const ininitialState = {
    error: '',
};

export function CommentForm() {
    const [state, formAction, pending] = useActionState(CreateComment, ininitialState);
    return (
        <form action={formAction} className="space-y-4">
            {state?.error && (
                <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                    <p className="text-red-500">{state.error}</p>
                </div>
            )}
            <textarea required name="comment" id="comment" placeholder="Add a comment..." className="w-full p-2 border rounded h-24 border-gray-300 "></textarea>
            <button type="submit" className="mt-2 p-2 bg-blue-600 text-white rounded">Submit</button>
        </form>
    );
}