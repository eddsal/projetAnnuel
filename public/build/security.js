(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security"],{

/***/ "./assets/security.js":
/*!****************************!*\
  !*** ./assets/security.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/login.css */ "./assets/styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _security_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security/login */ "./assets/security/login.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./assets/security/login.js":
/*!**********************************!*\
  !*** ./assets/security/login.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#goRight').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slideBox').animate({
      marginLeft: '0'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.topLayer').animate({
      marginLeft: '100%'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#goLeft').on('click', function () {
    if (window.innerWidth > 769) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slideBox').animate({
        marginLeft: '50%'
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slideBox').animate({
        marginLeft: '20%'
      });
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.topLayer').animate({
      marginLeft: '0'
    });
  });
});
/* ====================== *
   *  Initiate Canvas       *
   * ====================== */

paper.install(window);
paper.setup(document.getElementById('canvas')); // Paper JS Variables

var canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
var shapeGroup = new Group();
var positionArray = [];

function getCanvasBounds() {
  // Get current canvas size
  canvasWidth = view.size.width;
  canvasHeight = view.size.height;
  canvasMiddleX = canvasWidth / 2;
  canvasMiddleY = canvasHeight / 2; // Set path position

  var position1 = {
    x: canvasMiddleX / 2 + 100,
    y: 100
  };
  var position2 = {
    x: 200,
    y: canvasMiddleY
  };
  var position3 = {
    x: canvasMiddleX - 50 + canvasMiddleX / 2,
    y: 150
  };
  var position4 = {
    x: 0,
    y: canvasMiddleY + 100
  };
  var position5 = {
    x: canvasWidth - 130,
    y: canvasHeight - 75
  };
  var position6 = {
    x: canvasMiddleX + 80,
    y: canvasHeight - 50
  };
  var position7 = {
    x: canvasWidth + 60,
    y: canvasMiddleY - 50
  };
  var position8 = {
    x: canvasMiddleX + 100,
    y: canvasMiddleY + 100
  };
  positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
}
/* ====================== *
   * Create Shapes          *
   * ====================== */


function initializeShapes() {
  // Get Canvas Bounds
  getCanvasBounds();
  var shapePathData = ['M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z', 'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0', 'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z', 'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352', 'M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100', 'M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 '];

  for (var i = 0; i <= shapePathData.length; i++) {
    // Create shape
    var headerShape = new Path({
      strokeColor: 'rgba(255, 255, 255, 0.5)',
      strokeWidth: 2,
      parent: shapeGroup
    }); // Set path data

    headerShape.pathData = shapePathData[i];
    headerShape.scale(2); // Set path position

    headerShape.position = positionArray[i];
  }
}

initializeShapes();
/* ====================== *
   * Animation              *
   * ====================== */

view.onFrame = function paperOnFrame(event) {
  if (event.count % 4 === 0) {
    // Slows down frame rate
    for (var i = 0; i < shapeGroup.children.length; i++) {
      if (i % 2 === 0) {
        shapeGroup.children[i].rotate(-0.1);
      } else {
        shapeGroup.children[i].rotate(0.1);
      }
    }
  }
};

view.onResize = function paperOnResize() {
  getCanvasBounds();

  for (var i = 0; i < shapeGroup.children.length; i++) {
    shapeGroup.children[i].position = positionArray[i];
  }

  if (canvasWidth < 700) {
    shapeGroup.children[3].opacity = 0;
    shapeGroup.children[2].opacity = 0;
    shapeGroup.children[5].opacity = 0;
  } else {
    shapeGroup.children[3].opacity = 1;
    shapeGroup.children[2].opacity = 1;
    shapeGroup.children[5].opacity = 1;
  }
};

/***/ }),

