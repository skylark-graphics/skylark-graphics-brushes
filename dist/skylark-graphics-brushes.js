/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,s="function"==typeof n&&n.amd,o=!s&&"undefined"!=typeof exports;if(!s&&!n){var t={};n=e.define=function(r,e,n){"function"==typeof n?(t[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),s=r.split("/");n.pop();for(var o=0;o<s.length;o++)"."!=s[o]&&(".."==s[o]?n.pop():n.push(s[o]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):t[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!t.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=t[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-graphics-brushes/brushes",["skylark-langx/skylark"],function(r){return r.attach("graphics.burshes",{})}),r("skylark-graphics-brushes/main",["./brushes"],function(r){return r}),r("skylark-graphics-brushes",["skylark-graphics-brushes/main"],function(r){return r})}(n),!s){var i=require("skylark-langx-ns");o?module.exports=i:e.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-graphics-brushes.js.map
