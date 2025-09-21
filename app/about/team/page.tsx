import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Team Page',
    description: 'This is the team page of the application.',
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold ">Our Team</h1>
      <p className="mt-4 ">
        Meet the talented individuals behind our success.
      </p>
    </div>
  );
}
