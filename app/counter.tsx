"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
            <p className="mt-4">Current Count: {count}</p>
        </>
    );
}
