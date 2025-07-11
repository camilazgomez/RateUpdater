"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Editor tasas en vivo</h3>
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