/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-color","./brushes","./GradientBrush","./GradientPoint","./GradientStop"],function(o,t,r,s,n,i){var e=s.inherit({klassName:"LinearGradientBrush",angle:{get:function(){return this._.angle}},toString:function(){var o={type:"linear",webkitGradType:"linear",stops:[],webKitPosn1:this.startPoint.toString(),webKitPosn2:this.endPoint.toString()};o.stops.push({color:t.toCss(this.fromColor)});for(var r=this.stops,s=0;s<r.length;s++){var n=r[s];o.stops.push({pos:n.offset.toString(),color:n.color.toString()})}return o.stops.push({color:this.toColor.toString()}),CssUtils.buildBackgroundImage(o)[0]},_construct:function(o){if(this._={startPoint:o.startPoint,endPoint:o.endPoint,fromColor:o.fromColor,toColor:o.toColor,angle:o.angle},o.stops)for(var t=o.stops,r=0;r<t.length;r++){var s=t[r];this.addColorStop(s.offset,s.color)}}});return e.fromString=function(o){var t=CssUtils.parseBackgroundImage(o);return"linear"==t.type?new e({startPoint:t.webKitPosn1,endPoint:t.webKitPosn2,fromColor:t.stops[0].color,toColor:t.stops[t.stops.length-1].color,stops:t.stops.slice(1,t.stops.length-1).map(function(o){return{offset:o.pos,color:o.color}})}):null},r.LinearGradientBrush=e});
//# sourceMappingURL=sourcemaps/LinearGradientBrush.js.map
