import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (!host.startsWith("www.")) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.hostname = siteConfig.domain;
  redirectUrl.protocol = "https:";
  redirectUrl.port = "";

  return NextResponse.redirect(redirectUrl, 308);
}
