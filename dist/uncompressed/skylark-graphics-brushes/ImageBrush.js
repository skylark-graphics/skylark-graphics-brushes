define([
	"skylark-langx/langx",
	"skylark-graphics-color",
	"./brushes",
	"./TileBrush"
],function(langx,Color,brushes,TileBrush) {

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
