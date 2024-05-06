import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/blog"],
};
