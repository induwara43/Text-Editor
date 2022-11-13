function textbold() {
    document.execCommand("bold");
}
function textunderline() {
    document.execCommand("underline");
}
function textitalic() {
    document.execCommand("italic");
}
function textcolor() {
    let pickedcolor = document.getElementById("colorpick").value
    document.execCommand("forecolor", true, pickedcolor);
}
function textleft() {
    document.execCommand("Justifyleft", false, null);
}
function textcenter() {
    document.execCommand("JustifyCenter");
}
function textright() {
    document.execCommand("JustifyRight");
}
function textjustify() {
    document.execCommand("JustifyFull");
}
function redo() {
    document.execCommand("redo");
}
function undo() {
    document.execCommand("undo");
}
