import { NextResponse } from 'next/server';

export function middleware( req ) {
  console.log({ req: req.nextUrl });

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path',
    '/api/entries/:path'
  ]
}
