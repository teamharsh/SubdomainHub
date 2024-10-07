import { NextResponse } from "next/server";
import subdomains from "./subdomains.json";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: Request) {
  const url = new URL(req.url);
  const hostname = req.headers.get("host") || "";

  const allowedDomains = ["localhost:3000"];

  const isAllowedDomain = allowedDomains.some((domain) =>
    hostname.includes(domain)
  );

  const subdomain = hostname.split(".")[0];

  if (isAllowedDomain && hostname === "localhost:3000") {
    return NextResponse.next();
  }

  const subdomainData = subdomains.find((d) => d.subdomain === subdomain);

  if (subdomainData) {
    return NextResponse.rewrite(
      new URL(`/${subdomain}${url.pathname}`, req.url)
    );
  }

  return new Response("Page Create to Kar bhai", { status: 404 });
}
