/// <reference types="jquery" />
function run():void{
    let html = ($("#html") as JQuery<HTMLTextAreaElement>).val();
    let js = ($("#js") as JQuery<HTMLTextAreaElement>).val();
    var css =  ($("#css")as JQuery<HTMLTextAreaElement>).val();
    if(!html) throw new Error("HTML is undefined");
    if(!js) throw new Error("JS is undefined");
    if(!css) throw new Error("CSS is undefined");
    // 加入 CSS 到 head
    $("head").append("<style id='dynamic-style'>" + css + "</style>");

    // 再插入 HTML 到 body
    $("body").append(html);

    // 最後執行 JS（這樣 JS 能操作剛剛放進來的 DOM）
    eval(js);
}