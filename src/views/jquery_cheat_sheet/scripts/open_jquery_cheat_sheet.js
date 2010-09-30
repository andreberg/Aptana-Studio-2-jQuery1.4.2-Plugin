/*
 * Menu: jQuery > jQuery Cheat Sheet
 * Kudos: Andre Berg
 * Key: M1+M3+2
 * License: EPL 1.0
 * DOM: http://download.eclipse.org/technology/dash/update/org.eclipse.eclipsemonkey.lang.javascript
 */

// Description
//
// This is a Monkey script for Aptana Studio
//
// It creates a new internal web browser window, labels it so it may accessed later again
// assigns it the shortcut CMD+OPTION+2 on Mac and CTRL+ALT+2 on Windows
// before it can be used the webView.url must have a proper path string that indicates 
// the location of "index.html" inside of the "jquery_cheat_sheet" folder.
// Do not URLescape this path and be sure that it begins with a slash and does not end with one.

function main() {
	webView = views.getView("JQueryCheatSheetView");
	webView.showView(true);
	webView.setTitle("jQuery Cheat Sheet");
	webView.url = "/change/this/path/to/point/to/jquery_cheat_sheet/index.html";
}