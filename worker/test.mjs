// Local verification for the bangersandmash-v2 Worker (offline: no origin
// fetch — only Worker-rendered routes are exercised; unknown paths proxy to
// bangersandmash.pages.dev and are not tested here).
import worker from './worker.js';

const checks = [];
const check = (name, ok) => { checks.push([name, ok]); console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}`); };

const res = await worker.fetch(new Request('https://bangersandmash.uk/'));
const html = await res.text();
const csp = res.headers.get('content-security-policy') ?? '';

check('home renders 200', res.status === 200);
check('references same-origin /ga4.js bootstrap', html.includes('<script src="/ga4.js"></script>'));
check('references per-site gtag loader', html.includes('gtag/js?id=G-BHGK3T9M5L'));
check('no inline gtag bootstrap remains', !html.includes('function gtag(){dataLayer.push(arguments);}</script>'));
check('exactly one </head> and one <body>', (html.match(/<\/head>/g) ?? []).length === 1 && (html.match(/<body>/g) ?? []).length === 1);
check('CSP allows googletagmanager scripts', /script-src [^;]*googletagmanager\.com/.test(csp) && !csp.includes("script-src 'none'"));
check('CSP allows GA collect endpoints', /connect-src [^;]*google-analytics\.com/.test(csp));
check('CSP still denies everything else by default', csp.includes("default-src 'self'"));

const js = await worker.fetch(new Request('https://bangersandmash.uk/ga4.js'));
const jsBody = await js.text();
check('/ga4.js serves bootstrap with per-site ID', js.status === 200 && jsBody.includes("gtag('config','G-BHGK3T9M5L')"));
check('/ga4.js serves bootstrap with roll-up ID', jsBody.includes("gtag('config','G-Z389F0DBM8W')"));
check('/ga4.js is javascript + cacheable', (js.headers.get('content-type') ?? '').includes('javascript') && /max-age=\d+/.test(js.headers.get('cache-control') ?? ''));

const robots = await worker.fetch(new Request('https://bangersandmash.uk/robots.txt'));
check('robots.txt unaffected', robots.status === 200 && (await robots.text()).includes('Sitemap:'));

// These paths are rendered by the Worker, not the Pages fallback. The 404
// must be an HTTP status, not a header named "status" on a 200 response.
for (const path of ['/recipe/__missing__', '/collections/__missing__']) {
  const missing = await worker.fetch(new Request('https://bangersandmash.uk' + path));
  check(path + ' returns a real 404', missing.status === 404);
  check(path + ' preserves security headers without a status header',
    missing.headers.get('content-security-policy') === csp && !missing.headers.has('status'));
  check(path + ' renders the not-found page', (await missing.text()).includes('<h1>Not found</h1>'));
}

const failed = checks.filter(([, ok]) => !ok).length;
console.log(`\n${checks.length - failed}/${checks.length} passed`);
process.exit(failed ? 1 : 0);
