define([
	"skylark-langx/langx",
	"./brushes",
	"./Brush"
],function(langx,brushes,Brush) {

	var GradientBrush = Brush.inherit({

		"klassName"	:	"GradientBrush",

		
	});

	return brushes.GradientBrush = GradientBrush;
	
});	

