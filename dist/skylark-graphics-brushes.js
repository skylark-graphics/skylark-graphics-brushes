/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var s=e.define,require=e.require,t="function"==typeof s&&s.amd,n=!t&&"undefined"!=typeof exports;if(!t&&!s){var a={};s=e.define=function(r,e,s){"function"==typeof s?(a[r]={factory:s,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var s=e.split("/"),t=r.split("/");s.pop();for(var n=0;n<t.length;n++)"."!=t[n]&&(".."==t[n]?s.pop():s.push(t[n]));return s.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):a[r]={factory:null,resolved:!0,exports:s}},require=e.require=function(r){if(!a.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=a[r];if(!module.resolved){var s=[];module.deps.forEach(function(r){s.push(require(r))}),module.exports=module.factory.apply(e,s)||null,module.resolved=!0}return module.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-graphics-brushes/brushes",["skylark-langx/skylark"],function(r){return r.attach("graphics.burshes",{})}),r("skylark-langx-numerics/transform",["skylark-langx-klass","./numerics"],function(r,e){var s=r({klassName:"Transform",value:{get:function(){return this._.value}}});return e.Transform=s}),r("skylark-graphics-brushes/brush",["skylark-langx/langx","skylark-langx-numerics/transform","./brushes"],function(r,e,s){var t=r.klass({klassName:"Brush",opacity:{get:function(){return this._.opacity}},transform:{get:function(){return this._.transform}}});return s.Brush=t}),r("skylark-graphics-brushes/gradient-brush",["skylark-langx/langx","./brushes","./brush"],function(r,e,s){var t=s.inherit({klassName:"GradientBrush"});return e.GradientBrush=t}),r("skylark-graphics-brushes/tile-brush",["skylark-langx/langx","./brushes","./brush"],function(r,e,s){var t=s.inherit({klassName:"TileBrush"});return e.TileBrush=t}),r("skylark-graphics-brushes/image-brush",["skylark-langx/langx","./brushes","./tile-brush"],function(r,e,s){var t=s.inherit({klassName:"ImageBrush",imageSource:{get:function(){return this._.imageSource}},toString:function(){return"url("+this.imageSource+")"},_construct:function(r){this._={imageSource:r}}});return t.fromString=function(r){var e=CssUtils.parseBackgroundImage(r);return"url"==e.type?new t(e.url):null},e.ImageBrush=t}),r("skylark-graphics-brushes/radial-gradient-brush",["skylark-langx/langx","./brushes","./gradient-brush"],function(r,e,s){var t=s.inherit({klassName:"RadialGradientBrush"});return t.fromString=function(r){var e=CssUtils.parseBackgroundImage(r);return"radial"==e.type?new t({startPoint:e.webKitPosn1,endPoint:e.webKitPosn2,startRadius:e.webKitRadius1,endRadius:e.webKitRadius2,fromColor:e.stops[0].color,toColor:e.stops[e.stops.length-1].color,stops:e.stops.slice(1,e.stops.length-1).map(function(r){return{offset:r.pos,color:r.color}})}):null},e.RadialGradientBrush=t}),r("skylark-graphics-brushes/solid-color-brush",["skylark-langx/langx","skylark-graphics-colors/color","./brushes","./brush"],function(r,e,s,t){var n=t.inherit({klassName:"SolidColorBrush",color:{get:function(){return this._.color}},toString:function(){return this.color.toString()},_construct:function(r){this._={color:r}}});return n.fromString=function(r){var s=e.parse(r);return s?new n(s):null},s.SolidColorBrush=n}),r("skylark-graphics-brushes/tile-repeate-mode",["skylark-langx/langx","./brushes"],function(r,e){var s=["repeat","repeatx","repeaty","norepeat"];return r.mixin(s,{repeat:0,repeatx:1,repeaty:2,norepeat:3}),s.fromCss=function(r){switch(r){case"repeat":return s.repeat;case"repeat-x":return s.repeatx;case"repeat-y":return s.repeaty;case"no-repeat":return s.norepeat;default:return}},s.toCss=function(r){switch(r){case s.repeat:return"repeat";case s.repeatx:return"repeat-x";case s.repeaty:return"repeat-y";case s.norepeat:return"no-repeat";default:return}},e.TileRepeateMode=s}),r("skylark-graphics-brushes/main",["./brushes","./brush","./gradient-brush","./image-brush","./radial-gradient-brush","./solid-color-brush","./tile-brush","./tile-repeate-mode"],function(r){return r}),r("skylark-graphics-brushes",["skylark-graphics-brushes/main"],function(r){return r})}(s),!t){var u=require("skylark-langx-ns");n?module.exports=u:e.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-graphics-brushes.js.map
