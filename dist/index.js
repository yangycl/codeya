"use strict";
/// <reference types="jquery" />
function run() {
    var _a, _b, _c;
    let html = (_a = $("#html").val()) !== null && _a !== void 0 ? _a : "";
    let js = (_b = $("#js").val()) !== null && _b !== void 0 ? _b : "";
    var css = (_c = $("#css").val()) !== null && _c !== void 0 ? _c : "";
    if (!html)
        throw new Error("HTML is undefined");
    if (!js)
        throw new Error("JS is undefined");
    if (!css)
        throw new Error("CSS is undefined");
    // 加入 CSS 到 head
    $("head").append("<style id='dynamic-style'>" + css + "</style>");
    // 再插入 HTML 到 body
    $("body").append(html);
    // 最後執行 JS（這樣 JS 能操作剛剛放進來的 DOM）
    eval(js);
}
