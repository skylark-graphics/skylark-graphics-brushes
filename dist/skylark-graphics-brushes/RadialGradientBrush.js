/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./brushes","./GradientBrush"],function(s,t,o){var r=o.inherit({klassName:"RadialGradientBrush"});return r.fromString=function(s){var t=CssUtils.parseBackgroundImage(s);return"radial"==t.type?new r({startPoint:t.webKitPosn1,endPoint:t.webKitPosn2,startRadius:t.webKitRadius1,endRadius:t.webKitRadius2,fromColor:t.stops[0].color,toColor:t.stops[t.stops.length-1].color,stops:t.stops.slice(1,t.stops.length-1).map(function(s){return{offset:s.pos,color:s.color}})}):null},t.RadialGradientBrush=r});
//# sourceMappingURL=sourcemaps/RadialGradientBrush.js.map
