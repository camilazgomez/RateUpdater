"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <header className="w-full border-b bg-white border-gray-200 py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
        <RocketLaunchIcon className="h-6 w-6 text-indigo-400" />
        <span>Rate Updater</span>
      </h1>
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-indigo-400"
        >
          Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default Header;