import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'This is the about page of the application.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold ">About Page</h1>
      <p className="mt-4">
        This is the about page where you can learn more about our application.
      </p>
    </div>
  );
}
