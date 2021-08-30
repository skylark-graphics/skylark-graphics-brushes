/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./brushes","./tile-brush"],function(r,e,n){var u=n.inherit({klassName:"ImageBrush",imageSource:{get:function(){return this._.imageSource}},toString:function(){return"url("+this.imageSource+")"},_construct:function(r){this._={imageSource:r}}});return u.fromString=function(r){var e=CssUtils.parseBackgroundImage(r);return"url"==e.type?new u(e.url):null},e.ImageBrush=u});
//# sourceMappingURL=sourcemaps/image-brush.js.map
