define([
	"skylark-langx/langx",
	"./brushes",
	"./Brush"
],function(langx,brushes,Brush) {

	var TileBrush = Brush.inherit({
		"klassName"	:	"TileBrush",

	});

	return brushes.TileBrush = TileBrush;
	
});	
