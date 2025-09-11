"use strict";
/// <reference types="jquery" />
function run() {
    let html = $("#html").val();
    let js = $("#js").val();
    $("body").append(html);
    eval(js);
}
