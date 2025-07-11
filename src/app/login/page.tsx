"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    document.cookie = "isLoggedIn=true; path=/";
    if (isLoggedIn) {
      router.push("/updater");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
      router.push("/updater");
    } else {
      setError(data.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
         <div className="w-1/2 bg-indigo-50 flex items-center justify-center">
          <div className="flex items-center justify-center border border-indigo-300 rounded-full p-6">
            <RocketLaunchIcon className="text-indigo-400 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-white justify-center items-center px-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ingresa a Rate Updater</h2>
          <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder = "Email" className="placeholder-gray-300 text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={email} onChange={(e) => {setEmail(e.target.value);
                                                setError("")
                                                }}                         
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input type="password" placeholder = "Tu Contraseña" className="placeholder-gray-300 text-black mt-1 block w-full border border-gray-300 rounded-md p-2" 
                value={password} onChange={(e) => {setPassword(e.target.value); setError("")}}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 font-medium text-center">{error}</p>
            )}
            <button type="submit" className="w-full bg-indigo-500 font-inter text-white text-lg font-bold py-4 px-4 rounded-xl hover:bg-indigo-400">
              Ingresar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
