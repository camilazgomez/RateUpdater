"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UpdaterPage() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="...">
      <h1>Bienvenido a Updater!</h1>
    </div>
  );
}