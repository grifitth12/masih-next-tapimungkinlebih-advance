import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token");
    console.log("token: ", token);  
    if (pathname.startsWith("/admin") && !token?.value) {
       return NextResponse.redirect(new URL("/forbidden", request.url));
    }
}