/***/ "./assets/styles/login.css":
/*!*********************************!*\
  !*** ./assets/styles/login.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/security.js","runtime","vendors~admin~agence~app~security","vendors~admin~app~security"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlY3VyaXR5L2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbG9naW4uY3NzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJhbmltYXRlIiwibWFyZ2luTGVmdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYXBlciIsImluc3RhbGwiLCJzZXR1cCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjYW52YXNNaWRkbGVYIiwiY2FudmFzTWlkZGxlWSIsInNoYXBlR3JvdXAiLCJHcm91cCIsInBvc2l0aW9uQXJyYXkiLCJnZXRDYW52YXNCb3VuZHMiLCJ2aWV3Iiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24xIiwieCIsInkiLCJwb3NpdGlvbjIiLCJwb3NpdGlvbjMiLCJwb3NpdGlvbjQiLCJwb3NpdGlvbjUiLCJwb3NpdGlvbjYiLCJwb3NpdGlvbjciLCJwb3NpdGlvbjgiLCJpbml0aWFsaXplU2hhcGVzIiwic2hhcGVQYXRoRGF0YSIsImkiLCJsZW5ndGgiLCJoZWFkZXJTaGFwZSIsIlBhdGgiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwicGFyZW50IiwicGF0aERhdGEiLCJzY2FsZSIsInBvc2l0aW9uIiwib25GcmFtZSIsInBhcGVyT25GcmFtZSIsImV2ZW50IiwiY291bnQiLCJjaGlsZHJlbiIsInJvdGF0ZSIsIm9uUmVzaXplIiwicGFwZXJPblJlc2l6ZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FB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O0FBQ0QsQ0FoQkQsQzs7Ozs7Ozs7Ozs7QUM3SUEsdUMiLCJmaWxlIjoic2VjdXJpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2xvZ2luLmNzcyc7XG5pbXBvcnQgJy4vc2VjdXJpdHkvbG9naW4nO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdCQoJyNnb1JpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnI3NsaWRlQm94JykuYW5pbWF0ZSh7XG5cdFx0XHRtYXJnaW5MZWZ0OiAnMCdcblx0XHR9KTtcblx0XHQkKCcudG9wTGF5ZXInKS5hbmltYXRlKHtcblx0XHRcdG1hcmdpbkxlZnQ6ICcxMDAlJ1xuXHRcdH0pO1xuXHR9KTtcblx0JCgnI2dvTGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OSkge1xuXHRcdFx0JCgnI3NsaWRlQm94JykuYW5pbWF0ZSh7XG5cdFx0XHRcdG1hcmdpbkxlZnQ6ICc1MCUnXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnI3NsaWRlQm94JykuYW5pbWF0ZSh7XG5cdFx0XHRcdG1hcmdpbkxlZnQ6ICcyMCUnXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0JCgnLnRvcExheWVyJykuYW5pbWF0ZSh7XG5cdFx0XHRtYXJnaW5MZWZ0OiAnMCdcblx0XHR9KTtcblx0fSk7XG59KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PSAqXG4gICAqICBJbml0aWF0ZSBDYW52YXMgICAgICAgKlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09ICovXG5wYXBlci5pbnN0YWxsKHdpbmRvdyk7XG5wYXBlci5zZXR1cChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykpO1xuXG4vLyBQYXBlciBKUyBWYXJpYWJsZXNcbnZhciBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjYW52YXNNaWRkbGVYLCBjYW52YXNNaWRkbGVZO1xuXG52YXIgc2hhcGVHcm91cCA9IG5ldyBHcm91cCgpO1xuXG52YXIgcG9zaXRpb25BcnJheSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRDYW52YXNCb3VuZHMoKSB7XG5cdC8vIEdldCBjdXJyZW50IGNhbnZhcyBzaXplXG5cdGNhbnZhc1dpZHRoID0gdmlldy5zaXplLndpZHRoO1xuXHRjYW52YXNIZWlnaHQgPSB2aWV3LnNpemUuaGVpZ2h0O1xuXHRjYW52YXNNaWRkbGVYID0gY2FudmFzV2lkdGggLyAyO1xuXHRjYW52YXNNaWRkbGVZID0gY2FudmFzSGVpZ2h0IC8gMjtcblx0Ly8gU2V0IHBhdGggcG9zaXRpb25cblx0dmFyIHBvc2l0aW9uMSA9IHtcblx0XHR4OiBjYW52YXNNaWRkbGVYIC8gMiArIDEwMCxcblx0XHR5OiAxMDBcblx0fTtcblxuXHR2YXIgcG9zaXRpb24yID0ge1xuXHRcdHg6IDIwMCxcblx0XHR5OiBjYW52YXNNaWRkbGVZXG5cdH07XG5cblx0dmFyIHBvc2l0aW9uMyA9IHtcblx0XHR4OiBjYW52YXNNaWRkbGVYIC0gNTAgKyBjYW52YXNNaWRkbGVYIC8gMixcblx0XHR5OiAxNTBcblx0fTtcblxuXHR2YXIgcG9zaXRpb240ID0ge1xuXHRcdHg6IDAsXG5cdFx0eTogY2FudmFzTWlkZGxlWSArIDEwMFxuXHR9O1xuXG5cdHZhciBwb3NpdGlvbjUgPSB7XG5cdFx0eDogY2FudmFzV2lkdGggLSAxMzAsXG5cdFx0eTogY2FudmFzSGVpZ2h0IC0gNzVcblx0fTtcblxuXHR2YXIgcG9zaXRpb242ID0ge1xuXHRcdHg6IGNhbnZhc01pZGRsZVggKyA4MCxcblx0XHR5OiBjYW52YXNIZWlnaHQgLSA1MFxuXHR9O1xuXG5cdHZhciBwb3NpdGlvbjcgPSB7XG5cdFx0eDogY2FudmFzV2lkdGggKyA2MCxcblx0XHR5OiBjYW52YXNNaWRkbGVZIC0gNTBcblx0fTtcblxuXHR2YXIgcG9zaXRpb244ID0ge1xuXHRcdHg6IGNhbnZhc01pZGRsZVggKyAxMDAsXG5cdFx0eTogY2FudmFzTWlkZGxlWSArIDEwMFxuXHR9O1xuXG5cdHBvc2l0aW9uQXJyYXkgPSBbIHBvc2l0aW9uMywgcG9zaXRpb24yLCBwb3NpdGlvbjUsIHBvc2l0aW9uNCwgcG9zaXRpb24xLCBwb3NpdGlvbjYsIHBvc2l0aW9uNywgcG9zaXRpb244IF07XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT0gKlxuICAgKiBDcmVhdGUgU2hhcGVzICAgICAgICAgICpcbiAgICogPT09PT09PT09PT09PT09PT09PT09PSAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoYXBlcygpIHtcblx0Ly8gR2V0IENhbnZhcyBCb3VuZHNcblx0Z2V0Q2FudmFzQm91bmRzKCk7XG5cblx0dmFyIHNoYXBlUGF0aERhdGEgPSBbXG5cdFx0J00yMzEsMzUybDQ0NS0xNTZMNjAwLDBMNDUyLDU0TDMzMSwzTDAsNDhMMjMxLDM1MicsXG5cdFx0J00wLDBsNjQsMjE5TDI5LDM0M2w1MzUsMzBMNDc4LDM3bC0xMzMsNEwwLDB6Jyxcblx0XHQnTTAsNjVsMTYsMTM4bDk2LDEwN2wyNzAtMkw0NzAsMEwzMzcsNEwwLDY1eicsXG5cdFx0J00zMzMsMEwwLDk0bDY0LDIxOUwyOSw0MzdsNTcwLTE1MWwtMTk2LTQyTDMzMywwJyxcblx0XHQnTTMzMS45LDMuNmwtMzMxLDQ1bDIzMSwzMDRsNDQ1LTE1NmwtNzYtMTk2bC0xNDgsNTRMMzMxLjksMy42eicsXG5cdFx0J00zODksMzUybDkyLTExM2wxOTUtNDNsMCwwbDAsMEw0NDUsNDhsLTgwLDFMMTIyLjcsMEwwLDI3NS4yTDE2MiwyOTdMMzg5LDM1MicsXG5cdFx0J00gNTAgMTAwIEwgMzAwIDE1MCBMIDU1MCA1MCBMIDc1MCAzMDAgTCA1MDAgMjUwIEwgMzAwIDQ1MCBMIDUwIDEwMCcsXG5cdFx0J00gNzAwIDM1MCBMIDUwMCAzNTAgTCA3MDAgNTAwIEwgNDAwIDQwMCBMIDIwMCA0NTAgTCAyNTAgMzUwIEwgMTAwIDMwMCBMIDE1MCA1MCBMIDM1MCAxMDAgTCAyNTAgMTUwIEwgNDUwIDE1MCBMIDQwMCA1MCBMIDU1MCAxNTAgTCAzNTAgMjUwIEwgNjUwIDE1MCBMIDY1MCA1MCBMIDcwMCAxNTAgTCA2MDAgMjUwIEwgNzUwIDI1MCBMIDY1MCAzMDAgTCA3MDAgMzUwICdcblx0XTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8PSBzaGFwZVBhdGhEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gQ3JlYXRlIHNoYXBlXG5cdFx0dmFyIGhlYWRlclNoYXBlID0gbmV3IFBhdGgoe1xuXHRcdFx0c3Ryb2tlQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuXHRcdFx0c3Ryb2tlV2lkdGg6IDIsXG5cdFx0XHRwYXJlbnQ6IHNoYXBlR3JvdXBcblx0XHR9KTtcblx0XHQvLyBTZXQgcGF0aCBkYXRhXG5cdFx0aGVhZGVyU2hhcGUucGF0aERhdGEgPSBzaGFwZVBhdGhEYXRhW2ldO1xuXHRcdGhlYWRlclNoYXBlLnNjYWxlKDIpO1xuXHRcdC8vIFNldCBwYXRoIHBvc2l0aW9uXG5cdFx0aGVhZGVyU2hhcGUucG9zaXRpb24gPSBwb3NpdGlvbkFycmF5W2ldO1xuXHR9XG59XG5cbmluaXRpYWxpemVTaGFwZXMoKTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PSAqXG4gICAqIEFuaW1hdGlvbiAgICAgICAgICAgICAgKlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09ICovXG52aWV3Lm9uRnJhbWUgPSBmdW5jdGlvbiBwYXBlck9uRnJhbWUoZXZlbnQpIHtcblx0aWYgKGV2ZW50LmNvdW50ICUgNCA9PT0gMCkge1xuXHRcdC8vIFNsb3dzIGRvd24gZnJhbWUgcmF0ZVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJSAyID09PSAwKSB7XG5cdFx0XHRcdHNoYXBlR3JvdXAuY2hpbGRyZW5baV0ucm90YXRlKC0wLjEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2hhcGVHcm91cC5jaGlsZHJlbltpXS5yb3RhdGUoMC4xKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbnZpZXcub25SZXNpemUgPSBmdW5jdGlvbiBwYXBlck9uUmVzaXplKCkge1xuXHRnZXRDYW52YXNCb3VuZHMoKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRzaGFwZUdyb3VwLmNoaWxkcmVuW2ldLnBvc2l0aW9uID0gcG9zaXRpb25BcnJheVtpXTtcblx0fVxuXG5cdGlmIChjYW52YXNXaWR0aCA8IDcwMCkge1xuXHRcdHNoYXBlR3JvdXAuY2hpbGRyZW5bM10ub3BhY2l0eSA9IDA7XG5cdFx0c2hhcGVHcm91cC5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMDtcblx0XHRzaGFwZUdyb3VwLmNoaWxkcmVuWzVdLm9wYWNpdHkgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHNoYXBlR3JvdXAuY2hpbGRyZW5bM10ub3BhY2l0eSA9IDE7XG5cdFx0c2hhcGVHcm91cC5jaGlsZHJlblsyXS5vcGFjaXR5ID0gMTtcblx0XHRzaGFwZUdyb3VwLmNoaWxkcmVuWzVdLm9wYWNpdHkgPSAxO1xuXHR9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==