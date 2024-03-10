// deletes all global properties
(() => {
    const defaultWindowKeys = window.navigator.userAgent.toLowerCase().includes("chrome") ? ["window", "self", "document", "name", "location", "customElements", "history", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "frames", "length", "top", "opener", "parent", "frameElement", "navigator", "origin", "external", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "visualViewport", "screenX", "screenY", "outerWidth", "outerHeight", "devicePixelRatio", "clientInformation", "screenLeft", "screenTop", "defaultStatus", "defaultstatus", "styleMedia", "onsearch", "isSecureContext", "performance", "onappinstalled", "onbeforeinstallprompt", "crypto", "indexedDB", "webkitStorageInfo", "sessionStorage", "localStorage", "onbeforexrselect", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "alert", "atob", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "fetch", "find", "focus", "getComputedStyle", "getSelection", "matchMedia", "moveBy", "moveTo", "open", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents", "reportError", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollTo", "setInterval", "setTimeout", "stop", "structuredClone", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", "chrome", "caches", "cookieStore", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "oncontextlost", "oncontextrestored", "getScreenDetails", "showDirectoryPicker", "showOpenFilePicker", "showSaveFilePicker", "originAgentCluster", "trustedTypes", "speechSynthesis", "onpointerrawupdate", "crossOriginIsolated", "scheduler", "openDatabase", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "getAddedWindowValues"] : ["close", "stop", "focus", "blur", "open", "alert", "confirm", "prompt", "print", "postMessage", "captureEvents", "releaseEvents", "getSelection", "getComputedStyle", "matchMedia", "moveTo", "moveBy", "resizeTo", "resizeBy", "scroll", "scrollTo", "scrollBy", "getDefaultComputedStyle", "scrollByLines", "scrollByPages", "sizeToContent", "updateCommands", "find", "dump", "setResizable", "requestIdleCallback", "cancelIdleCallback", "requestAnimationFrame", "cancelAnimationFrame", "reportError", "btoa", "atob", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "queueMicrotask", "createImageBitmap", "structuredClone", "fetch", "self", "name", "history", "customElements", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "event", "frames", "length", "opener", "parent", "frameElement", "navigator", "clientInformation", "external", "applicationCache", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "screenLeft", "screenTop", "screenX", "screenY", "outerWidth", "outerHeight", "performance", "mozInnerScreenX", "mozInnerScreenY", "devicePixelRatio", "scrollMaxX", "scrollMaxY", "fullScreen", "ondevicemotion", "ondeviceorientation", "onabsolutedeviceorientation", "InstallTrigger", "sidebar", "visualViewport", "crypto", "onabort", "onblur", "onfocus", "onauxclick", "onbeforeinput", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onwheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onselectstart", "onselectionchange", "ontoggle", "onpointercancel", "onpointerdown", "onpointerup", "onpointermove", "onpointerout", "onpointerover", "onpointerenter", "onpointerleave", "ongotpointercapture", "onlostpointercapture", "onmozfullscreenchange", "onmozfullscreenerror", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "u2f", "onerror", "speechSynthesis", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "ongamepadconnected", "ongamepaddisconnected", "localStorage", "origin", "crossOriginIsolated", "isSecureContext", "indexedDB", "caches", "sessionStorage", "window", "document", "location", "top", "ASRouterMessage", "ASRouterAddParentListener", "ASRouterRemoveParentListener", "RPMSendAsyncMessage", "RPMAddMessageListener", "RPMRemoveMessageListener", "ContentSearchUIController", "ContentSearchHandoffUIController", "React", "ReactDOM", "PropTypes", "ReactTransitionGroup", "Redux", "ReactRedux", "NewtabRenderUtils", "getAddedWindowValues"];
    let added = Object.fromEntries(Object.keys(window)
        .filter(key => !defaultWindowKeys.includes(key))
        .map(key => [key, window[key]]));
    Object.keys(added).forEach(key=>{
        delete window[key]
    })
})();

// refreshes the entire page
(async ()=>{
    function isValidHttpUrl(string) {
        let url;
      
        try {
            url = new URL(string);
        } catch (_) {
            return false;  
        }
    
        return url.protocol === "http:" || url.protocol === "https:";
    }

    let thisRawPage = await (await fetch(document.location.pathname)).text()
    let thisPage = document.implementation.createHTMLDocument(document.location.href);
    thisPage.write(thisRawPage);
    
    let scriptsToLoad = [];
    for (const script of thisPage.scripts) {
        if (script.src) {
            scriptsToLoad.push(script.src);
        } else {
            scriptsToLoad.push(script.innerText)
        }
    }
    
    let links = document.getElementsByTagName("link");
    for (const link of links) {
        if (link.href.includes('.js')) {
            scriptsToLoad.push(link.href);
        }
    }
    
    document.write(thisRawPage);
    
    for (const script of scriptsToLoad) {
            if (isValidHttpUrl(script)) {
                try {
                    eval(await (await fetch(script)).text());
                } catch (e) {}
            } else {
                try {
                    eval(script)
                } catch (e) {}
            }
    }
})();
