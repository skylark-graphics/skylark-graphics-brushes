define([
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
