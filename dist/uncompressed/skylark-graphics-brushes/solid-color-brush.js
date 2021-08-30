define([
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
