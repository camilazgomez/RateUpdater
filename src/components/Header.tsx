import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="w-full border-b bg-white border-gray-200 py-4">
      <h1 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
        <RocketLaunchIcon className="h-6 w-6 text-indigo-400" />
        <span>Rate Updater</span>
      </h1>
    </header>
  );
};

export default Header;