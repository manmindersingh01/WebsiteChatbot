export { auth as middleware } from "../lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "../lib/auth";
export async function middlewar(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
