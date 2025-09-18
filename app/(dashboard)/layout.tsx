export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <header className="border-b border-green-200">
                <h1 className="text-2xl font-bold">Dashboard Layout</h1>
            </header>
            {children}
        </main>
    );
}