import { NextRequest, NextResponse } from 'next/server'

const ACCESS_COOKIE = 'fm_portfolio_access'
const ACCESS_PARAM = 'access'

const TOKEN_HASH =
  process.env.PORTFOLIO_ACCESS_TOKEN_HASH ||
  '14ffca2d36a75e7c53df754f377b6ebb0fcb8ae04ea21c255d3fca4195ca3b36'

const PUBLIC_PATHS = [
  '/access-required',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
]

async function sha256(value: string) {
  const data = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', data)

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function isPublicPath(pathname: string) {
  return (
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml)$/)
  )
}

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  if (isPublicPath(pathname)) {
    return NextResponse.next()
  }

  const existingAccess = request.cookies.get(ACCESS_COOKIE)?.value

  if (existingAccess === TOKEN_HASH) {
    return NextResponse.next()
  }

  const suppliedToken = searchParams.get(ACCESS_PARAM)

  if (suppliedToken) {
    const suppliedHash = await sha256(suppliedToken)

    if (suppliedHash === TOKEN_HASH) {
      const cleanUrl = request.nextUrl.clone()
      cleanUrl.searchParams.delete(ACCESS_PARAM)

      const response = NextResponse.redirect(cleanUrl)

      response.cookies.set(ACCESS_COOKIE, TOKEN_HASH, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 14,
        path: '/',
      })

      response.headers.set('X-Robots-Tag', 'noindex, nofollow')

      return response
    }
  }

  const blockedUrl = request.nextUrl.clone()
  blockedUrl.pathname = '/access-required'
  blockedUrl.search = ''

  return NextResponse.rewrite(blockedUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
