// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const signInPath = "/sign-in";
// const appPath = "/user";

export function proxy(request: NextRequest) {
  // const hasAccessToken = request.cookies.has("accessToken");
  // const { pathname } = request.nextUrl;
  //
  // if (pathname.startsWith(appPath) && !hasAccessToken) {
  //   const signInUrl = new URL(signInPath, request.url);
  //   signInUrl.searchParams.set("callbackUrl", pathname);
  //
  //   return NextResponse.redirect(signInUrl);
  // }
  //
  // if (
  //   (pathname === signInPath || pathname === "/sign-up") &&
  //   hasAccessToken
  // ) {
  //   return NextResponse.redirect(new URL(appPath, request.url));
  // }
  //
  // return NextResponse.next();
}

// export const config = {
//   matcher: ["/user/:path*", "/sign-in/:path*", "/sign-up/:path*"],
// };
