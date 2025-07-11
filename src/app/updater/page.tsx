"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InformationCircleIcon } from "@heroicons/react/24/outline";


export default function UpdaterPage() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex flex-col items-center justify-center flex-1 px-4 py-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            Editor tasas en vivo
            <div className="relative group">
                <InformationCircleIcon className="h-5 w-5 text-indigo-500 cursor-pointer" />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 text-sm text-white bg-gray-800 p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Al modificar una tasa, se enviará automáticamente una notificación al correo registrado en la fila.
                </div>
            </div>
            </h3>
            <div className="w-full max-w-4xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-indigo-50 px-6 py-3 border-b border-gray-200 text-sm text-gray-700 font-medium">
                Google Sheet - Tasas actuales
            </div>
            <div className="p-4">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-inner border border-gray-200">
                <iframe
                    src={process.env.NEXT_PUBLIC_GSHEET}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </div>
        </main>
      <Footer />
    </div>
  );
}