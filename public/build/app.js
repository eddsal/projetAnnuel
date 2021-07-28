(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/Front/checkout.js":
/*!**********************************!*\
  !*** ./assets/Front/checkout.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var total = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#checkout-button').data('total');
console.log(total);
var stripe = Stripe('pk_test_51IrUFOIPqsC3XcMt1SFLXLTFuKXY9X3VvpLU0XIvcOPUVc36FpvWt2u7cwbk8JiM6sq8CpYAX9bLaMYxliOoLhUU00DhG9vQtY');
var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function () {
  fetch("/panier/validation/create-checkout-session/".concat(total), {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (session) {
    return stripe.redirectToCheckout({
      sessionId: session.id
    });
  }).then(function (result) {
    // If redirectToCheckout fails due to a browser or network
    // error, you should display the localized error message to your
    // customer using error.message.
    if (result.error) {
      alert(result.error.message);
    }
  })["catch"](function (error) {
    console.error('Error:', error.message);
  });
});

/***/ }),

/***/ "./assets/Front/slides.js":
/*!********************************!*\
  !*** ./assets/Front/slides.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);










jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
  var $cont = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.cont');
  var $slider = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.slider');
  var $naver = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.naver');
  var winW = jquery__WEBPACK_IMPORTED_MODULE_9___default()(window).width();
  var animSpd = 750; // Change also in CSS

  var distOfLetGo = winW * 0.2;
  var curSlide = 1;
  var animation = false;
  var autoScrollVar = true;
  var diff = 0; // Generating slides

  var arrCities = ['Amsterdam', 'Rome', 'New—York', 'Singapore', 'Prague']; // Change number of slides in CSS also

  var numOfCities = arrCities.length;
  var arrCitiesDivided = [];
  arrCities.map(function (city) {
    var length = city.length;
    var letters = Math.floor(length / 4);
    var exp = new RegExp('.{1,' + letters + '}', 'g');
    arrCitiesDivided.push(city.match(exp));
  });

  var generateSlide = function generateSlide(city) {
    var frag1 = jquery__WEBPACK_IMPORTED_MODULE_9___default()(document.createDocumentFragment());
    var frag2 = jquery__WEBPACK_IMPORTED_MODULE_9___default()(document.createDocumentFragment());
    var numSlide = arrCities.indexOf(arrCities[city]) + 1;
    var firstLetter = arrCitiesDivided[city][0].charAt(0);
    var $slide = jquery__WEBPACK_IMPORTED_MODULE_9___default()("<div data-target=\"".concat(numSlide, "\" class=\"slide slide--").concat(numSlide, "\">\n\t\t\t\t\t\t\t<div class=\"slide__darkbg slide--").concat(numSlide, "__darkbg\"></div>\n\t\t\t\t\t\t\t<div class=\"slide__text-wrapper slide--").concat(numSlide, "__text-wrapper\"></div>\n\t\t\t\t\t\t</div>"));
    var letter = jquery__WEBPACK_IMPORTED_MODULE_9___default()("<div class=\"slide__letter slide--".concat(numSlide, "__letter\">\n\t\t\t\t\t\t\t").concat(firstLetter, "\n\t\t\t\t\t\t</div>"));

    for (var i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
      var text = jquery__WEBPACK_IMPORTED_MODULE_9___default()("<div class=\"slide__text slide__text--".concat(i + 1, "\">\n\t\t\t\t\t\t\t\t").concat(arrCitiesDivided[city][i], "\n\t\t\t\t\t\t\t</div>"));
      frag1.append(text);
    }

    var naverSlide = jquery__WEBPACK_IMPORTED_MODULE_9___default()("<li data-target=\"".concat(numSlide, "\" class=\"naver__slide naver__slide--").concat(numSlide, "\"></li>"));
    frag2.append(naverSlide);
    $naver.append(frag2);
    $slide.find(".slide--".concat(numSlide, "__text-wrapper")).append(letter).append(frag1);
    $slider.append($slide);

    if (arrCities[city].length <= 4) {
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.slide--' + numSlide).find('.slide__text').css('font-size', '12vw');
    }
  };

  for (var i = 0, length = numOfCities; i < length; i++) {
    generateSlide(i);
  }

  jquery__WEBPACK_IMPORTED_MODULE_9___default()('.naver__slide--1').addClass('naver-active'); // naverigation

  function bullets(dir) {
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.naver__slide--' + curSlide).removeClass('naver-active');
    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.naver__slide--' + dir).addClass('naver-active');
  }

  function timeout() {
    animation = false;
  }

  function pagination(direction) {
    animation = true;
    diff = 0;
    $slider.addClass('animation');
    $slider.css({
      transform: 'translate3d(-' + (curSlide - direction) * 100 + '%, 0, 0)'
    });
    $slider.find('.slide__darkbg').css({
      transform: 'translate3d(' + (curSlide - direction) * 50 + '%, 0, 0)'
    });
    $slider.find('.slide__letter').css({
      transform: 'translate3d(0, 0, 0)'
    });
    $slider.find('.slide__text').css({
      transform: 'translate3d(0, 0, 0)'
    });
  }

  function naverigateRight() {
    if (!autoScrollVar) return;
    if (curSlide >= numOfCities) return;
    pagination(0);
    setTimeout(timeout, animSpd);
    bullets(curSlide + 1);
    curSlide++;
  }

  function naverigateLeft() {
    if (curSlide <= 1) return;
    pagination(2);
    setTimeout(timeout, animSpd);
    bullets(curSlide - 1);
    curSlide--;
  }

  function toDefault() {
    pagination(1);
    setTimeout(timeout, animSpd);
  } // Events


  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mousedown touchstart', '.slide', function (e) {
    if (animation) return;
    var target = +jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr('data-target');
    var startX = e.pageX || e.originalEvent.touches[0].pageX;
    $slider.removeClass('animation');
    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mousemove touchmove', function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = startX - x;
      if (target === 1 && diff < 0 || target === numOfCities && diff > 0) return;
      $slider.css({
        transform: 'translate3d(-' + ((curSlide - 1) * 100 + diff / 30) + '%, 0, 0)'
      });
      $slider.find('.slide__darkbg').css({
        transform: 'translate3d(' + ((curSlide - 1) * 50 + diff / 60) + '%, 0, 0)'
      });
      $slider.find('.slide__letter').css({
        transform: 'translate3d(' + diff / 60 + 'vw, 0, 0)'
      });
      $slider.find('.slide__text').css({
        transform: 'translate3d(' + diff / 15 + 'px, 0, 0)'
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mouseup touchend', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).off('mousemove touchmove');
    if (animation) return;

    if (diff >= distOfLetGo) {
      naverigateRight();
    } else if (diff <= -distOfLetGo) {
      naverigateLeft();
    } else {
      toDefault();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('click', '.naver__slide:not(.naver-active)', function () {
    var target = +jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr('data-target');
    bullets(target);
    curSlide = target;
    pagination(1);
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('click', '.side-naver', function () {
    var target = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).attr('data-target');
    if (target === 'right') naverigateRight();
    if (target === 'left') naverigateLeft();
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('keydown', function (e) {
    if (e.which === 39) naverigateRight();
    if (e.which === 37) naverigateLeft();
  });
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mousewheel DOMMouseScroll', function (e) {
    if (animation) return;
    var delta = e.originalEvent.wheelDelta;
    if (delta > 0 || e.originalEvent.detail < 0) naverigateLeft();
    if (delta < 0 || e.originalEvent.detail > 0) naverigateRight();
  });
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu.css */ "./assets/styles/menu.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_slides_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/slides.css */ "./assets/styles/slides.css");
/* harmony import */ var _styles_slides_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_slides_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_best_voyage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/best-voyage.css */ "./assets/styles/best-voyage.css");
/* harmony import */ var _styles_best_voyage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_best_voyage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_idee_voyage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/idee-voyage.css */ "./assets/styles/idee-voyage.css");
/* harmony import */ var _styles_idee_voyage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_idee_voyage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/footer.css */ "./assets/styles/footer.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Front_slides_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Front/slides.js */ "./assets/Front/slides.js");
/* harmony import */ var _Front_checkout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Front/checkout.js */ "./assets/Front/checkout.js");











