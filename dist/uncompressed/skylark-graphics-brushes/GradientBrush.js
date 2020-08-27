define([
	"skylark-langx/langx",
	"skylark-graphics-color",
	"./brushes",
	"./Brush"
],function(langx,Color,brushes,Brush) {

	var GradientBrush = Brush.inherit({

		"klassName"	:	"GradientBrush",

		
	});

	return brushes.GradientBrush = GradientBrush;
	
});	

