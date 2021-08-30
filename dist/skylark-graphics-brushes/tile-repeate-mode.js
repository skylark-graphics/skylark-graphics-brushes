/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./brushes"],function(e,r){var t=["repeat","repeatx","repeaty","norepeat"];return e.mixin(t,{repeat:0,repeatx:1,repeaty:2,norepeat:3}),t.fromCss=function(e){switch(e){case"repeat":return t.repeat;case"repeat-x":return t.repeatx;case"repeat-y":return t.repeaty;case"no-repeat":return t.norepeat;default:return}},t.toCss=function(e){switch(e){case t.repeat:return"repeat";case t.repeatx:return"repeat-x";case t.repeaty:return"repeat-y";case t.norepeat:return"no-repeat";default:return}},r.TileRepeateMode=t});
//# sourceMappingURL=sourcemaps/tile-repeate-mode.js.map
