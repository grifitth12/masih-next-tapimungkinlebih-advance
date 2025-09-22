'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold text-red-600 mb-4">A global error occurred!</h2>
            <p className="mb-4 text-center">An unexpected error has occurred. Please try again later.</p>
            <p className="mb-4 text-center text-sm text-gray-500">
              {error.message}
            </p>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Try again
            </button>
        </div>
      </body>
    </html>
  )
}