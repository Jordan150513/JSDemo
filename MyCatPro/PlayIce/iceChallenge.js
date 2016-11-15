(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["iceChallenge_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mn = function() {
	this.spriteSheet = ss["iceChallenge_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.zpf = function() {
	this.spriteSheet = ss["iceChallenge_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.down = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["iceChallenge_atlas_"],2), null, new cjs.Matrix2D(0.118,0,0,0.118,-30,-35.8)).s().p("AkrFlIAArJIJXAAIAALJg");
	this.shape.setTransform(30,35.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,71.6);


(lib.up = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.mn();
	this.instance.setTransform(0,0,0.118,0.118);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,77);


(lib.bg_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486,438);


// stage content:
(lib.iceChallenge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(this.parent{
		this.parent.removeChild(this);	
			}
	}
	this.frame_23 = function() {
		this.stop();
		if(this.parent{
		this.parent.removeChild(this);	
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(12));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlHGFQh5g4gBhOQAAgbAOgYIhKAAIAAqIIP7AAIAAKIIiQAAQANAYAAAbQAABOh5A4Qh5A4irAAQisAAh5g4g");
	var mask_graphics_34 = new cjs.Graphics().p("AlHGFQh5g4gBhOQAAgbAOgYIhKAAIAAqIIP7AAIAAKIIiQAAQANAYAAAbQAABOh5A4Qh5A4irAAQisAAh5g4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:252,y:224.5}).wait(34).to({graphics:mask_graphics_34,x:252,y:224.5}).wait(1));

	// 图层 1
	this.instance = new lib.up();
	this.instance.setTransform(246,300.5,1,1,0,0,0,30,38.5);

	this.instance_1 = new lib.down();
	this.instance_1.setTransform(246,227.3,1,1,0,0,0,30,35.8);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:221.5},9).wait(5).to({y:302.5},9).to({_off:true,regY:35.8,y:227.3},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},1).to({y:298.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516,562,60,7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;