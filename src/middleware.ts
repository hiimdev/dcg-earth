import { NextResponse, type NextRequest } from 'next/server';
import axios from 'axios';

import { API_IP_INFO_URL, USER_COOKIES } from './utils/const';

export interface IIpInfoResponse {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
  readme: string;
}

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse?.next();

    const { data: location } = await axios<IIpInfoResponse>({
      url: API_IP_INFO_URL,
      method: 'GET',
    });

    response?.cookies?.set(USER_COOKIES.ip, location?.ip);

    response?.cookies?.set(USER_COOKIES.countryCode, location?.country);

    // retrieve the HTTP "Origin" header
    // from the incoming request
    request.headers.get('origin');

    // if the origin is an allowed one,
    // add it to the 'Access-Control-Allow-Origin' header
    response.headers.append('Access-Control-Allow-Origin', '*');

    // add the remaining CORS headers to the response
    response.headers.append('Access-Control-Allow-Credentials', 'true');
    response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    response.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    const basicAuth = request.headers.get('authorization');
    const url = request.nextUrl;
    // Bypass the basic auth on a certain env variable
    if (process.env.BASIC_AUTH === 'true') {
      if (!basicAuth) {
        url.pathname = '/api/basic-auth';
        return NextResponse.rewrite(url);
      }

      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.BASIC_AUTH_USERNAME;
      const validPassWord = process.env.BASIC_AUTH_PASSWORD;

      if (user !== validUser && pwd !== validPassWord) {
        url.pathname = '/api/basic-auth';
        return NextResponse.rewrite(url);
      }
    }

    return response;
  } catch (error) {
    const response = NextResponse?.next();
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|og-image.jpg|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
