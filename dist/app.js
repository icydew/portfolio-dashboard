/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// styles
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:400,700);", ""]);

	// module
	exports.push([module.id, "/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */\nhtml, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton, input, select, textarea {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n* {\n  box-sizing: inherit; }\n\n*:before, *:after {\n  box-sizing: inherit; }\n\nimg, embed, object, audio, video {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd, th {\n  padding: 0;\n  text-align: left; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  font: 14px 'Roboto', sans-serif;\n  min-height: 100%; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Roboto Slab', serif; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1200px; }\n\n.full-section {\n  padding: 40px; }\n\n.avatar {\n  border-radius: 70px;\n  max-height: 70px; }\n\n.button, .section-content .btn .buttons .button-open, .section-content .btn .buttons .button-add, .section-content .btn .buttons .button-delete, .section-content .after-table div a .button-edit, .section-content .after-table div a .button-delete, .section-statistics .show .button-show {\n  padding: 3px 6px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  color: #ffffff;\n  font-weight: 600;\n  text-align: center;\n  margin-right: 30px; }\n\n.button_circle {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px; }\n\n.header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  font-weight: bold;\n  font-size: 1.2rem;\n  height: 130px;\n  color: #ffffff; }\n  .header .menu {\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n    width: 140px;\n    text-align: center;\n    background: #5DC560; }\n    .header .menu svg {\n      width: 40px;\n      height: 40px;\n      fill: #ffffff; }\n  .header .navigation {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: center;\n        align-items: center;\n    background: #3b4557; }\n    .header .navigation > a {\n      text-decoration: none;\n      color: #ffffff;\n      margin-left: 80px; }\n    .header .navigation .status {\n      margin-left: 50px; }\n      .header .navigation .status svg {\n        height: 20px;\n        margin-left: 20px;\n        fill: #ffffff;\n        width: 20px; }\n    .header .navigation .profile {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      margin-left: 20px; }\n      .header .navigation .profile div {\n        margin-left: 10px; }\n        .header .navigation .profile div img {\n          width: 50px;\n          height: 50px; }\n        .header .navigation .profile div svg {\n          height: 15px;\n          width: 15px; }\n      .header .navigation .profile svg {\n        fill: #ffffff; }\n\n@media (max-width: 960px) {\n  .header {\n    font-size: 1rem;\n    height: auto; }\n    .header .menu {\n      display: none; }\n    .header .navigation {\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n      .header .navigation > a {\n        margin-left: 15px; }\n      .header .navigation .status {\n        margin-left: 20px; }\n        .header .navigation .status svg {\n          margin-left: 20px; }\n      .header .navigation .profile {\n        margin-left: 20px; }\n        .header .navigation .profile div {\n          margin-left: 10px; } }\n\n@media (max-width: 480px) {\n  .header {\n    width: 100%;\n    height: auto;\n    font-size: 0.8rem;\n    font-weight: normal;\n    -ms-flex-align: center;\n        align-items: center; }\n    .header .menu {\n      display: none; }\n    .header .navigation {\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n      .header .navigation > a {\n        margin-left: 0;\n        margin-right: 0;\n        text-align: center;\n        -ms-flex-order: 3;\n            order: 3; }\n      .header .navigation .status {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        margin-left: 0;\n        -ms-flex-order: 1;\n            order: 1;\n        width: 50%;\n        padding-bottom: 10px; }\n        .header .navigation .status svg {\n          margin-left: 0;\n          margin-right: 20px;\n          width: 15px;\n          height: 15px; }\n      .header .navigation .profile {\n        margin-left: 0;\n        -ms-flex-order: 2;\n            order: 2;\n        width: 50%;\n        padding-bottom: 10px;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n        text-align: right; }\n        .header .navigation .profile div {\n          margin-left: 0; }\n        .header .navigation .profile svg {\n          width: 10px;\n          height: 10px; }\n        .header .navigation .profile img {\n          display: none; } }\n\n.content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-positive: 1;\n      flex-grow: 1; }\n  .content .section-menu {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    width: 140px; }\n  .content .section-content {\n    -ms-flex-positive: 1;\n        flex-grow: 1; }\n  .content .section-statistics {\n    width: 450px;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n\n@media (max-width: 960px) {\n  .full-section {\n    padding: 20px; }\n  .content {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .content .section-menu {\n      -ms-flex-order: 1;\n          order: 1;\n      width: auto; }\n    .content .section-content {\n      -ms-flex-order: 2;\n          order: 2;\n      width: auto; }\n    .content .section-statistics {\n      -ms-flex-order: 3;\n          order: 3;\n      width: auto; } }\n\n@media (max-width: 480px) {\n  .full-section {\n    padding: 20px; }\n  .section-menu {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .section-menu .nav-left {\n      -ms-flex-order: 1;\n          order: 1;\n      width: auto; }\n    .section-menu .section-content {\n      -ms-flex-order: 2;\n          order: 2;\n      width: auto; }\n    .section-menu .section-statistics {\n      -ms-flex-order: 3;\n          order: 3;\n      width: auto; } }\n\n.section-menu {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  background: #f0f0f0;\n  padding-bottom: 50px; }\n  .section-menu a {\n    text-decoration: none;\n    color: #ADADAD;\n    text-align: center;\n    margin: 20px; }\n    .section-menu a svg {\n      width: 40px;\n      height: 40px;\n      fill: #adadad; }\n  .section-menu .main-menu {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1rem;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .section-menu .out {\n    margin: 0 auto;\n    text-align: center; }\n    .section-menu .out a {\n      margin: 0; }\n      .section-menu .out a p {\n        color: #E66A5D; }\n      .section-menu .out a svg {\n        fill: #E66A5D; }\n\n@media (max-width: 960px) {\n  .section-menu {\n    width: 100%;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    padding-bottom: 0;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n    .section-menu .main-menu {\n      font-size: 0.8rem;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 20px 0 20px 20px; }\n      .section-menu .main-menu a {\n        margin: 0 20px 0 0; }\n        .section-menu .main-menu a svg {\n          width: 20px;\n          height: 20px; }\n      .section-menu .main-menu a:first-child {\n        display: none; }\n    .section-menu .out {\n      margin: 20px; }\n      .section-menu .out svg {\n        width: 15px;\n        height: 15px; } }\n\n@media (max-width: 480px) {\n  .section-menu {\n    width: 100%;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    padding-bottom: 0;\n    -ms-flex-pack: center;\n        justify-content: center; }\n    .section-menu .main-menu {\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 20px 0 20px 0; }\n      .section-menu .main-menu a {\n        margin: 0 18px 0 0; }\n        .section-menu .main-menu a svg {\n          width: 15px;\n          height: 15px; }\n        .section-menu .main-menu a p {\n          display: none; }\n    .section-menu .out {\n      margin: 20px 20px 0 0; }\n      .section-menu .out p {\n        display: none; }\n      .section-menu .out svg {\n        width: 15px;\n        height: 15px; } }\n\n.section-content {\n  background: #ffffff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 50px 130px;\n  color: #97A2B2; }\n  .section-content > div {\n    padding-bottom: 20px; }\n  .section-content .name-panel {\n    text-transform: uppercase;\n    font-weight: 300; }\n  .section-content .name-system h2 {\n    font-size: 2.9rem;\n    color: #000000; }\n  .section-content .info-dashboard {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    font-size: 0.9rem; }\n    .section-content .info-dashboard > div {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      padding-right: 30px;\n      -ms-flex-align: center;\n          align-items: center; }\n      .section-content .info-dashboard > div #data-dashboard {\n        margin-left: 5px;\n        font-weight: bold; }\n      .section-content .info-dashboard > div svg {\n        fill: #adadad;\n        width: 20px;\n        height: 20px; }\n      .section-content .info-dashboard > div p {\n        margin-left: 10px; }\n    .section-content .info-dashboard .recommend {\n      color: #000000; }\n      .section-content .info-dashboard .recommend svg {\n        width: 20px;\n        height: 20px; }\n      .section-content .info-dashboard .recommend .-gold svg {\n        fill: #ffab00; }\n  .section-content .tab {\n    border-bottom: 1px solid #97A2B2;\n    padding-top: 50px;\n    padding-bottom: 20px; }\n    .section-content .tab a {\n      text-decoration: none;\n      color: #ADADAD;\n      text-transform: uppercase;\n      font-size: 1rem;\n      margin-right: 40px; }\n    .section-content .tab .active {\n      color: #000000;\n      border-bottom: 3px solid #5DC560;\n      padding-bottom: 18px; }\n  .section-content .btn {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 40px 0px; }\n    .section-content .btn .buttons {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n      .section-content .btn .buttons .button-open {\n        text-transform: none;\n        font-weight: normal;\n        color: #000000;\n        background: #DADFE6; }\n      .section-content .btn .buttons .button-add {\n        background: #5DC560; }\n      .section-content .btn .buttons .button-delete {\n        background: #E66A5D; }\n    .section-content .btn .search {\n      width: 200px;\n      border-bottom: 1px solid #ADADAD; }\n      .section-content .btn .search a {\n        color: #ADADAD;\n        text-decoration: none;\n        font-style: italic; }\n  .section-content .table table {\n    width: 100%;\n    text-transform: uppercase;\n    color: #000000;\n    /* Base for label styling */\n    /* checkbox aspect */\n    /* checked mark aspect */\n    /* checked mark aspect changes */ }\n    .section-content .table table a {\n      text-decoration: none; }\n    .section-content .table table [type=\"checkbox\"]:not(:checked),\n    .section-content .table table [type=\"checkbox\"]:checked {\n      position: absolute;\n      left: -9999px; }\n    .section-content .table table [type=\"checkbox\"]:not(:checked) + label,\n    .section-content .table table [type=\"checkbox\"]:checked + label {\n      position: relative;\n      padding-left: 25px;\n      cursor: pointer; }\n    .section-content .table table [type=\"checkbox\"]:not(:checked) + label:before,\n    .section-content .table table [type=\"checkbox\"]:checked + label:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 2px;\n      width: 17px;\n      height: 17px;\n      border: 2px solid #ADADAD;\n      background: #f8f8f8; }\n    .section-content .table table [type=\"checkbox\"]:not(:checked) + label:after,\n    .section-content .table table [type=\"checkbox\"]:checked + label:after {\n      content: '\\2228';\n      position: absolute;\n      top: 2px;\n      left: 1px;\n      font-size: 18px;\n      line-height: 0.8;\n      color: #ADADAD;\n      transition: all .2s; }\n    .section-content .table table [type=\"checkbox\"]:not(:checked) + label:after {\n      opacity: 0;\n      -ms-transform: scale(0);\n          transform: scale(0); }\n    .section-content .table table [type=\"checkbox\"]:checked + label:after {\n      opacity: 1;\n      -ms-transform: scale(1);\n          transform: scale(1); }\n    .section-content .table table td {\n      border-bottom: 1px solid #ADADAD;\n      padding: 15px 0; }\n      .section-content .table table td span {\n        color: #5DC560;\n        font-weight: 600; }\n      .section-content .table table td svg {\n        width: 18px;\n        height: 18px;\n        fill: #ADADAD;\n        margin-left: 10px; }\n      .section-content .table table td .block-tr {\n        fill: #E66A5D; }\n    .section-content .table table .title {\n      color: #ADADAD; }\n      .section-content .table table .title td {\n        padding-bottom: 35px;\n        font-weight: 600; }\n        .section-content .table table .title td svg {\n          width: 10px;\n          height: 10px;\n          fill: #ADADAD; }\n  .section-content .after-table {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    border-bottom: 1px solid #97A2B2; }\n    .section-content .after-table div {\n      padding-right: 35px; }\n      .section-content .after-table div a {\n        max-height: 20px;\n        text-decoration: none;\n        color: #ADADAD; }\n        .section-content .after-table div a svg {\n          width: 20px;\n          height: 20px;\n          fill: #97A2B2;\n          margin-right: 10px; }\n        .section-content .after-table div a .button-edit {\n          margin-right: 0;\n          background: #97A2B2; }\n        .section-content .after-table div a .button-delete {\n          margin-right: 0;\n          background: #E66A5D; }\n  .section-content .pages {\n    margin: 90px auto 0;\n    border: 2px solid #5DC560;\n    border-radius: 30px;\n    padding: 8px; }\n    .section-content .pages a {\n      text-decoration: none;\n      font-size: 1.2em;\n      color: #ADADAD;\n      padding: 0 10px;\n      text-align: center;\n      vertical-align: middle; }\n      .section-content .pages a span {\n        color: #5DC560;\n        font-weight: 700; }\n\n@media (max-width: 960px) {\n  .section-content {\n    padding: 20px 25px 50px 25px; }\n    .section-content .button, .section-content .btn .buttons .button-open, .section-content .btn .buttons .button-add, .section-content .btn .buttons .button-delete, .section-content .after-table div a .button-edit, .section-content .after-table div a .button-delete, .section-content .section-statistics .show .button-show, .section-statistics .show .section-content .button-show {\n      font-size: 0.8rem;\n      padding: 5px; }\n    .section-content .pages {\n      margin-top: 40px; } }\n\n@media (max-width: 480px) {\n  .section-content {\n    width: 100%;\n    padding: 0;\n    margin: 20px; }\n    .section-content > div {\n      padding-bottom: 5px; }\n    .section-content .name-panel {\n      display: none; }\n    .section-content .name-system h2 {\n      font-size: 1.2rem; }\n    .section-content .info-dashboard {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      font-size: 0.7rem; }\n      .section-content .info-dashboard > div {\n        margin-bottom: 10px; }\n        .section-content .info-dashboard > div #data-dashboard {\n          margin-left: 5px; }\n        .section-content .info-dashboard > div svg {\n          width: 15px;\n          height: 15px; }\n    .section-content .tab {\n      padding-top: 10px;\n      padding-bottom: 10px; }\n      .section-content .tab a {\n        font-size: 0.8rem;\n        margin-right: 40px; }\n      .section-content .tab .active {\n        padding-bottom: 10px; }\n    .section-content .btn {\n      -ms-flex-direction: row;\n          flex-direction: row;\n      padding: 20px 0;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n      .section-content .btn .buttons {\n        -ms-flex-order: 2;\n            order: 2;\n        font-size: 0.55rem;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; }\n        .section-content .btn .buttons .button-open {\n          margin-right: 15px;\n          margin-bottom: 10px; }\n        .section-content .btn .buttons .button-add {\n          margin-right: 15px;\n          margin-bottom: 10px; }\n        .section-content .btn .buttons .button-delete {\n          margin-right: 0; }\n      .section-content .btn .search {\n        display: none; }\n    .section-content .table table {\n      width: 100%;\n      font-size: 0.6rem; }\n      .section-content .table table td {\n        padding: 5px 0; }\n        .section-content .table table td span {\n          font-weight: 600; }\n        .section-content .table table td svg {\n          width: 10px;\n          height: 10px;\n          margin-left: 5px; }\n      .section-content .table table td:nth-child(3) {\n        display: none; }\n      .section-content .table table td:nth-child(1) {\n        display: none; }\n      .section-content .table table td:nth-child(6) {\n        display: none; }\n      .section-content .table table .title {\n        font-size: 0.55rem; }\n        .section-content .table table .title td {\n          padding-bottom: 5px;\n          font-weight: 600; }\n          .section-content .table table .title td svg {\n            display: none; }\n        .section-content .table table .title td:nth-child(3) {\n          display: none; }\n        .section-content .table table .title td:nth-child(6) {\n          display: none; }\n    .section-content .after-table {\n      display: none; }\n    .section-content .pages {\n      margin: 10px auto 0;\n      padding: 5px; }\n      .section-content .pages a {\n        font-size: 0.9em;\n        padding: 0 5px;\n        line-height: 20px; } }\n\n.section-statistics {\n  width: 450px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background: #f0f0f0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 50px 90px;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1px; }\n  .section-statistics > div {\n    padding-bottom: 20px; }\n  .section-statistics h5 {\n    text-transform: uppercase;\n    font-weight: 300;\n    color: #97A2B2; }\n  .section-statistics span {\n    color: #5DC560;\n    font-size: 3.0rem;\n    font-weight: bold;\n    font-family: 'Roboto Slab', serif; }\n  .section-statistics .inventorys {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n  .section-statistics .items {\n    padding-bottom: 40px;\n    border-bottom: 1px solid #97A2B2; }\n  .section-statistics .stats {\n    padding-top: 20px; }\n    .section-statistics .stats > div {\n      padding-top: 20px; }\n    .section-statistics .stats .line {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n      .section-statistics .stats .line .value {\n        color: #5DC560;\n        font-size: 1rem;\n        font-weight: bold; }\n  .section-statistics .show .button-show {\n    color: #ffffff;\n    background: #6A51DC; }\n  .section-statistics .team {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding-top: 80px; }\n    .section-statistics .team .friends {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      padding-top: 30px;\n      -ms-flex-align: center;\n          align-items: center; }\n      .section-statistics .team .friends div img {\n        width: 50px;\n        height: 50px; }\n      .section-statistics .team .friends p {\n        padding-left: 20px; }\n      .section-statistics .team .friends .post {\n        color: #5DC560;\n        font-weight: normal;\n        font-size: 0.8rem; }\n    .section-statistics .team .new-team {\n      padding-top: 30px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      color: #5DC560; }\n      .section-statistics .team .new-team .button_circle {\n        background: #5DC560;\n        margin-right: 20px; }\n        .section-statistics .team .new-team .button_circle svg {\n          width: 20px;\n          height: 20px;\n          margin: 15px;\n          fill: #ffffff; }\n\n@media (max-width: 960px) {\n  .section-statistics {\n    padding: 25px; }\n    .section-statistics .inventorys {\n      margin: auto;\n      width: 50%; }\n    .section-statistics .items {\n      text-align: center; }\n    .section-statistics .stats {\n      width: 50%;\n      margin: auto; }\n    .section-statistics .show {\n      margin: auto; }\n      .section-statistics .show .button-show {\n        padding: 5px; }\n    .section-statistics .team {\n      padding-top: 20px;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-pack: center;\n          justify-content: center; }\n      .section-statistics .team h5 {\n        width: 100%; }\n      .section-statistics .team .friends {\n        margin-right: 30px; } }\n\n@media (max-width: 480px) {\n  .section-statistics {\n    padding: 20px 20px;\n    font-weight: 600;\n    font-size: 0.8rem; }\n    .section-statistics > div {\n      padding-bottom: 10px; }\n    .section-statistics h5 {\n      font-weight: 300; }\n    .section-statistics span {\n      font-size: 1rem; }\n    .section-statistics .items {\n      padding-bottom: 10px; }\n    .section-statistics .stats {\n      padding-top: 10px; }\n      .section-statistics .stats > div {\n        padding-top: 10px; }\n      .section-statistics .stats .line {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n        .section-statistics .stats .line .value {\n          font-size: 1rem;\n          font-weight: bold; }\n    .section-statistics .show {\n      margin: 0 auto; }\n      .section-statistics .show .button-show {\n        font-size: 0.55rem; }\n    .section-statistics .team {\n      padding-top: 20px; }\n      .section-statistics .team .friends {\n        padding-top: 10px; } }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);