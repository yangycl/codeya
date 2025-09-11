/// <reference types="jquery" />
function run():void{
    let html = ($("#html") as any).val();
    let js = ($("#js") as any).val();
    $("body").empty();
    $("body").append(html);
    eval(js);
}