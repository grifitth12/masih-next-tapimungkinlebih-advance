'use client';

import Link from "next/link";

export default function Nav() {
    return (
        <nav className="text-lg font-medium space-x-4">
          <Link href="/" className="mr-4">
            Home
          </Link>   
          <Link href="/about" className="mr-4">
            About
          </Link>
          <Link href="/about/team" className="mr-4">
            Team
          </Link>
          <Link href="/posts" className="mr-4">
            Posts
          </Link>
        </nav>
    );
}