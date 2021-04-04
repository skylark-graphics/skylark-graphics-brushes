define([
	"skylark-langx/langx",
	"skylark-langx-numerics/Transform",
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
