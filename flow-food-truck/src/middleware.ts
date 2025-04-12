import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Si l'URL se termine par un slash mais n'est pas la racine /, rediriger sans le slash
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  // Traitement des anciennes routes ou personnalisation de comportement
  if (url.pathname.startsWith('/old-route')) {
    url.pathname = url.pathname.replace('/old-route', '/nouvelle-route');
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  // Routes sur lesquelles le middleware sera appliqué
  matcher: [
    /*
     * Correspond à toutes les routes sauf:
     * 1. /_next/ (routes système Next.js)
     * 2. /_vercel/ (routes système Vercel)
     * 3. /api/ (API routes)
     * 4. /_static/ (dossier statique si utilisé)
     * 5. /favicon.ico, /robots.txt, etc.
     */
    '/((?!api|_next|_vercel|_static|favicon.ico|robots.txt).*)',
  ],
}; 