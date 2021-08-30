/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-colors/color","./brushes","./brush"],function(r,o,n,t){var i=t.inherit({klassName:"SolidColorBrush",color:{get:function(){return this._.color}},toString:function(){return this.color.toString()},_construct:function(r){this._={color:r}}});return i.fromString=function(r){var n=o.parse(r);return n?new i(n):null},n.SolidColorBrush=i});
//# sourceMappingURL=sourcemaps/solid-color-brush.js.map
