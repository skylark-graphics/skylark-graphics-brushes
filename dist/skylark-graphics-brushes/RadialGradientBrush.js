/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-color","./brushes","./GradientBrush"],function(s,r,o,t){var a=t.inherit({klassName:"RadialGradientBrush"});return a.fromString=function(s){var r=CssUtils.parseBackgroundImage(s);return"radial"==r.type?new a({startPoint:r.webKitPosn1,endPoint:r.webKitPosn2,startRadius:r.webKitRadius1,endRadius:r.webKitRadius2,fromColor:r.stops[0].color,toColor:r.stops[r.stops.length-1].color,stops:r.stops.slice(1,r.stops.length-1).map(function(s){return{offset:s.pos,color:s.color}})}):null},o.RadialGradientBrush=a});
//# sourceMappingURL=sourcemaps/RadialGradientBrush.js.map
