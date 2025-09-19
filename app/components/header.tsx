import getSettings from "../queris/getSetting";
import Nav from "./nav";

export default async function Header() {
  const settings = await getSettings();
  return (
    <header className="border-b border-gray-200 mb-4 shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center px-4 ">
        <h1 className="text-2xl font-bold">{settings.siteName}</h1>
        <Nav />
      </div>
    </header>
  );
}
