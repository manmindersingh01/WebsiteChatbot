import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getAuth() {
  const session = await auth();

  if (window.location.pathname === "/") {
    return session;
  }
  if (!session?.user) {
    redirect("/");
  }
  return session;
}
