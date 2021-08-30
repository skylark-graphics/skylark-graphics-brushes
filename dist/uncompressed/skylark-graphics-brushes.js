/**
 * skylark-graphics-brushes - The skylark brush class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-graphics-brushes/brushes',[
	"skylark-langx/skylark"
],function(skylark){
	return skylark.attach("graphics.burshes",{});
});


define('skylark-langx-numerics/transform',[
	"skylark-langx-klass",	
    "./numerics",
], function(klass,numerics) {

    var Transform =  klass({
        "klassName": "Transform",
		"value": {
			get : function(){
				return this._.value;
			}
		}
	});

	return numerics.Transform =Transform;
});

define('skylark-graphics-brushes/brush',[
	"skylark-langx/langx",
	"skylark-langx-numerics/transform",
	"./brushes"
], function(langx, Transform,brushes) {
	var Brush = langx.klass({
		"klassName": "Brush",

		"opacity": {
			get : function() {
				return this._.opacity;
			}
		},

		"transform": {
			get : function() {
				return this._.transform;
			}
		}
	});

	return brushes.Brush = Brush;
});

define('skylark-graphics-brushes/gradient-brush',[
	"skylark-langx/langx",
	"./brushes",
	"./brush"
],function(langx,brushes,Brush) {

	var GradientBrush = Brush.inherit({

		"klassName"	:	"GradientBrush",

		
	});

	return brushes.GradientBrush = GradientBrush;
	
});	


define('skylark-graphics-brushes/tile-brush',[
	"skylark-langx/langx",
	"./brushes",
	"./brush"
],function(langx,brushes,Brush) {

	var TileBrush = Brush.inherit({
		"klassName"	:	"TileBrush",

	});

	return brushes.TileBrush = TileBrush;
	
});	

define('skylark-graphics-brushes/image-brush',[
	"skylark-langx/langx",
	"./brushes",
	"./tile-brush"
],function(langx,brushes,TileBrush) {

	var ImageBrush = TileBrush.inherit({

		"klassName"	:	"ImageBrush",

		"imageSource"	:	{
			get : function() {
				return this._.imageSource;
			}		
		},

		"toString" : function() {
			return "url("+this.imageSource+")";
		},
		
		"_construct" : function(url){
			this._ = {
				imageSource : url
			};
		}	
	});

	ImageBrush.fromString = function(s) {
		var p = CssUtils.parseBackgroundImage(s);
		if (p.type == "url") {
			return new ImageBrush(p.url);
		} else {
			return null;
		}
	};

	return brushes.ImageBrush = ImageBrush;
	
});	

define('skylark-graphics-brushes/radial-gradient-brush',[
	"skylark-langx/langx",
	"./brushes",
	"./gradient-brush"
],function(langx,brushes,GradientBrush) {
	
	var RadialGradientBrush = GradientBrush.inherit({
		"klassName"	:	"RadialGradientBrush",

	});

	RadialGradientBrush.fromString = function(s) {
		var p = CssUtils.parseBackgroundImage(s);
		if (p.type == "radial" ) {
			return new RadialGradientBrush({
				startPoint : p.webKitPosn1,
				endPoint   : p.webKitPosn2,
				startRadius: p.webKitRadius1,
				endRadius  : p.webKitRadius2,
				fromColor  : p.stops[0].color,
				toColor    : p.stops[p.stops.length-1].color,

				stops      : p.stops.slice(1,p.stops.length-1).map(function(item){
					return {
						offset : item.pos,
						color : item.color
					}
				})

			});
		} else {
			return null;
		}
	};

	return brushes.RadialGradientBrush = RadialGradientBrush;
	
});	


define('skylark-graphics-brushes/solid-color-brush',[
	"skylark-langx/langx",
	"skylark-graphics-colors/color",
	"./brushes",
	"./brush"
],function(langx,Color,brushes,Brush) {

	var SolidColorBrush = Brush.inherit({
		
		"klassName"	:	"SolidColorBrush",

		"color" : {
			get  : function() {
				return this._.color;
			}
		},
		
		"toString" : function() {
			return this.color.toString();
		},
	
		"_construct" : function(c){
			this._ = {
				color : c
			};
		}
	});

	SolidColorBrush.fromString = function(s) {
		var c = Color.parse(s);
		if (c) {
			return new SolidColorBrush(c);
		} else {
			return null;
		}
	};

	return brushes.SolidColorBrush = SolidColorBrush;
	
});	

define('skylark-graphics-brushes/tile-repeate-mode',[
	"skylark-langx/langx",
	"./brushes"
], function(langx, brushes) {

	var TileRepeateMode = ["repeat", "repeatx", "repeaty", "norepeat"];

	langx.mixin(TileRepeateMode,{
		"repeat" : 0, 
		"repeatx" : 1, 
		"repeaty" : 2, 
		"norepeat" : 3
	});

	TileRepeateMode.fromCss = function(s) {
		switch (s) {
			case "repeat" : 
				return TileRepeateMode.repeat;
			case "repeat-x" : 
				return TileRepeateMode.repeatx;
			case "repeat-y" : 
				return TileRepeateMode.repeaty;
			case "no-repeat" : 
				return TileRepeateMode.norepeat;
			default :
				return undefined;			
		}
	};
	TileRepeateMode.toCss = function(repeat) {
		switch (repeat) {
			case TileRepeateMode.repeat : 
				return "repeat";
			case TileRepeateMode.repeatx : 
				return "repeat-x";
			case TileRepeateMode.repeaty : 
				return "repeat-y";
			case TileRepeateMode.norepeat : 
				return "no-repeat";
			default :
				return undefined;			
		}
	};

	return brushes.TileRepeateMode = TileRepeateMode;

});

define('skylark-graphics-brushes/main',[
	"./brushes",
	"./brush",
	"./gradient-brush",
	"./image-brush",
	"./radial-gradient-brush",
	"./solid-color-brush",
	"./tile-brush",
	"./tile-repeate-mode"
],function(brushes){
	return brushes;
});


define('skylark-graphics-brushes', ['skylark-graphics-brushes/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-graphics-brushes.js.map
