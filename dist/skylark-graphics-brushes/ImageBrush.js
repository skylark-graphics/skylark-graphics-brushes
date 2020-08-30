/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-graphics-color","./brushes","./TileBrush"],function(r,e,n,u){var t=u.inherit({klassName:"ImageBrush",imageSource:{get:function(){return this._.imageSource}},toString:function(){return"url("+this.imageSource+")"},_construct:function(r){this._={imageSource:r}}});return t.fromString=function(r){var e=CssUtils.parseBackgroundImage(r);return"url"==e.type?new t(e.url):null},n.ImageBrush=t});
//# sourceMappingURL=sourcemaps/ImageBrush.js.map
