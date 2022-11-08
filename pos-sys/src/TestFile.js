// linkFTB : links front end to back end
// test_text -> string to be displayed in the tinybox (part of querytest.js)

export function linkFTB() {
    console.log("text has been linked\n");
    const test_text = "Hello world\n";
    var btn = document.getElementsByClassName("tinybox")[0];
    btn.innerHTML = test_text;
}