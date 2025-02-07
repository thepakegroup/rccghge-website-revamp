import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { EXTERNAL_MINISTRY_URLS } from "@/lib/constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  
  if (pathname.startsWith("/ourMinistries/Ministry/men-s-ministry")) {
    return NextResponse.redirect(EXTERNAL_MINISTRY_URLS.Men);
  } else if (
    pathname.startsWith("/ourMinistries/Ministry/young-adult-ministry")
  ) {
    return NextResponse.redirect(EXTERNAL_MINISTRY_URLS.Youth);
  }
}

export const config = {
  matcher: [
    "/ourMinistries/Ministry/men-s-ministry",
    "/ourMinistries/Ministry/young-adult-ministry",
  ],
};
