# zoom-redirector

## Table of Contents
- [What's it for](https://github.com/arkadiyt/zoom-redirector#whats-it-for)
- [Installation](https://github.com/arkadiyt/zoom-redirector#quick-start)
- [Changelog](https://github.com/arkadiyt/zoom-redirector#changelog)
- [Getting in touch](https://github.com/arkadiyt/zoom-redirector#getting-in-touch)

### What's it for

When joining a Zoom meeting, the "join from your browser" link is intentionally hidden. This browser extension solves this problem by transparently redirecting any meeting links to use Zoom's browser based web client.

### Installation

- Chrome: https://chrome.google.com/webstore/detail/zoom-redirector/fmaeeiocbalinknpdkjjfogehkdcbkcd
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/zoom-redirector/
- Edge: https://microsoftedge.microsoft.com/addons/detail/dkhjempaiackknhjkkaidppoepkdamen
- Opera: submission pending
- Bookmarklet: Drag <a href='javascript:"use strict";{const o=new URL(window.location),t=/^\/[js]\/(\d+)\/?$/.exec(o.pathname);if(void 0===t||void 0===t[1]);else{const e=t[0][1],n={j:"/join",s:"/start"};o.protocol="https:",o.pathname="/wc/"+encodeURIComponent(t[1])+n[e],window.location.href=o.href}}'>Zoom Redirector</a> to your bookmarks bar.

### Changelog

Please see [CHANGELOG.md](https://github.com/arkadiyt/zoom-redirector/blob/master/CHANGELOG.md).

### Getting in touch

Feel free to tweet or direct message me: [@arkadiyt](https://twitter.com/arkadiyt)
