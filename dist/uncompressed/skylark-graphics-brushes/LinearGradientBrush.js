define([
	"skylark-langx/langx",
	"skylark-graphics-color",
	"./brushes",
	"./GradientBrush"

],function(langx,Color,brushes,GradientBrush) {
	
	var LinearGradientBrush = GradientBrush.inherit({
		"klassName"	:	"LinearGradientBrush",

	});

	LinearGradientBrush.fromString = function(s) {
		var p = CssUtils.parseBackgroundImage(s);
		if (p.type == "linear" ) {
			return new LinearGradientBrush({
				startPoint : p.webKitPosn1,
				endPoint   : p.webKitPosn2,
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

	return brushes.LinearGradientBrush = LinearGradientBrush;
	
});	
