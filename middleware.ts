import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedIPs = ['YOUR_IP_ADDRESS']; // Tambahkan IP Anda dan localhost

export function middleware(req: NextRequest) {

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Terapkan ke semua halaman
};