/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/best-voyage.css":
/*!***************************************!*\
  !*** ./assets/styles/best-voyage.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/footer.css":
/*!**********************************!*\
  !*** ./assets/styles/footer.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/idee-voyage.css":
/*!***************************************!*\
  !*** ./assets/styles/idee-voyage.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/menu.css":
/*!********************************!*\
  !*** ./assets/styles/menu.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/slides.css":
/*!**********************************!*\
  !*** ./assets/styles/slides.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~admin~agence~app~security","vendors~admin~app~security","vendors~agence~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvRnJvbnQvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Zyb250L3NsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jlc3Qtdm95YWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pZGVlLXZveWFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NsaWRlcy5jc3MiXSwibmFtZXMiOlsidG90YWwiLCIkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdHJpcGUiLCJTdHJpcGUiLCJjaGVja291dEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2Vzc2lvbiIsInJlZGlyZWN0VG9DaGVja291dCIsInNlc3Npb25JZCIsImlkIiwicmVzdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJyZWFkeSIsIiRjb250IiwiJHNsaWRlciIsIiRuYXZlciIsIndpblciLCJ3aW5kb3ciLCJ3aWR0aCIsImFuaW1TcGQiLCJkaXN0T2ZMZXRHbyIsImN1clNsaWRlIiwiYW5pbWF0aW9uIiwiYXV0b1Njcm9sbFZhciIsImRpZmYiLCJhcnJDaXRpZXMiLCJudW1PZkNpdGllcyIsImxlbmd0aCIsImFyckNpdGllc0RpdmlkZWQiLCJtYXAiLCJjaXR5IiwibGV0dGVycyIsIk1hdGgiLCJmbG9vciIsImV4cCIsIlJlZ0V4cCIsInB1c2giLCJtYXRjaCIsImdlbmVyYXRlU2xpZGUiLCJmcmFnMSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmcmFnMiIsIm51bVNsaWRlIiwiaW5kZXhPZiIsImZpcnN0TGV0dGVyIiwiY2hhckF0IiwiJHNsaWRlIiwibGV0dGVyIiwiaSIsInRleHQiLCJhcHBlbmQiLCJuYXZlclNsaWRlIiwiZmluZCIsImNzcyIsImFkZENsYXNzIiwiYnVsbGV0cyIsImRpciIsInJlbW92ZUNsYXNzIiwidGltZW91dCIsInBhZ2luYXRpb24iLCJkaXJlY3Rpb24iLCJ0cmFuc2Zvcm0iLCJuYXZlcmlnYXRlUmlnaHQiLCJzZXRUaW1lb3V0IiwibmF2ZXJpZ2F0ZUxlZnQiLCJ0b0RlZmF1bHQiLCJvbiIsImUiLCJ0YXJnZXQiLCJhdHRyIiwic3RhcnRYIiwicGFnZVgiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsIngiLCJvZmYiLCJ3aGljaCIsImRlbHRhIiwid2hlZWxEZWx0YSIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw2Q0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLElBQXRCLENBQTJCLE9BQTNCLENBQWQ7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFFQSxJQUFJSyxNQUFNLEdBQUdDLE1BQU0sQ0FDbEIsNkdBRGtCLENBQW5CO0FBR0EsSUFBSUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXJCO0FBQ0FGLGNBQWMsQ0FBQ0csZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNuREMsT0FBSyxzREFBK0NYLEtBQS9DLEdBQXdEO0FBQzVEWSxVQUFNLEVBQUU7QUFEb0QsR0FBeEQsQ0FBTCxDQUdFQyxJQUhGLENBR08sVUFBU0MsUUFBVCxFQUFtQjtBQUN4QixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBTEYsRUFNRUYsSUFORixDQU1PLFVBQVNHLE9BQVQsRUFBa0I7QUFDdkIsV0FBT1gsTUFBTSxDQUFDWSxr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LEdBQXlCLENBQTFDLEVBQTZDZixjQUFjO0FBQzNELFFBQUlhLEtBQUssR0FBRyxDQUFSLElBQWFWLENBQUMsQ0FBQ0ssYUFBRixDQUFnQk8sTUFBaEIsR0FBeUIsQ0FBMUMsRUFBNkNqQixlQUFlO0FBQzVELEdBTkQ7QUFPQSxDQTVMRCxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgdG90YWwgPSAkKCcjY2hlY2tvdXQtYnV0dG9uJykuZGF0YSgndG90YWwnKTtcbmNvbnNvbGUubG9nKHRvdGFsKTtcblxudmFyIHN0cmlwZSA9IFN0cmlwZShcblx0J3BrX3Rlc3RfNTFJclVGT0lQcXNDM1hjTXQxU0ZMWExURnVLWFk5WDNWdnBMVTBYSXZjT1BVVmMzNkZwdld0MnU3Y3diazhKaU02c3E4Q3BZQVg5YkxhTVl4bGlPb0xoVVUwMERoRzl2UXRZJ1xuKTtcbnZhciBjaGVja291dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja291dC1idXR0b24nKTtcbmNoZWNrb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdGZldGNoKGAvcGFuaWVyL3ZhbGlkYXRpb24vY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vJHt0b3RhbH1gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCdcblx0fSlcblx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKHNlc3Npb24pIHtcblx0XHRcdHJldHVybiBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkOiBzZXNzaW9uLmlkIH0pO1xuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cdFx0XHQvLyBJZiByZWRpcmVjdFRvQ2hlY2tvdXQgZmFpbHMgZHVlIHRvIGEgYnJvd3NlciBvciBuZXR3b3JrXG5cdFx0XHQvLyBlcnJvciwgeW91IHNob3VsZCBkaXNwbGF5IHRoZSBsb2NhbGl6ZWQgZXJyb3IgbWVzc2FnZSB0byB5b3VyXG5cdFx0XHQvLyBjdXN0b21lciB1c2luZyBlcnJvci5tZXNzYWdlLlxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRhbGVydChyZXN1bHQuZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuXHRcdH0pO1xufSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0Y29uc3QgJGNvbnQgPSAkKCcuY29udCcpO1xuXHRjb25zdCAkc2xpZGVyID0gJCgnLnNsaWRlcicpO1xuXHRjb25zdCAkbmF2ZXIgPSAkKCcubmF2ZXInKTtcblx0Y29uc3Qgd2luVyA9ICQod2luZG93KS53aWR0aCgpO1xuXHRjb25zdCBhbmltU3BkID0gNzUwOyAvLyBDaGFuZ2UgYWxzbyBpbiBDU1Ncblx0Y29uc3QgZGlzdE9mTGV0R28gPSB3aW5XICogMC4yO1xuXHRsZXQgY3VyU2xpZGUgPSAxO1xuXHRsZXQgYW5pbWF0aW9uID0gZmFsc2U7XG5cdGxldCBhdXRvU2Nyb2xsVmFyID0gdHJ1ZTtcblx0bGV0IGRpZmYgPSAwO1xuXG5cdC8vIEdlbmVyYXRpbmcgc2xpZGVzXG5cdGxldCBhcnJDaXRpZXMgPSBbICdBbXN0ZXJkYW0nLCAnUm9tZScsICdOZXfigJRZb3JrJywgJ1NpbmdhcG9yZScsICdQcmFndWUnIF07IC8vIENoYW5nZSBudW1iZXIgb2Ygc2xpZGVzIGluIENTUyBhbHNvXG5cdGxldCBudW1PZkNpdGllcyA9IGFyckNpdGllcy5sZW5ndGg7XG5cdGxldCBhcnJDaXRpZXNEaXZpZGVkID0gW107XG5cblx0YXJyQ2l0aWVzLm1hcCgoY2l0eSkgPT4ge1xuXHRcdGxldCBsZW5ndGggPSBjaXR5Lmxlbmd0aDtcblx0XHRsZXQgbGV0dGVycyA9IE1hdGguZmxvb3IobGVuZ3RoIC8gNCk7XG5cdFx0bGV0IGV4cCA9IG5ldyBSZWdFeHAoJy57MSwnICsgbGV0dGVycyArICd9JywgJ2cnKTtcblxuXHRcdGFyckNpdGllc0RpdmlkZWQucHVzaChjaXR5Lm1hdGNoKGV4cCkpO1xuXHR9KTtcblxuXHRsZXQgZ2VuZXJhdGVTbGlkZSA9IGZ1bmN0aW9uKGNpdHkpIHtcblx0XHRsZXQgZnJhZzEgPSAkKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XG5cdFx0bGV0IGZyYWcyID0gJChkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO1xuXHRcdGNvbnN0IG51bVNsaWRlID0gYXJyQ2l0aWVzLmluZGV4T2YoYXJyQ2l0aWVzW2NpdHldKSArIDE7XG5cdFx0Y29uc3QgZmlyc3RMZXR0ZXIgPSBhcnJDaXRpZXNEaXZpZGVkW2NpdHldWzBdLmNoYXJBdCgwKTtcblxuXHRcdGNvbnN0ICRzbGlkZSA9ICQoYDxkaXYgZGF0YS10YXJnZXQ9XCIke251bVNsaWRlfVwiIGNsYXNzPVwic2xpZGUgc2xpZGUtLSR7bnVtU2xpZGV9XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZV9fZGFya2JnIHNsaWRlLS0ke251bVNsaWRlfV9fZGFya2JnXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZV9fdGV4dC13cmFwcGVyIHNsaWRlLS0ke251bVNsaWRlfV9fdGV4dC13cmFwcGVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5gKTtcblxuXHRcdGNvbnN0IGxldHRlciA9ICQoYDxkaXYgY2xhc3M9XCJzbGlkZV9fbGV0dGVyIHNsaWRlLS0ke251bVNsaWRlfV9fbGV0dGVyXCI+XG5cdFx0XHRcdFx0XHRcdCR7Zmlyc3RMZXR0ZXJ9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5gKTtcblxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnJDaXRpZXNEaXZpZGVkW2NpdHldLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gJChgPGRpdiBjbGFzcz1cInNsaWRlX190ZXh0IHNsaWRlX190ZXh0LS0ke2kgKyAxfVwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7YXJyQ2l0aWVzRGl2aWRlZFtjaXR5XVtpXX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+YCk7XG5cdFx0XHRmcmFnMS5hcHBlbmQodGV4dCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF2ZXJTbGlkZSA9ICQoYDxsaSBkYXRhLXRhcmdldD1cIiR7bnVtU2xpZGV9XCIgY2xhc3M9XCJuYXZlcl9fc2xpZGUgbmF2ZXJfX3NsaWRlLS0ke251bVNsaWRlfVwiPjwvbGk+YCk7XG5cdFx0ZnJhZzIuYXBwZW5kKG5hdmVyU2xpZGUpO1xuXHRcdCRuYXZlci5hcHBlbmQoZnJhZzIpO1xuXG5cdFx0JHNsaWRlLmZpbmQoYC5zbGlkZS0tJHtudW1TbGlkZX1fX3RleHQtd3JhcHBlcmApLmFwcGVuZChsZXR0ZXIpLmFwcGVuZChmcmFnMSk7XG5cdFx0JHNsaWRlci5hcHBlbmQoJHNsaWRlKTtcblxuXHRcdGlmIChhcnJDaXRpZXNbY2l0eV0ubGVuZ3RoIDw9IDQpIHtcblx0XHRcdCQoJy5zbGlkZS0tJyArIG51bVNsaWRlKS5maW5kKCcuc2xpZGVfX3RleHQnKS5jc3MoJ2ZvbnQtc2l6ZScsICcxMnZ3Jyk7XG5cdFx0fVxuXHR9O1xuXG5cdGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBudW1PZkNpdGllczsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0Z2VuZXJhdGVTbGlkZShpKTtcblx0fVxuXG5cdCQoJy5uYXZlcl9fc2xpZGUtLTEnKS5hZGRDbGFzcygnbmF2ZXItYWN0aXZlJyk7XG5cblx0Ly8gbmF2ZXJpZ2F0aW9uXG5cdGZ1bmN0aW9uIGJ1bGxldHMoZGlyKSB7XG5cdFx0JCgnLm5hdmVyX19zbGlkZS0tJyArIGN1clNsaWRlKS5yZW1vdmVDbGFzcygnbmF2ZXItYWN0aXZlJyk7XG5cdFx0JCgnLm5hdmVyX19zbGlkZS0tJyArIGRpcikuYWRkQ2xhc3MoJ25hdmVyLWFjdGl2ZScpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdGltZW91dCgpIHtcblx0XHRhbmltYXRpb24gPSBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhZ2luYXRpb24oZGlyZWN0aW9uKSB7XG5cdFx0YW5pbWF0aW9uID0gdHJ1ZTtcblx0XHRkaWZmID0gMDtcblx0XHQkc2xpZGVyLmFkZENsYXNzKCdhbmltYXRpb24nKTtcblx0XHQkc2xpZGVyLmNzcyh7XG5cdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtJyArIChjdXJTbGlkZSAtIGRpcmVjdGlvbikgKiAxMDAgKyAnJSwgMCwgMCknXG5cdFx0fSk7XG5cblx0XHQkc2xpZGVyLmZpbmQoJy5zbGlkZV9fZGFya2JnJykuY3NzKHtcblx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyAoY3VyU2xpZGUgLSBkaXJlY3Rpb24pICogNTAgKyAnJSwgMCwgMCknXG5cdFx0fSk7XG5cblx0XHQkc2xpZGVyLmZpbmQoJy5zbGlkZV9fbGV0dGVyJykuY3NzKHtcblx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xuXHRcdH0pO1xuXG5cdFx0JHNsaWRlci5maW5kKCcuc2xpZGVfX3RleHQnKS5jc3Moe1xuXHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBuYXZlcmlnYXRlUmlnaHQoKSB7XG5cdFx0aWYgKCFhdXRvU2Nyb2xsVmFyKSByZXR1cm47XG5cdFx0aWYgKGN1clNsaWRlID49IG51bU9mQ2l0aWVzKSByZXR1cm47XG5cdFx0cGFnaW5hdGlvbigwKTtcblx0XHRzZXRUaW1lb3V0KHRpbWVvdXQsIGFuaW1TcGQpO1xuXHRcdGJ1bGxldHMoY3VyU2xpZGUgKyAxKTtcblx0XHRjdXJTbGlkZSsrO1xuXHR9XG5cblx0ZnVuY3Rpb24gbmF2ZXJpZ2F0ZUxlZnQoKSB7XG5cdFx0aWYgKGN1clNsaWRlIDw9IDEpIHJldHVybjtcblx0XHRwYWdpbmF0aW9uKDIpO1xuXHRcdHNldFRpbWVvdXQodGltZW91dCwgYW5pbVNwZCk7XG5cdFx0YnVsbGV0cyhjdXJTbGlkZSAtIDEpO1xuXHRcdGN1clNsaWRlLS07XG5cdH1cblxuXHRmdW5jdGlvbiB0b0RlZmF1bHQoKSB7XG5cdFx0cGFnaW5hdGlvbigxKTtcblx0XHRzZXRUaW1lb3V0KHRpbWVvdXQsIGFuaW1TcGQpO1xuXHR9XG5cblx0Ly8gRXZlbnRzXG5cdCQoZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsICcuc2xpZGUnLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGFuaW1hdGlvbikgcmV0dXJuO1xuXHRcdGxldCB0YXJnZXQgPSArJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpO1xuXHRcdGxldCBzdGFydFggPSBlLnBhZ2VYIHx8IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuXHRcdCRzbGlkZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbicpO1xuXG5cdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZSB0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRsZXQgeCA9IGUucGFnZVggfHwgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG5cdFx0XHRkaWZmID0gc3RhcnRYIC0geDtcblx0XHRcdGlmICgodGFyZ2V0ID09PSAxICYmIGRpZmYgPCAwKSB8fCAodGFyZ2V0ID09PSBudW1PZkNpdGllcyAmJiBkaWZmID4gMCkpIHJldHVybjtcblxuXHRcdFx0JHNsaWRlci5jc3Moe1xuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtJyArICgoY3VyU2xpZGUgLSAxKSAqIDEwMCArIGRpZmYgLyAzMCkgKyAnJSwgMCwgMCknXG5cdFx0XHR9KTtcblxuXHRcdFx0JHNsaWRlci5maW5kKCcuc2xpZGVfX2RhcmtiZycpLmNzcyh7XG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyAoKGN1clNsaWRlIC0gMSkgKiA1MCArIGRpZmYgLyA2MCkgKyAnJSwgMCwgMCknXG5cdFx0XHR9KTtcblxuXHRcdFx0JHNsaWRlci5maW5kKCcuc2xpZGVfX2xldHRlcicpLmNzcyh7XG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyBkaWZmIC8gNjAgKyAndncsIDAsIDApJ1xuXHRcdFx0fSk7XG5cblx0XHRcdCRzbGlkZXIuZmluZCgnLnNsaWRlX190ZXh0JykuY3NzKHtcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIGRpZmYgLyAxNSArICdweCwgMCwgMCknXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XG5cdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUgdG91Y2htb3ZlJyk7XG5cblx0XHRpZiAoYW5pbWF0aW9uKSByZXR1cm47XG5cblx0XHRpZiAoZGlmZiA+PSBkaXN0T2ZMZXRHbykge1xuXHRcdFx0bmF2ZXJpZ2F0ZVJpZ2h0KCk7XG5cdFx0fSBlbHNlIGlmIChkaWZmIDw9IC1kaXN0T2ZMZXRHbykge1xuXHRcdFx0bmF2ZXJpZ2F0ZUxlZnQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9EZWZhdWx0KCk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm5hdmVyX19zbGlkZTpub3QoLm5hdmVyLWFjdGl2ZSknLCBmdW5jdGlvbigpIHtcblx0XHRsZXQgdGFyZ2V0ID0gKyQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcblx0XHRidWxsZXRzKHRhcmdldCk7XG5cdFx0Y3VyU2xpZGUgPSB0YXJnZXQ7XG5cdFx0cGFnaW5hdGlvbigxKTtcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlLW5hdmVyJywgZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcblxuXHRcdGlmICh0YXJnZXQgPT09ICdyaWdodCcpIG5hdmVyaWdhdGVSaWdodCgpO1xuXHRcdGlmICh0YXJnZXQgPT09ICdsZWZ0JykgbmF2ZXJpZ2F0ZUxlZnQoKTtcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUud2hpY2ggPT09IDM5KSBuYXZlcmlnYXRlUmlnaHQoKTtcblx0XHRpZiAoZS53aGljaCA9PT0gMzcpIG5hdmVyaWdhdGVMZWZ0KCk7XG5cdH0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChhbmltYXRpb24pIHJldHVybjtcblx0XHRsZXQgZGVsdGEgPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcblxuXHRcdGlmIChkZWx0YSA+IDAgfHwgZS5vcmlnaW5hbEV2ZW50LmRldGFpbCA8IDApIG5hdmVyaWdhdGVMZWZ0KCk7XG5cdFx0aWYgKGRlbHRhIDwgMCB8fCBlLm9yaWdpbmFsRXZlbnQuZGV0YWlsID4gMCkgbmF2ZXJpZ2F0ZVJpZ2h0KCk7XG5cdH0pO1xufSk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tZW51LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NsaWRlcy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9iZXN0LXZveWFnZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pZGVlLXZveWFnZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9mb290ZXIuY3NzJztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICcuL0Zyb250L3NsaWRlcy5qcyc7XG5pbXBvcnQgJy4vRnJvbnQvY2hlY2tvdXQuanMnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==