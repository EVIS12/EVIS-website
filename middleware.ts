import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  //calculate some analytics

  if (request.nextUrl.pathname === '/') {
    const res = await fetch(
      'https://server.evinnovationsummit.com/api/v1/analysis/home-views/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: 1 }),
      }
    );
  } else if (request.nextUrl.pathname.startsWith('/exhibition')) {
    const res = await fetch(
      'https://server.evinnovationsummit.com/api/v1/analysis/exhibition-views/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: 1 }),
      }
    );
  } else if (request.nextUrl.pathname.startsWith('/register')) {
    const res = await fetch(
      'https://server.evinnovationsummit.com/api/v1/analysis/registration-views/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: 1 }),
      }
    );
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
      default-src 'self' www.youtube.com server.evinnovationsummit.com api.ipify.org ipinfo.io www.googletagmanager.com;
      script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com https: http:;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data:;
      font-src 'self' fonts.gstatic.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      block-all-mixed-content;
      upgrade-insecure-requests;
  `;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  return response;
}
