// middleware.js

import { PageExperimentMiddleware } from './components/PageExperimentMiddleware'


export default function middleware(req) {
    return PageExperimentMiddleware(req, ["experiment1"]);
}

export const config = {
  matcher: ['/'],
}