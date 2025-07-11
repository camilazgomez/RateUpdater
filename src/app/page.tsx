import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("isLoggedIn");

  if (!isLoggedIn) {
    redirect("/login");
  }

  redirect("/updater");
}
