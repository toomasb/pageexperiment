// middleware.js

import { PageExperimentMiddleware } from './components/PageExperimentMiddleware'


export default function middleware(req) {
    return PageExperimentMiddleware(req, ["experiment1"]);
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }