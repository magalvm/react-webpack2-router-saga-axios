webpackJsonp([0],{107:function(t,e,n){var o=(n(0),n(214)),l=!1;t.exports=function(t){t=t||{};var e=t.shouldRejectClick||o;l=!0,n(20).injection.injectEventPluginsByName({TapEventPlugin:n(212)(e)})}},119:function(t,e,n){"use strict";var o=function(t){var e;for(e in t)if(t.hasOwnProperty(e))return e;return null};t.exports=o},140:function(t,e,n){"use strict";var o={topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null},l={topLevelTypes:o};t.exports=l},212:function(t,e,n){"use strict";function getAxisCoordOfEvent(t,e){var n=p.extractSingleTouch(e);return n?n[t.page]:t.page in e?e[t.page]:e[t.client]+a[t.envScroll]}function getDistance(t,e){var n=getAxisCoordOfEvent(y.x,e),o=getAxisCoordOfEvent(y.y,e);return Math.pow(Math.pow(n-t.x,2)+Math.pow(o-t.y,2),.5)}function createTapEventPlugin(t){return{tapMoveThreshold:h,ignoreMouseThreshold:d,eventTypes:E,extractEvents:function(e,n,o,l){if(!c(e)&&!s(e))return null;if(f(e))v=x();else if(t(v,x()))return null;var p=null,a=getDistance(g,o);return s(e)&&a<h&&(p=r.getPooled(E.touchTap,n,o,l)),c(e)?(g.x=getAxisCoordOfEvent(y.x,o),g.y=getAxisCoordOfEvent(y.y,o)):s(e)&&(g.x=0,g.y=0),u.accumulateTwoPhaseDispatches(p),p}}}var o=n(140),l=n(34),u=n(21),r=n(23),p=n(213),a=n(54),i=n(119),c=(o.topLevelTypes,l.isStartish),s=l.isEndish,f=function(t){return["topTouchCancel","topTouchEnd","topTouchStart","topTouchMove"].indexOf(t)>=0},h=10,d=750,g={x:null,y:null},v=null,y={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},T=["topTouchStart","topTouchCancel","topTouchEnd","topTouchMove"],C=["topMouseDown","topMouseMove","topMouseUp"].concat(T),E={touchTap:{phasedRegistrationNames:{bubbled:i({onTouchTap:null}),captured:i({onTouchTapCapture:null})},dependencies:C}},x=function(){return Date.now?Date.now:function(){return+new Date}}();t.exports=createTapEventPlugin},213:function(t,e){var n={extractSingleTouch:function(t){var e=t.touches,n=t.changedTouches,o=e&&e.length>0,l=n&&n.length>0;return!o&&l?n[0]:o?e[0]:t}};t.exports=n},214:function(t,e){t.exports=function(t,e){if(t&&e-t<750)return!0}},229:function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),l=n(5),u=_interopRequireDefault(l),r=n(40);(0,_interopRequireDefault(n(107)).default)();var p=function(t){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments))}return _inherits(App,t),o(App,[{key:"render",value:function(){return u.default.createElement("h1",null,"Hi")}}]),App}(l.Component);(0,r.render)(u.default.createElement(p,null),document.getElementById("App"))}},[229]);