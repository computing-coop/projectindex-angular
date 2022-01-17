(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody, html {\n  margin: 0;\n  padding: 0;\n  color: darkslategray;\n  font-family: sans-serif;\n  background-color: gainsboro;\n  font-size: 18px;\n}\n@media (max-width: 599px) {\n  body, html {\n    font-size: 14px;\n  }\n}\ndiv {\n  border-color: darkslategray;\n  border-style: dotted;\n  border-width: 0;\n  box-sizing: border-box;\n}\np {\n  padding: 0;\n  margin: 0;\n  border-width: 0 0 1px 0;\n  border-color: darkslategray;\n  border-style: dotted;\n}\n.lightBox {\n  z-index: 999;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: gainsboro;\n  right: 0;\n  top: 0;\n}\n.lightBox img {\n  height: auto !important;\n  width: auto !important;\n  max-width: calc(100% - 100px);\n  max-height: calc(100vh - 100px);\n  margin: 50px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@media (max-width: 599px) {\n  .lightBox img {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n  }\n}\niframe {\n  width: 65vw;\n  height: 40.625vw;\n  border-color: darkslategray;\n  border-style: dotted;\n  border-width: 0 0 1px 0;\n}\n@media (max-width: 599px) {\n  iframe {\n    width: 100vw;\n    height: 67.708vw;\n  }\n}\na {\n  color: darkslategray;\n}\na:hover {\n  font-style: italic;\n}\nblockquote {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n#scrollUpBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: darkslategray;\n}\n@media (max-width: 599px) {\n  #scrollUpBtn {\n    bottom: 10px;\n    right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2J1ZmZhbG9qdW5pb3IvRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0aW5kZXgtYW5ndWxhci9zcmMvX21peGlucy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQ05TO0VET1QsdUJBQUE7RUFDQSwyQkNQZTtFRFFmLGVBQUE7QUVESjtBREhNO0VERk47SUFRUSxlQUFBO0VFQ047QUFDRjtBRkVBO0VBQ0ksMkJDaEJTO0VEaUJULG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FFQ0o7QUZFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkMxQlM7RUQyQlQsb0JBQUE7QUVDSjtBRkVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJDckNlO0VEc0NmLFFBQUE7RUFDQSxNQUFBO0FFQ0o7QUZBSTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQ3JCRiwwRUFBQTtFQVFGLHFEQUFBO0FDaUJKO0FEN0NNO0VEb0NGO0lBT1EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUVNVjtBQUNGO0FGQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkM1RFM7RUQ2RFQsb0JBQUE7RUFDQSx1QkFBQTtBRUdKO0FENURNO0VEb0ROO0lBUVEsWUFBQTtJQUNBLGdCQUFBO0VFSU47QUFDRjtBRkRBO0VBQ0ksb0JDdkVTO0FDMkViO0FGSEk7RUFDSSxrQkFBQTtBRUtSO0FGREE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUVJSjtBRkRBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JDdEZTO0FDMEZiO0FEckZNO0VENkVOO0lBT1EsWUFBQTtJQUNBLFdBQUE7RUVLTjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ21peGlucyc7XG5cbmJvZHksIGh0bWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgQGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG5kaXYge1xuICAgIGJvcmRlci1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgIGJvcmRlci1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG59XG5cbi5saWdodEJveCB7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgICYgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtYm94c2hhZG93KDMpO1xuXG4gICAgfVxufVxuXG5pZnJhbWUge1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIGhlaWdodDogNDAuNjI1dnc7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcblxuICAgIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDY3LjcwOHZ3O1xuICAgIH1cbn1cblxuYSB7XG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxufVxuXG5ibG9ja3F1b3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbiNzY3JvbGxVcEJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG5cbiAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuIiwiJG1haW4tY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4kYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuXG5AbWl4aW4gZm9yLXNpemUoJHNpemUpIHtcbiAgICBAaWYgJHNpemUgPT0gcGhvbmUtb25seSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IHRhYmxldC1wb3J0cmFpdC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IHRhYmxldC1sYW5kc2NhcGUtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBkZXNrdG9wLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IGJpZy1kZXNrdG9wLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG4gIH1cblxuQG1peGluIG1ib3hzaGFkb3coJGRlcHRoOjEpIHtcbiAgICBAaWYgJGRlcHRoPT0xIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT0yIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT0zIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTQge1xuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT01IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgfVxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHksIGh0bWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgYm9keSwgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbmRpdiB7XG4gIGJvcmRlci1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIGJvcmRlci1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG59XG5cbi5saWdodEJveCB7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4ubGlnaHRCb3ggaW1nIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBtYXJnaW46IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAubGlnaHRCb3ggaW1nIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiA2NXZ3O1xuICBoZWlnaHQ6IDQwLjYyNXZ3O1xuICBib3JkZXItY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDY3LjcwOHZ3O1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbn1cbmE6aG92ZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4jc2Nyb2xsVXBCdG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNzY3JvbGxVcEJ0biB7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/buffalojunior/Documents/GitHub/projectindex-angular/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map