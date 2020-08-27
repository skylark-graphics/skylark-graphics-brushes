/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-color","./brushes","./GradientBrush"],function(r,o,s,n){var t=n.inherit({klassName:"LinearGradientBrush"});return t.fromString=function(r){var o=CssUtils.parseBackgroundImage(r);return"linear"==o.type?new t({startPoint:o.webKitPosn1,endPoint:o.webKitPosn2,fromColor:o.stops[0].color,toColor:o.stops[o.stops.length-1].color,stops:o.stops.slice(1,o.stops.length-1).map(function(r){return{offset:r.pos,color:r.color}})}):null},s.LinearGradientBrush=t});
//# sourceMappingURL=sourcemaps/LinearGradientBrush.js.map
