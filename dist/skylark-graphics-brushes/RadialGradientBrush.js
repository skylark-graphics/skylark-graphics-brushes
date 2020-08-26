/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["qscript/lang/Class","qface/geom/Point","qface/style/GradientBrush","qface/style/GradientPoint","qface/style/Color","qface/util/CssUtils"],function(t,o,s,i,r,e){var a=t.declare({"-parent-":s,"-module-":"qface/style/RadialGradientBrush","-public-":{"-attributes-":{startRadius:{type:Number},endRadius:{type:Number}},"-methods-":{toString:function(){var t={type:"radial",webkitGradType:"radial",stops:[],webKitPosn1:this.startPoint.toString(),webKitPosn2:this.endPoint.toString(),webKitRadius1:this.startRadius&&this.startRadius.toString(),webKitRadius2:this.endRadius&&this.endRadius.toString()};t.stops.push({color:r.toCss(this.fromColor)});for(var o=this.stops,s=0;s<o.length;s++){var i=o[s];t.stops.push({pos:i.offset.toString(),color:i.color.toString()})}return t.stops.push({color:r.toCss(this.toColor)}),e.buildBackgroundImage(t)[0]}}},"-constructor-":{initialize:function(t){if(this._setupAttributeValues({startPoint:t.startPoint,endPoint:t.endPoint,fromColor:t.fromColor,toColor:t.toColor,startRadius:t.startRadius,endRadius:t.endRadius}),t.stops)for(var o=t.stops,s=0;s<o.length;s++){var i=o[s];this.addColorStop(i.offset,i.color)}}}});return a.fromString=function(t){var o=e.parseBackgroundImage(t);return"radial"==o.type?new a({startPoint:o.webKitPosn1,endPoint:o.webKitPosn2,startRadius:o.webKitRadius1,endRadius:o.webKitRadius2,fromColor:o.stops[0].color,toColor:o.stops[o.stops.length-1].color,stops:o.stops.slice(1,o.stops.length-1).map(function(t){return{offset:t.pos,color:t.color}})}):null},a});
//# sourceMappingURL=sourcemaps/RadialGradientBrush.js.map
