import getSettings from "../queris/getSetting";

export default async function FooterYes() {
    const settings = await getSettings(); 
  return (
    <footer className="border-t border-gray-200 mt-4 py-4 ">
      <div className="container mx-auto px-4 py-2 space-y-2">
        <p className="text-center text-gray-500 text-sm ">
          Copyright &copy; {new Date().getFullYear()} {settings.siteName}
        </p>
        <p className="text-center text-gray-500 text-sm">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
