"use strict";

// Based on zoom-redirector by arkadiyt
// https://github.com/arkadiyt/zoom-redirector

{
    const pageUrl = new URL(window.location);
    const match = /^\/[js]\/(\d+)\/?$/.exec(pageUrl.pathname);
    if (match === undefined || match[1] === undefined) {}
    else {
        const ending = match[0][1];
        const mapping = {'j': '/join', 's': '/start'};

        pageUrl.protocol = "https:";
        pageUrl.pathname = "/wc/" + encodeURIComponent(match[1]) + mapping[ending];

        window.location.href = pageUrl.href;
    }
}
