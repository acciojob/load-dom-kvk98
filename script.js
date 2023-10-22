//your JS code here. If required.
function onloadFunc() {
	body.innerText = "DOM load success";
}
let body = document.getElementsByTagName("body")[0];
body.onload = onloadFunc();