define([
	"skylark-langx/langx",
	"./brushes",
	"./brush"
],function(langx,brushes,Brush) {

	var TileBrush = Brush.inherit({
		"klassName"	:	"TileBrush",

	});

	return brushes.TileBrush = TileBrush;
	
});	
