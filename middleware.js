import { NextResponse } from "next/server";

const privateRoutes = ["/user", "/super-admin", "/admin", "/cart"];

export async function middleware(request) {
  const pathName = request.nextUrl.pathname;

  // Redirect from "/" route to the "/tasks" route
  if (pathName === "/") {
    return NextResponse.redirect(new URL("/tasks", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
