(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.PAL_COULEUR = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3333CC").s().p("AgnBDQgJgDgOgIQgEgCgEgSIgIgdQgDgGAAgFQAAgHAEgKQAFgLAGgIQAGgIAXgLQAYgMARABQATAAAVAJQAhAPAAAfIAAAEQAFAMAAAPQAAAQgHAOQgEALgGADQgZAMgsAAQgUAAgPgFgAABgSIABABIgBgDIAAACg");
	this.shape.setTransform(8.3,7.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,16.5,14.4);
p.frameBounds = [rect];


(lib.PICTO_PAPIER_XX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{P1:0,P2:5,P3:10,P4:15,P5:20});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AqzHWQgyABABgyIAAtJQgBgxAyAAIVnAAQAyAAgBAxIAANJQABAygygBg");
	this.shape.setTransform(295.2,-62.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// DECOR 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#46BDF4").s().p("AALCkQgCgGAAgJQABgLgBgEIgLANQgIAIgFAEQgGgDgNgNQAIgHALgOQALgPAEgGIAAgWQgFAHgIACQgHgMgBgNQAKgGAGgFQABgGgDgSIgIALIgJALQgBAKABAVQgOAFgEgBQgCgDAAgFIgBgIQgDABgFAFIgIAJIAIAZQAFAPgBAKIgMADQgJADgEADQgHgEAAgNQgBgRgBgDQgEABgHAHIgMAKQgCgEgHgFQgHgEgBgEIAKgIIAJgJQgEgCgQAAQgNAAgEgHQgCgEADgJQACgJAAgEIAxAIQAFgDAFgFQAGgGAEgDQgCgBgIgBQgHAAgCgGQAEgDAHgMQARACAHAEQAGgDAHgHQAHgIAFgDQgEgDgJgBIgOgDQgKADgJAMQgFABgFgEIgJgHQAAgDADgDIAFgDIgJgDIgIgDQgNAJgaAUQgMgDgJgUQAXgLAKgGQgFgDgLgDQgMgDgFgDQABgFADgJIAEgPQAHAAAJAEQAMAFAEABQgCgHgGgMIgJgUQADgCAXgGQANAbAIAZQALAGAHACQAAgDgDgHQgDgGABgDQAEgBAQADIAFAMQACAIADADQAEAGALACQAOADACABQABgDgCgGIgDgJQgDgFgMgGIgLgFQADgPAAgGQAGABAJAHIgCgOQgBgHgFgDQgFgDgQgFQgPgFgFgEQgDgHADgIIAGgOQAIACALAHIASAKQgBgQgJgUIAQgHQALgEAEADIAEAeQADgDAFgNQADgMAEgFQAUADAKAIQgFAUgbAjIgBAJQAAAJABAFIAEgFQADgEADgBIAOAOIAMgHQAHgDAEABQABAEgCAHQgCAHAAADQADgDAHgGIAKgKIgNgyQAGgDALgDIAKgCIAIAfIAQgQIAJAGQAKAHADAEQgRATgDAGQAMAAASAFQACAGgBAHIgBAMQgIAAgUgEQgSgEgLABQgIAHgIALIAGADQAEABABAEQgEACgFAGIgEAFQgLgFgGgBQgDACgEAFQgDAFgEACQADADAIABIAMADQAPgNAKgGQAOACAFALIgNAJQAOAKArgcIAKABIAHAJQAEAFABADIgQAGIgRAIQAEACAdAGQAAAGgBAJIgDAOQgHAAgKgDIgRgFQAMATAGAOIgKAFQgIADgDADQgFgHgIgRQgIgSgGgHQgGgDgTgFQAEAUAAAEQgDAAgHABQgGACgEgCIgDgQIgDgPIgNgEIgOgEIAEASQADAKAAAFIAaATQABAJgHAHQgJgEgEgEQgCAOARAMIAcARIgEAMQgDAHgGAEQgEgGgIgFIgPgKQgCAGABAMIABAUIgOAFIgHACQgDAAgDgCgAALB9QABAAABAAQAAAAABAAQAAABABAAQAAAAABABQADALgBAVIANgFIgDgqQAIACAKAHIAQALQAJgIgGgHIgRgLIgKgHQgHgEgCgEQgCgEAAgIQgBgIgCgFQADgBAIAGQAIAFADgBQAAgIgKgGQgNgHgCgEIgBgGIAAgIIgEgNQgDgIAAgFQAKAAALAEIAUAIQADALADARIAGgBQABgDgDgJQgDgIADgEQALAAAUAGQAIAGAIAPIAOAaIAJgGQgCgGgJgPQgHgMAAgBQAGAAANADQAMADAGAAQACgLgBgHIgSgDQgLgCgGgIQAFgEALgFQANgEAFgEQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgEgEIgUAMIgUAKQgEgCgNgDQgLgCgFgDQABgCAFgDQAGgEABgCIgBgCIgCgCQgHABgIAIQgIAGgFAAQgJACgdgIIAWgYIARAFQAGgDADgEQgCgDgFgBQgFAAgBgCQADgGAHgIIAMgMQAJADAVABIAMADQAIACACgBQAFgDgDgNQgFgDgLAAQgLAAgFgDQABgGAHgJIAMgNQgDgEgFgCIgEgCIgUAUIgJglIgPAGQADAGAEAUIAEAZQgHAFgJAKQgJAKgFADQgFgEABgIIACgNQgPACAIAZQgJAKgVAUIgDgbIAIgQQAHgJACgHQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgDQgGAHgHAOQgDgDgBgHIAAgMIABgVQAVgiAHgSQgJgFgEABQgGAAgEAJIgFATQgEANgEACQgGgGgBgPQgCgRgCgEIgPAHQADAHADANIAEATQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgDgCgBgDIgPgHIgPgIQgDADgGANQAIAFAQAGQARAGAHAFQgBAFAEAMQADALgCAEIgIgFQgEgEgEAAQgEAEgBAGIASAJQAMAIACAcQgkgJgJgJIgEgNIgEgIIgIgBIAFAUIgegJQgMgfgIgSIgHABQgEAAgDACQAEANARAeQgHAAgMgFQgMgFgGgBQAAAEgDAHQgDAHAAAEQAGACAOADQAMADAFAHQgaAMgLAGQABADAIAKIAlgdIAjAOIgMAIIAGAEIAFgGQAHgEAGgCQAfACANAGQAAADgGAFIgdAWQgDgEgHgBIgKgCIgGAJIALACQAGABADAGQgMAGgOARQgNgEgjgFIgCAKQgBAFACAFQAEABASgBQAOAAAGAGIgMALIgMALIAGAGIAQgNQAKgJAHAFQAAALADAZQAKgCAGgDQABgIgGgQQgIgUgBgGQAGAAAJgLQAIgKAGAAQADADABAGIABALQAGgDgBgLIgCgRQAGgEAJgLQAJgLAGgFQABADAEAmQgDAAgFAFQgGAEgDAAIAEANQADgBADgEQADgEACgCQAIAEgBAMQgBAQACAEQgIAHgHANQgLAPgGAFIADAEQABABAAAAQABABAAAAQABAAAAAAQABABAAgBIAYgaIAEABgAAJgvQgHAKAFAKIASgTIgBgKQgBgGgBgCQgDAGgKALg");
	this.shape_1.setTransform(295,-62.4,2.243,2.243);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQB/QgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgEgBIgYAaQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgDgEQAGgFALgPQAHgNAIgHQgCgEABgQQABgMgIgEQgCACgDAEQgDAEgDABIgEgNQADAAAGgEQAFgFADAAQgEgmgBgDQgGAFgJALQgJALgGAEIACARQABALgGADIgBgLQgBgGgDgDQgGAAgIAKQgJALgGAAQABAGAIAUQAGAQgBAIQgGADgKACQgDgZAAgLQgHgFgKAJIgQANIgGgGIAMgLIAMgLQgGgGgOAAQgSABgEgBQgCgFABgFIACgKQAjAFANAEQAOgRAMgGQgDgGgGgBIgLgCIAGgJIAKACQAHABADAEIAdgWQAGgFAAgDQgNgGgfgCQgGACgHAEIgFAGIgGgEIAMgIIgjgOIglAdQgIgKgBgDQALgGAagMQgFgHgMgDQgOgDgGgCQAAgEADgHQADgHAAgEQAGABAMAFQAMAFAHAAQgRgegEgNQADgCAEAAIAHgBQAIASAMAfIAeAJIgFgUIAIABIAEAIIAEANQAJAJAkAJQgCgcgMgIIgSgJQABgGAEgEQAEAAAEAEIAIAFQACgEgDgLQgEgMABgFQgHgFgRgGQgQgGgIgFQAGgNADgDIAPAIIAPAHQABADADACQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAgBIgEgTQgDgNgDgHIAPgHQACAEACARQABAPAGAGQAEgCAEgNIAFgTQAEgJAGAAQAEgBAJAFQgHASgVAiIgBAVIAAAMQABAHADADQAHgOAGgHIADADQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgCAHgHAJIgIAQIADAbQAVgUAJgKQgIgZAPgCIgCANQgBAIAFAEQAFgDAJgKQAJgKAHgFIgEgZQgEgUgDgGIAPgGIAJAlIAUgUIAEACQAFACADAEIgMANQgHAJgBAGQAFADALAAQALAAAFADQADANgFADQgCABgIgCIgMgDQgVgBgJgDIgMAMQgHAIgDAGQABACAFAAQAFABACADQgDAEgGADIgRgFIgWAYIAQAFQAQADAGgCQAFAAAIgGQAIgIAHgBIACACIABACQgBACgGAEQgFADgBACQAFADALACQANADAEACIAUgKIAUgMIAEAEQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgFAEgNAEQgLAFgFAEQAGAIALACIASADQABAHgCALQgGAAgMgDQgNgDgGAAQAAABAHAMQAJAPACAGIgJAGIgOgaQgIgPgIgGQgUgGgLAAQgDAEADAIQADAJgBADIgGABQgDgRgDgLIgUgIQgLgEgKAAQAAAFADAIIAEANIAAAIIABAGQACAEANAHQAKAGAAAIQgDABgIgFQgIgGgDABQACAFABAIQAAAIACAEQACAEAHAEIAKAHIARALQAGAHgJAIIgQgLQgKgHgIgCIADAqIgNAFQABgVgDgLg");
	this.shape_2.setTransform(295,-62.3,2.243,2.243);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#552220").s().p("AgRB2IgZgOQgggQgYgIQgGgDgfgHIgQgEQgKgDgIAAIgRABQgLACgHgDQgFgCgEgHIgGgMQgKgZAEgKQADgHAVgDQgCgeAOgXQALgQAYgQQA0gjA+ACQB/AGApA4QAQgPAZAIQAGABAOAKQASAKAIAKQAMANAAASQgUgJgVAKIgLAGQgHAFgGABQgLABgKgCQgLgCgGgGQgDgDgCgGIgCgLQgiACgVAZQgHANgEAZQgEAbgFALQgCACgGgCQABAOgJAJQgJAKgJAFQgDABgFAAQgGAAgLgEgAioA3QAYACAhALIAzAUIAVAIIATAMQAMAHAHgBQAQgBAJgQQAKgSgOgMIgcgUQgcgQgkgLQgegIgvgHIgTgCQgLgCgHAAQgLAAgJADQgNADgBAHQgCAGADAIIAGANQADAIACACQADAFAFAAIAQAAIAMgBIAEAAgAhAhxIgRABQgcAFgXANQgfARgOARQgTAYgBAgQBEABA6AQQA5ARAmAhIAJAQQAGgDACgIIADgOQAJg/AkgMQAJgDATgDIAMgCQAGgDAAgGQAAgDgDgEIgEgIIgDgEIgHgHQgPgOgQgJQgOgIglgKQgRgFgYgCIgsgDIgPACgACFg0IAGAKQACAGAAAGQgFAIgNABQgBAMAIAHQAHAEAJACQANABAOgFIAUgKQAPgGAMADQAAgNgJgJQgGgFgPgIIgTgLQgJgDgIAAQgOAAgHAKg");
	this.shape_3.setTransform(296.4,-62.5,2.554,2.554);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#552220").s().p("ABXAVQgCgGgJgFIgOgGIgKgEIgNgEIgOgDQgGgDgIgCIghgJQgdgIgIgBQgJgBgGACIgNAIQAAAEgGgBQgIAAAAgHQgBgFAEgDQADgCAEAAIAKACIAeAAIAPADIAkAMIAzAOQAcAHAOALQANAMgEAKQgMgCgDgNg");
	this.shape_4.setTransform(270.1,-43.8,2.554,2.554);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6DC9F6").s().p("AA4BSQgpghg3gSQg6gRhDgBQAAgfAUgXQAOgRAegSQAXgMAdgFIARgBIAPgCIApACQAbADARAFQAkAKAOAIQARAIAOAPIAHAGIADAFIAFAHQACAFAAADQABAGgHACIgMADQgSACgJADQglAKgJBCIgCAOQgCAHgHADIgIgPg");
	this.shape_5.setTransform(288.4,-67.3,2.554,2.554);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#209FED").s().p("AgYAhQgJgBgHgGQgIgIABgLQANgCAFgFQAAgHgCgGIgGgJQAKgQAbAIIASALQAPAIAGAGQAJAHAAANQgMgDgPAFIgUALQgKAFgLAAIgEAAg");
	this.shape_6.setTransform(340.4,-70.1,2.554,2.554);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#209FED").s().p("ABLAyIgTgMIgVgIIgygUQgggKgYgBIgQABIgQAAQgGAAgDgFQgCgCgCgIIgGgNQgDgIABgGQACgHAMgDQAJgDAMAAQAGAAALACIATACQAvAHAdAIQAkALAbAQIAfASQAOAMgKASQgKAQgRABIgBAAQgHAAgLgGgAhCgPQAIABAdAJIAhAHQAIABAGADIAOAEIANAEIAKAGIAOAGQAJAEACAGQADANAMACQAEgKgNgLQgOgMgcgIIgygNIglgLIgPgEIgeAAIgKgCQgEAAgDADQgEADABAEQAAAHAIAAQAGACAAgFIANgIQAEgBAFAAIAGAAg");
	this.shape_7.setTransform(271.8,-47.7,2.554,2.554);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#552220").s().p("AgXB9QgNgBgZgMQghgVAAgpQAEgaARgTQAEgEALgDQgEgQAEgKQgPAEgKABQgBABAAAHQAAAGgDACQgCgCABgHQAAgHgBgCIgEgBIgFgBIgBgFIAPABQgFgJAAgGQAEABACAGIAEAKIAWgFQAJgNAJgDIgDgKIgPgBQgJgBgEgDQACgFAJgDIAPgEQgDgXARgOQARgNAWADQAZACAOARQAMAQgBATQAAANgMAPIAIAKQAEAGAAAHIAVAGIAHgFQAFgCAFAAIABACQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgHgBgFAEIAJAEQAFADgBAFQgCAAgEgDQgEgCgDAAIgCAFQgBAGgCACQgFgCACgFIADgIQgFgDgQgDIgDAMQgCAGgDADIAIAIQAIAPACAGQAEANgBANQgDAYgPAPQgOAOgXAGQgPAEgNAAIgOgBgAhAAFQgKAHgHANQgHAOgBAPQgBAYARATQAUAVAoACQAlABAXgSQALgJAGgNQAIgOgCgQQgDgagQgNIgKAKQgQALgagDQgUgCgWgJQgKgIgEgJIgBAAQgBAAgFADgAgUANQABAFgDADQAcAKAXgJQAagLABgZIgJgBQgGgCABgEIAGAAQAFACACgBQAAgNgMgEIgGAEIgGADQgLAEgPgCIgNgCIAAAAIgOgEIgKgHIgDgEQgDgCgGAFQgGAEgCAEIgBAFIgDAHQgDAPAHAKQAHANANACQgEgIALgCQAEABABAEgAgcAKQgEABACAEQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgDgBIgBAAgAgmg8QAGATAPAEQAhANAYgQQAJgKAEgNQAEgPgGgOQgJgVgcgHIgJgBQgIgBgJAEQgOAEgHALQgFAFgBAHIgCANQAHgBAIgCIAOgFQAHADADAGQACAHgCAGQgDAGgNgBIgSgBIgCAAgAgVhOIACAHQACAFAAADIAEAAQABgGgCgFQgCgFgDAAIgCABgAgchIIACAIIAGgBQgBgHgFgFQgEAAACAFgAglhKIABAKIAGgBIgBgHQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDABgAgohAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBIgBgEQgDgBgGADIABAGIACAAIAGABgAhBhCIANACIAAgDIgBgEgAgNhQIAEAPQAGgDgCgGQgBgGgGAAIgBAAg");
	this.shape_8.setTransform(295,-61,3.104,3.104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525456").s().p("AgDABQgDgBADgCQACgCABABQADABABACQADABgEACIgDABQgBAAgCgDg");
	this.shape_9.setTransform(299,-88.4,3.104,3.104);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#552220").s().p("AgGABQgCgIAIAAQADAAADAHQAEAEgGADIgEABQgFAAgBgHgAgCgCQgEACACADQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgCABg");
	this.shape_10.setTransform(281.3,-28.2,3.104,3.104);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#552220").s().p("AgFABQgDgHAIgBQAFAAABAGQACAEgEAEIgEABQgDAAgCgHgAgCgDQgBABAAACQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQADADACgFQADgCgEgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_11.setTransform(278.8,-36.7,3.104,3.104);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#552220").s().p("AAAAHQgEAAgBgFQgBgCABgDQACgDADAAIAFACIABAEQABACgDADQgCACgCAAIAAAAgAAAgDIgDADIAAACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQACABACgFQACgDgFAAg");
	this.shape_12.setTransform(281.8,-44.6,3.104,3.104);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#552220").s().p("AgBAGQgEgBAAgDIgBgDIABgCIACgCQADgCACACQAEACABADQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBADgDABIgDACIgBgBgAgDAAQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQACACABAAQAEgBAAgCQgBgDgDAAIAAAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABg");
	this.shape_13.setTransform(287,-50,3.104,3.104);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#552220").s().p("AgEADQgFgGAIgCQADgCACAEQAEADgCAEQgDADgDAAQgBAAgDgEgAgBgCQgCACABACQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAAAQAAAAAAAAIgCgCIgCgCIgBACg");
	this.shape_14.setTransform(284.8,-61.9,3.104,3.104);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#552220").s().p("AAAAGQgGgBAAgFQAAgGAGAAQAFABACAFQAAAHgFAAIgCgBgAgDgDQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQABABAAAAQABABACgDQADgCgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIAAAAIgDAAg");
	this.shape_15.setTransform(287.5,-67.8,3.104,3.104);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525456").s().p("AAAADQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQACAAABACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgCAAIAAAAg");
	this.shape_16.setTransform(292.9,-76.4,3.104,3.104);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525456").s().p("AgDABQAAgCADgBQABgBACACQACACgDACIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_17.setTransform(297.5,-76.5,3.104,3.104);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525456").s().p("AgBAAQABgGADAGIgBAEIgCAAQgEAAADgEg");
	this.shape_18.setTransform(288.8,-78.5,3.104,3.104);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525456").s().p("AgBADQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAgBAAABQADABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgBgBg");
	this.shape_19.setTransform(301.1,-79.2,3.104,3.104);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525456").s().p("AgDgBQAAAAABgBQAAgBAAAAQABAAABAAQAAAAAAAAQADAAABACIAAACIAAABQgCACgCAAQgEgBABgEg");
	this.shape_20.setTransform(289.1,-90.7,3.104,3.104);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#848688").s().p("AgBAEQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgCIADgDIABAAQAEAAgBADQgCAEgCAAIgBAAg");
	this.shape_21.setTransform(281.9,-44.6,3.104,3.104);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDA6QgogBgUgWQgRgSABgXQABgPAHgOQAHgNAKgHQAGgDABABQAEAJAKAHQAWAKASACQAcADAQgMIAKgKQAQAOADAaQACANgIAPQgGAMgLAJQgVARgjAAIgEAAgAgoAtQABAJALgDQAGgCgEgHQgDgGgFAAQgIAAACAJgAgpAIQgJABADAJQACAKAJgEQAEgEgCgGQgBgGgFAAIgBAAgAglgMQgCADACAEQABAFADAAQAEAAADgCQACgDAAgEIgCgEIgEgCQgGAAgBADgAgTgeIgCABIgBADIABAFQAAADAEABQADAAADgBQADgCABgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBgEgEgBIgEgBIgDABg");
	this.shape_22.setTransform(291.9,-42,3.104,3.104);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525456").s().p("AgCABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgDACAAQAEABAAACQABACgEABIgBABQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_23.setTransform(286.8,-50.1,3.104,3.104);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#525456").s().p("AgBADQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgCgCAEgBQABAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAIgCABIgBgBg");
	this.shape_24.setTransform(286.4,-56.4,3.104,3.104);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAfQADgDgBgFQgBgEgEgBQgLACAEAIQgNgCgHgNQgHgMADgNIADgHIABgFQACgEAGgEQAGgFADACIADAEIAKAHIAOAEIAAAAIANACQAPACALgEIAGgDIAGgEQAMAEAAANQgCABgFgCIgGAAQgBAEAGACIAJABQgBAZgaALQgLAEgNAAQgMAAgPgFgAghAAQgHACAFAIQAFAIAGgHQACgFgDgEQgCgCgDAAIgDAAgAgdgLQAAAGAIACQAHABAAgIQgCgGgHgBIgBAAQgFAAAAAGg");
	this.shape_25.setTransform(294.7,-64.2,3.104,3.104);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#848688").s().p("AAAAEQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgCgCADgCQABgDACADIACACQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABIgCABIAAAAg");
	this.shape_26.setTransform(284.9,-62,3.104,3.104);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#525456").s().p("AAAAEQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAAAABgBQAAAAAAgBQAAAAABgBQACgBABABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABgCACQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIAAAAg");
	this.shape_27.setTransform(287.4,-67.8,3.104,3.104);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#848688").s().p("AAAAEQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgCAEgDQABgCADADQABAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgDABIAAgBg");
	this.shape_28.setTransform(281.2,-28.1,3.104,3.104);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E75217").s().p("AgFABIAKgDIABACIAAADIgLgCg");
	this.shape_29.setTransform(276.3,-82.5,3.104,3.104);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F28E06").s().p("AgDAEIAAgFQADgCADAAIABADQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgGAAg");
	this.shape_30.setTransform(280.9,-82.9,3.104,3.104);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAnQgPgEgGgTIAUABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABQgCAHAHgBIACgFQgCgEgCAAIABAAQAMABAEgGQADgGgEgGQgDgFgGgDIgOAFQgIACgHABIABgNQACgHAEgFQAIgLAOgEQAJgEAJABIAHABQAcAHAKAVQAFAOgEANQgDANgKAKQgNAJgRAAQgLAAgQgGgAgQAcQAAAAABABQAAABAAAAQAAABABAAQAAAAABABIAEgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgDgEAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBABAAABgAAAAYQgCABABAEQABAEAEgCQADgCgDgEQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCAAgAAJASQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIADABQABAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAQAAgEgDgBIgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBABgAABgMQgBACABADQADADADAAIACgBQAEgCgCgDQgBgCgEgBIgBgBIgEACgAgcgSQgCAFAFACQADAAACgCIABgBIgBgEQgBgDgDAAIgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABg");
	this.shape_31.setTransform(296.9,-85.2,3.104,3.104);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#525456").s().p("AgCAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCACgBQACgDADADQADADgCACQgBABAAABQgBAAAAAAQAAABgBAAQgBAAAAAAIgCgBg");
	this.shape_32.setTransform(279,-36.8,3.104,3.104);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E75217").s().p("AgCAAQgCgEAEgBQADAFABAGIgEAAIgCgGg");
	this.shape_33.setTransform(286.9,-83.5,3.104,3.104);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E75217").s().p("AgCgDQACgDACAFIABAGIgEAAIgBgIg");
	this.shape_34.setTransform(284.1,-83.2,3.104,3.104);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F28E06").s().p("AAAAHQAAgDAAgEIgDgGQADgBADAFQACADgCAGg");
	this.shape_35.setTransform(289.3,-83.5,3.104,3.104);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E75217").s().p("AgDgGQAEgBACAHQACAFgFACg");
	this.shape_36.setTransform(291.8,-84.1,3.104,3.104);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6A300").s().p("AgDCsIgBgOIgIiCQgGADgPANQgMAKgMADQgGgJAMgOQARgUABgEQgHACgXAKQgTAHgNABQgCgGAHgFIANgIQATgMALgGQgQgCgrgBIhEgEIgOgBQgKgCAAgFQgBgBA8gCIBfAAIgXgSIgSgNQgLgHAAgJQAQAEASAJIAfAQQgCgHgLgUIgHgNQgEgIgCgFQAHAAADAFIAFAJIAbAcQAEgGgBgKIAAgSQACgrAGgyIABgDIADABQAEgBACABQAFANAAAcQABAhABAKQgCAYAEAdQAHgGAMgMQAMgOAGgEQALgJAJABQAAAGgPAVQgKAPgJAKQASgIAYgHQAigLAEAFQgCAKgWAJQgVAMgMAFIBrAJQAcADADAIQgOADiIgFQAGAFATALQAWANAFAEIAGAFQADADgDADQgRgDgUgKIgigRIAMAcQAJASgDAMQgHgCgHgFQgEgEgGgLQgHgLgEgEQgLAqABA5IAAAaIAAAOQgBAHgEAJQgEgGgDgHgAgFAbQACANACA1QABAzABATQgBgaAGg+QAFg8AFAAIAOAWQALAQAHAFQABgEgJgYQgJgYAAgEQAtAWANAEIgbgSQgZgOAAgEQATgBA0ACQAzACAXgCQgmgGg/gDQgXgBgJgFQAugVAQgNQgVADgYAKQgZALgOAFQgCgGAFgIIAMgNIATgbQgHADgGAHIgKAMQgTAVgHgBQgFgBgDgaIgBgtIAAgpIAAgOQAAgLgDgBIgDBBQgBArgCATIABAGQgBADgDACQgGgDgHgLQgHgLgGgCIAIAQQAFAKAAAGQgMgEgTgKQgUgLgNgEQAHAGATAOQARANAHAJQhkABgmADICIAFIADAHIgaAOQgQAJgHAGIAbgKIAdgLQAGADgCAFQgBADgGAHIgUAcQAJgEAMgKQAOgMAGgDQAEACABAGg");
	this.shape_37.setTransform(296.5,-63.7,2.03,2.03);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F6A300").s().p("AgCgIIACAAIADAIQABAEgBAFQgHgDACgOg");
	this.shape_38.setTransform(306,-43.8,2.03,2.03);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F6A300").s().p("AgBAAQABgFAAgEQAHAEgDAFQgCAJgFABQgCgDAEgHg");
	this.shape_39.setTransform(285.7,-44,2.03,2.03);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F6A300").s().p("AgGgHIAIAHQAHADgBAFQgTgIAFgHg");
	this.shape_40.setTransform(323.8,-51.6,2.03,2.03);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6A300").s().p("AgDAAQAFgHAHgBQgBAGgFADIgJAIQgFgEAIgFg");
	this.shape_41.setTransform(274.9,-50,2.03,2.03);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F6A300").s().p("AgJAAQADgFAIADQAJACgCAEQgJgBgJgDg");
	this.shape_42.setTransform(328.2,-57.9,2.03,2.03);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F6A300").s().p("AgLABQAEAAAHgCQAGgDAFgBQACADgBACQgMAGgEAAQgGAAgBgFg");
	this.shape_43.setTransform(268.1,-58.9,2.03,2.03);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F6A300").s().p("AgJAAQADAAAGgBQAHgCADAAIAAADQgEAEgGAAQgGAAgDgEg");
	this.shape_44.setTransform(328.3,-74.3,2.03,2.03);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F6A300").s().p("AAAACQgJgCgBgCQASgCADAGIgGABIgFgBg");
	this.shape_45.setTransform(267.2,-76.7,2.03,2.03);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F6A300").s().p("AgJAIQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQABgDAHgEQAHgEACgDQAJAEgKAFQgGAGgIAAIgBAAg");
	this.shape_46.setTransform(321.8,-84.1,2.03,2.03);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F6A300").s().p("AgJgEQAGAAAFAEQAHABABAEIgBAAQgLAAgHgJg");
	this.shape_47.setTransform(275.9,-86.5,2.03,2.03);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F6A300").s().p("AgBAIQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIADgPIAAAAQAFADgBAFQgBAFgDAEQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_48.setTransform(310.4,-90.3,2.03,2.03);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F6A300").s().p("AgEgHQAEACABAFIAEAIQgIgCgBgNg");
	this.shape_49.setTransform(287.6,-91.1,2.03,2.03);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEF59B").s().p("AgFBlQgCg1gBgNQgCgGgEgCQgFADgOAMQgNAKgIAEIAUgcQAFgHABgDQACgFgGgDIgcALIgbALQAHgHAPgJIAagQIgDgFIiHgFQAlgDBkgBQgHgJgRgMQgTgOgGgHQAMAEAUALQAUALAMAEQAAgHgGgKIgIgQQAGACAHALQAIALAFADQAEgCAAgDIAAgGQABgSACgsIADhBQADABAAALIAAAPIAAAoIABAtQACAaAFABQAHABATgVIALgMQAGgGAGgDIgTAaIgLANQgFAIABAHQAOgGAagLQAYgKAVgDQgQANguAVQAIAFAXABQBAADAlAFQgXACgzgCQgzgBgUABQAAACAZAQIAbASQgMgEgtgWQgBAEAKAYQAJAZgBADQgIgEgKgRIgPgVQgEgBgGA8QgFA+ADAaQgEgTgBgzg");
	this.shape_50.setTransform(297.2,-65.4,2.03,2.03);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1B7A9F").s().p("AAdB7IgJgEQgHgDgHgIIgJgNIgLgIQgOgQgNgfQgHgeAFgsIAAAAIAAAAQAAABgLgEQgIgFgCgDQgHgKADgRQAFgaAdgLQAdgLAFAdQAUgLAogFIgGgHQgCgFACgEIADAAQABAFAFAFQAFAFACADQgFAFgKABIgSABQgKACgOAGIgUAJQgCgDADgCQADgDAAgCQAAgEgDgEQgDgEgDgBQgLgEgQAHQgOAHgFAJQgKATAIAOQAHAPASgFQACAEgFAFQgCAEgBAXQAAAGABAOIACATQAWA5A1AfQgBADgEAAIgDgBg");
	this.shape_51.setTransform(274.4,-67.3,2.514,2.514);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B7A9F").s().p("AgCgHQgIgFAAgFIACgCIACAAQAJALAHARQADALgGAAQgFgUgEgHg");
	this.shape_52.setTransform(300.1,-28.7,2.514,2.514);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1B7A9F").s().p("AgEgGQAEABABAFIADAHQgIgFAAgIg");
	this.shape_53.setTransform(303,-32.3,2.514,2.514);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1B7A9F").s().p("AgMASIAEgDIAJgQQAHgLADgJQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgLAWQgGAOgJAGQgCgCACgDg");
	this.shape_54.setTransform(308.2,-29.8,2.514,2.514);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1B7A9F").s().p("AAOARIgEgEIgRgPIgJgHQgEgEACgEIACAAIATARIAJAIQAGAFACAFIgDAAIgDgBg");
	this.shape_55.setTransform(293.7,-33.2,2.514,2.514);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B7A9F").s().p("AgEAPQgCgPAHgOIAEACQgFAUAAAFIgDACIgBAAg");
	this.shape_56.setTransform(307.4,-34.5,2.514,2.514);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B7A9F").s().p("AAAAFIgKgIQgGgFABgHIACAAQANAQAFAFIAHAEQAEADAAADIAAAAQgHAAgJgLg");
	this.shape_57.setTransform(286.7,-36.8,2.514,2.514);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1B7A9F").s().p("AgFANIAFgLIAJgaIACAAIAAACQgCAQgJATQgGALgEABQABgEAEgIg");
	this.shape_58.setTransform(314.5,-34.9,2.514,2.514);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1B7A9F").s().p("AgCAHIACgHQAAgFADgBQAAAFgBADQgCAFAAAAIgCAAg");
	this.shape_59.setTransform(312,-40.5,2.514,2.514);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1B7A9F").s().p("AgFgKIACgBIAFALQAEAHAAAFQgLgDAAgTg");
	this.shape_60.setTransform(295.1,-40.3,2.514,2.514);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1B7A9F").s().p("AgBADIgEgQIABgBIACgCQACAGACAPIAEAHQACAEgEABQgEgEgBgKg");
	this.shape_61.setTransform(301.6,-41,2.514,2.514);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1B7A9F").s().p("AAAADIgHgIIABgCQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABIAGAIQAFAEABAGQgGgBgCgGg");
	this.shape_62.setTransform(283.5,-45.4,2.514,2.514);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1B7A9F").s().p("AgEALIAEgLIADgMQADgIAEgDQgIAigLANQAAgFAFgIg");
	this.shape_63.setTransform(320.6,-41.7,2.514,2.514);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1B7A9F").s().p("AAAADQgEgEgDgBQABgDAAgDIADABIADABQAAADAEADQAFAEgBAFQgEgCgEgEg");
	this.shape_64.setTransform(276.7,-45.9,2.514,2.514);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1B7A9F").s().p("AgCAAQABgIADgBIABAAIgBALQgCAIgBAAQgCgDABgHg");
	this.shape_65.setTransform(310.2,-46.2,2.514,2.514);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1B7A9F").s().p("AgHgJQABAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIACAAIAGAMQAGAGgBAHQgHgEgIgSg");
	this.shape_66.setTransform(288.1,-48,2.514,2.514);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1B7A9F").s().p("AgBABQgDgGADgFIABAAIADAKQACAHgCAEQgDgEgBgGg");
	this.shape_67.setTransform(295.9,-48.8,2.514,2.514);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1B7A9F").s().p("AgCAAIACgRIACAAQADAHgFAQIABAGQAAAEgBACQgEgHACgLg");
	this.shape_68.setTransform(305.8,-46.9,2.514,2.514);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1B7A9F").s().p("AAIgSQgBAJgHANIgBAJQgCAFgEABQACgZANgMg");
	this.shape_69.setTransform(315.4,-48.3,2.514,2.514);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1B7A9F").s().p("AAAAAQAAgHAFgCIgDALQgCAHgEABIAEgKg");
	this.shape_70.setTransform(320.5,-50.9,2.514,2.514);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1B7A9F").s().p("AgHASIAEgGQADgXAGgNIACgCIACACIgBACIgHAaQgDARgIAFQAAgDACgFg");
	this.shape_71.setTransform(325,-47.3,2.514,2.514);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1B7A9F").s().p("AgBgBQAAgJACABIABAKQABAHgDACQgBgEAAgHg");
	this.shape_72.setTransform(298.9,-54.2,2.514,2.514);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1B7A9F").s().p("AgEgHIABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABABIAEAIQAEAGgCAEQgFgEgEgNg");
	this.shape_73.setTransform(272.8,-55.1,2.514,2.514);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1B7A9F").s().p("AgCAAQgEgFAEgEQAEAIADAKIgEABIgDgKg");
	this.shape_74.setTransform(279.2,-55.2,2.514,2.514);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1B7A9F").s().p("AgCAAQACgHAEgDIgCAKQgCAIgBADQgDgEACgHg");
	this.shape_75.setTransform(310.1,-54.8,2.514,2.514);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1B7A9F").s().p("AgCAAQgBgFADgBIACAGQACAGgDABQgBgCgCgFg");
	this.shape_76.setTransform(289.8,-58.1,2.514,2.514);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1B7A9F").s().p("AAAAAQgBgEABgCIABAAIABAHQgBADgBADIAAgHg");
	this.shape_77.setTransform(315.8,-59.2,2.514,2.514);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B7A9F").s().p("AgBAAQABgHACgBQACAQgEACQgCgFABgFg");
	this.shape_78.setTransform(325.5,-60.1,2.514,2.514);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0E4257").s().p("AgCAEQgDgCAAgCQAAgCADgCQADgDADAGQADAEgFACIgCABQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_79.setTransform(305.2,-80.4,2.514,2.514);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0E4257").s().p("AAAAGQgFAAgBgFQAAgCADgDQACgCACABQADABACADQACABgBACQgCAEgFAAIAAAAg");
	this.shape_80.setTransform(292,-80.6,2.514,2.514);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1B7A9F").s().p("AgCAVQgWANgTgOQgTgPANgVQgJAAgDgBQgDgCgCgHQACgEADABQACAHAKABQAYACAbABIAyAAIAHgBIADgFQACgDADAAQgBAGgDAEIgIAHQAHAJgHAJQgGAMgMABQgEAKgQAAQgPAAgEgKgAABAQQAAAHAOACQAMABAGgFQgDgHgMgCIgFgBQgHAAgFAFgAgwAFQAHAQAXgCQAVgBAAgSIAAgJIgDgCIgugEQgDAIABAMgAAQgKIgBAIIAAAHIALAEQADAAACADIAEADQALABAFgLQAFgIgJgIIgfABgAAKAGQgBgCABgFIACgJIgFAAQACAAgDAQIAEAAIAAAAg");
	this.shape_81.setTransform(296.6,-80.7,2.514,2.514);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1B7A9F").s().p("AgFARQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgEACgGQAIgMACABIAAAAIAAAAQgDgCgDAAIgKACQgCgFAGgDQAHgCADABQAFABAEAGQACAGAAADQABAGgEAEQAAABgBAAQgBABAAAAQgBAAAAAAQAAgBgBAAQAAgCACgDQAEgFgDgBQgCgBgFABQgDACAAAEIAAAFQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_82.setTransform(264.9,-86,2.514,2.514);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1B7A9F").s().p("ABzBQQADgJABgEQACgLgBgTIgCgcIgoAIQgYAFgPAAQhBABhWgQIgGAAQgEAAgCgCQAAgBACgEIALABIALADQgCgGAJgIQALgEAIAHQAIAGgEAKQAWAEAXABIApABIAXABQAOgBAKgDIAAgMQAEgEAOgBQAAgQgLgTIgMgNQgJgIgHgDQgLgFgPgDQgPgDgGACQAAgFADgGQACgIADAAQABADgCACQgCAEAAACQAsAFASATQAFgUAOgBQAPAAAKAOQAJAMgBAPQgBALgIAHQgIAGgLAAQABAIABACQAEgBADABIAFADIAAADQAAAAAAABQAAABAAAAQABABAAAAQAAAAABAAQAIAAAOgEIABAmQAAAWgEALIgDALQgCAHgEACQgBgFAEgIgABDACIAAAGQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAQgCQAJgBAEgDQgBgGgKAAIgSACgAhdgEQgDACAAAHIAVADQAFgGgGgDQgGgEgGAAIgFABgABRggQAEAGgBAHQADgCAFAAIAIgBQAJgDAAgOQABgNgHgIIgIgFIgIgFIgQABQgEAFgBAHQAAAJAHABQACgHAIgDQAIgEAIAEQAEAIgDACQgMgHgHADIAGAJIAFACQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABAGgKgDIgKgKIAFAMg");
	this.shape_83.setTransform(299.8,-74.7,2.514,2.514);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1B7A9F").s().p("AgBgBQABgHADgCIgBAKQgBAJgDACIABgMg");
	this.shape_84.setTransform(297.3,-97,2.514,2.514);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1B7A9F").s().p("AAHAMIgCgDQgCAFgCAAIgHgNQgGgFAFgGQAEAHAJALIgDgKQgBgJAFgDIACAOQACAKgDAFIgBgDg");
	this.shape_85.setTransform(292.7,-97.5,2.514,2.514);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKAEQAAgGACgDQAIgCAHAFQAHADgFAGIgTgDg");
	this.shape_86.setTransform(278.2,-74.4,2.514,2.514);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgNACIABgFIAPgBQAKAAABAEQgEACgJACIgNABQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_87.setTransform(320.3,-73,2.514,2.514);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AABANIgCgDQgDgCgCgBIgLgEIAAgGIABgJIAdAAQAJAHgFAJQgFAJgJAAIgCAAgAgCgEQgCACAAACQAAACACACQACADACgCQAGgCgDgEQgCgEgDAAIgCABg");
	this.shape_88.setTransform(305.2,-80.4,2.514,2.514);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F5C4DC").s().p("AgBAGQgNgCAAgFQAGgGAJACQAMACACAFQgEAEgJAAIgDAAg");
	this.shape_89.setTransform(301,-76,2.514,2.514);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgZADQgBgMADgIIAuAEIADACIAAAKQAAARgXABIgDABQgSAAgHgPgAAAgFQgBACAAADQABAFAEAAQAGAAACgEQABgBgCgDQgCgCgDgBIgCAAIgEABg");
	this.shape_90.setTransform(290.7,-80.3,2.514,2.514);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAbBoIgKgZIgThFQgBAMADASIAFAeIAEAYIADAMIgFgJIgVgwQgUglgCgOQABAmAcBCQgNgSgQgiQgTgngJgNQACAIAIAUIAIAaQAGARACAJQgkgxgRgpQgBAHADAKIAFAUQAFAUAFAIIgYghQgPgUgBgPQAAgHACgJQADgLAFgDQACgCAFAAIAHAAQAFgCABgEIAQgFQAIgCgCgHIgEgHQgCgEACgDQADgCAVAHQAAgEgKgJQgJgJACgHQAJgBALAIQAOAKAFACQgPgWABgNQAIADAJAMQALAPAEADIgJgSQgGgLABgHQAIAFAIAOQALAQAEAFIgGgTQgFgLABgIQAMAKAPAeIgFgWQgEgNABgIQAFAFAGAKIAJAQIACgKQACgHADAAQAFAAAEAKIADAOIAKABQAAAGgEAJQgBAFALAAIgJAJQgGAGgCAEQgDAIAYgCQAagDACACQACACABAIQADATgFAZIgEAVQgCAMgGAHQgBgHACgXQABgTgDgJIgEAtQgBAKgFASIgHAbIADgvQACgcgEgSQgFATgFAqQgJAogFANIACg5QgBgigHgWQABAYgFAlIgIA9QgDgKgBgRIgCgbQgDgigDgRIgDgNQAAASAEAsQACAkAAAWQgBgIgEgOg");
	this.shape_91.setTransform(297.3,-60.4,2.514,2.514);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B3E2FB").s().p("AAXCWQgCgHgCgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAABgBAAIgDABQgDAAgEgGIgGgKIgIgIIgIgGIAAAFQgBACgagOIAAACQgDABgDgDIgGgEIgLgHQgNgHgFgHIgHgIIgHgHQgMgMgCgGIgRgjIgDgQIgBgUQAAgJACgIIADgHIAAgHIgCgEIADgGIAPgUQALgQAHgEIATgJIAMgEIAMgCIASgFIAGgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIgDgEIgCgFIAEADQABABAAAAQABABABAAQAAAAABAAQAAAAABAAIgEgKQADAAAFAFQAFAFADAAQABgNACgDQAFADAEAOIAEgGIAAgCQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIABAFIgBAGIAIgJIgFAQQAKgCAOAEIAXAKQALAEALAMQADACAFAIIADAGIADAGQADAGAAAGIAAAHIACAFQAFAAADAHQABAEADACQAEACAEgDQAJgDADADQACACACAKIABARIgBAPQAAAVgIAQIgDAEIgCgDQgFAOgFAJIgFAJQgEAGgCACIAAgHQgDACgCAHIgHAMIgDAHQgCAEgDACIgHAHIABgIQgDAKgSARQgEAHgCgBQgBgBAAgFIAAgGQAAABgEAFIgBAFQgDAIgJAEIgDACIgCgDg");
	this.shape_92.setTransform(297,-61.8,2.514,2.514);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ah/AhQgFgEgEgHQgEgIAAgHQAAgLAKgMQAKgLANgEQAQgFAIAHQAFAFACADIAAAIQABAEABACIAKACQAJACAMgBIAegCQAPgBAMABQAVADASAGQAKAEADAAQAIgBAJgGIAFgCQACgBAAgEQABgJAFgGQADgFAKAAQAJgBAFAEQARAPABAJQAAAJgEAIQgDAGgLADQgFABgGgBIgLgCIgWgCQgHAAgLADIgTADQgSADgYAAIgsgDIgWABIguAGQgMAAgDgCg");
	this.shape_93.setTransform(293.1,-86,2.514,2.514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},5).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(221,-110,148.4,94.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.g_torse = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAQhRQATgUATgbQAKgOAPgWQAFAFALAbQAPAiADAFQACAFARAWQANARgBAHQAfg8Aig8AB5C1QAIgjAAgHAhDg2QgthIAAgGQgPAQgmA+QgBgFAAgEQAAgiACgjQADgiAAgOAAECoQgEghAAgCAjQCoIASAAIAYADQAFAAAUgBQAUgCAKAAQAFAAAGAAQAEgIgBgQQgDgcAAgCABcC1QiJgMg3gB");
	this.shape.setTransform(-6.1,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AiYDxIhzgHIASjqQANihAOgvQAYgKAKACQAKACALgBQALAAAcBZQAcBYAQAeQBchqAegeQBChCA8glQAjAsADAKQA1AIALAWQAMAag4BxQg4BwgIAfQgGAVgGAoQgEAdgGALQgQAchVAAQhKAAhxgHg");
	this.shape_1.setTransform(-0.5,-5.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-28,-30.1,54.4,49.7);
p.frameBounds = [rect];


(lib.g_sourcil = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgmAEQAQgFAWgBQAKgBAdAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-4.9,-1.4,9.9,2.8);
p.frameBounds = [rect];


(lib.g_oeil = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgQgBQATAGAOgF");
	this.shape.setTransform(0.2,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAOggQAkAHABASQACAQgCAFQgCAFgYAKQgXAJgIgMQgLgMADgJQACgIAFgKQAEgJARgKgAAUAIQABgJACgEAgzAEQAJgSARgIQAQgIAXgC");
	this.shape_1.setTransform(-0.4,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.6,-5.8,12.5,11.5);
p.frameBounds = [rect];


(lib.g_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AgtByQgBgPgBgQQgCgYgDgQQgGAAgQgIQgZgLgPgLQgPgLAFgFQAEgHAgAJQAfAGAKAFQgBgFgOgSQgOgVgLgVQgMgWAXABQABAAADABQAIAEAVAbQAUAZACAGIABABQgHgIgFgpQgFgqAGgEQAGgEAIgBQAGgBAFACQABABADADQACADACARQAEASANA8QACgHAEgdQAFgeAEgHQAEgJADgFQADgFAFgBQAFgCADAMQAEALgBAJQAAAJgDAWQgCAVgBAmIgBACQAQgUAWgIQATgGANAHQAHAEgGAJQgFAJgdAOQgdAOgGALQgDAGAAATQAAAGAAAJ");
	this.shape.setTransform(-0.5,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAgBjQAAgIAAgGQAAgBAAAAIAAgBQADgMADgMQADgMAKgPQALgOAMgVQANgXgEgZQgaAHgEAHQgFAHgWAeQgJgqACgrQABgsgUAbQgJAHgCAjQgCAiADANQABABAAACIgBgBQAAgBAAgBQgHgQABgUQAAgVAEgXQAEgXgKgBQgKgCgTAjQgDAGAAAOQgBAcACAcQAAAEgBACAgvhUQgfAIgEAgQgEAfAOAzQABALACANIgCgLQACAMACASQADARABAUAhIAmQAAAFABAHIAAAB");
	this.shape_1.setTransform(1.5,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("ABPBNQAAgQgBgTQgCgUAIgKQAIgKALgNQAKgPADgLQACgMgMABQgMAAgwArQgPgIgKgIQgKgIgOgZQgRgYgQgOQgRgOgKAAQgCAAgCACQgCADAAABQAAAgA6AvQgigOgJgEQgZgOgMAFQgMAEgEAGQAGAKAgAOQAZAKAFAEQgJgEgPgEQgPgFgJABQgKABgEAEQgjAYA0AHQAmAFATANQAIAPABASQAAAQAAAQAAugFQgHgDgNAEQgIADgHAB");
	this.shape_2.setTransform(-3.2,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AgTgfQADAJAAAIQAAADgBACQgKARgLgFAAcBiIAAguQATgFAWgPQAVgQAAgUIgCgLIgEgBQgQAAgXARQgSAOgJgCQgGgcADgzQACg0gYgGQgagHAOBkAg2gnQAGgHAKAAQAOAAAFAPAhFB9QgCg0AAgKQABgLgEgHQgFgHgFgRQgGgRABgPQACgRAFgIQAFgIAGAAQAGAAAFACQAFACABABAg5AKQAOgHAAgNQAAgRgLgM");
	this.shape_3.setTransform(1.9,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-14.2,27.4,24.9);
p.frameBounds = [rect, new cjs.Rectangle(-7.9,-15.2,18.9,25.8), new cjs.Rectangle(-15.9,-13.1,25.4,23.6), new cjs.Rectangle(-8.1,-16.8,20.1,27.2), null];


(lib.g_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgLgXQABADAWAs");
	this.shape.setTransform(10.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAngaQAAABAAABQAAAFACALQADAPAIAGQA0gRAAgSQAAgCgGgIQgHgIgEAAQgHAAgjALQgDABgDABQgKADgKAEAA0ANQgHACgIADQgZAHgQAFQgdAIgLADAhngOQAaAGAegDQARgCAegDQAFAAAOgEAgEAeQATgnAEgL");
	this.shape_1.setTransform(-1.5,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAFIgCgPIAAgCIAAAAIAGgCQAhgMAHAAQAEAAAHAJQAGAIAAACQAAAPgyATQgHgGgEgQg");
	this.shape_2.setTransform(5.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("ABVgMQglAMgKADQgPAEgGABQgdADgRABQgeADgZgF");
	this.shape_3.setTransform(-2.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgHgPQAFALAKAU");
	this.shape_4.setTransform(10.3,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgMgdQAMACANA4");
	this.shape_5.setTransform(10.5,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AANgXQAKgFAKgEQABgDASgLQASgLAIADQAHADAHAMQAGAKAAAWQAAAUgzAQQACgYgGgOQgGgQgCgCQgCgDAAgBAAvAdQgCABgKAEQgLADgiAIIgkAKAANgXQgNAFgFABQggAEgQACQgfADgNgDAANgXQgEAOgTA2");
	this.shape_6.setTransform(-0.8,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVACQgGgNgCgDIgCgEIAAAAQACgEASgLQAPgKAIADQAIADAGALQAGALAAATQAAAWgxAQQACgYgGgQg");
	this.shape_7.setTransform(5.7,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgJgMQAUgCgCAb");
	this.shape_8.setTransform(9.5,-2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.5,1,1).p("AAVgPQACAAACgBQAKgEAIgCQASgGAFAAQAEgBAIAEQACACACACQgEAFgMAGQgLAFgUAFAAVgPQAAAAgBABQgKADgKAEQAAABgDABQgFAGgJAOQgBABgBACQABAAABgBQARgFAVgHQAIgCAGgDQgHgBgFgJQgBgDgBgCgAgDgFQgKACgQADQgdAIgXgBAgTASQgcAJgKAD");
	this.shape_9.setTransform(-0.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAGIgBgEIADgBIASgFQAQgFAGgBIAAAAIAAAAIAAAAIAEABIAEABIABABIABAAIABABIAEADQgEADgLAGQgMAGgSAHQgHgDgFgKgAgggCIAAgBIAAgBIAFgBIASgHQAQgFAGgBQAEAAAHAEIAFAEIABAFIgCACIgEgDIgBgBIgBAAIgBgBIgEgBIgEgBIAAAAIAAAAIAAAAQgGABgQAFIgSAFIgDABIgCgEgAAcgDQACAAAAgBQABAAABAAQAAgBABAAQAAABAAAAIgBAEgAAcgDIAAAAg");
	this.shape_10.setTransform(4.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.9,-6.3,25.8,12.6);
p.frameBounds = [rect, new cjs.Rectangle(-11.7,-4.4,23.8,7.4), new cjs.Rectangle(-11.6,-7.3,24.6,14.7), new cjs.Rectangle(-10,-4.6,21.5,10.3)];


(lib.g_jambe2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgXiIQAGBAAJAxQALBMAVBU");
	this.shape.setTransform(-3.4,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiUAhIgggIIgNgDIAYAHQgRgEgKgEIgCgBIAAAAIgIgNQAGgIAhgHQAigJAZAAQAjAAAcgGQAegHAEAAIAHADIAAAAIAAgBQAqgIAlABQAkABATgCQATgCAZABQAYABAJACIgCASQgBARgJAbQgKADgRAAQgLAAgQgCIgbgEQAEgHAAgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQgCgCgGAAIgJABQgcACg5AOQhCAQggAAQgbAAgmgFgAjGASIACABIgCgBg");
	this.shape_1.setTransform(-0.4,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF007D").s().p("AhzA2QgIgxgHg+IAEAAIAAgmIAEAAIAAgpIgEAAIAAggQAJgRAVgdIABgBIDSAAIgDA3QgCApAAAVQAAAlALBpQAHBLACAuIABATIgBAZQgJgCgYgBQgYAAgTACQgTABgjAAQgkgBgsAIQgVhUgOhOg");
	this.shape_2.setTransform(7.3,-0.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-21.1,-22.1,41.6,50.1);
p.frameBounds = [rect];


(lib.g_jambe1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF007D").s().p("AhwCFQgGhHAAhcQAAhHALhCQAMhOATAAQAeAAAqAQQBWAiAlALIgKBKQgIA6AAAtQAAAiAGB7IgBAsIAAAuIgCgGIgCgDQgCgEgFgCIgbAFIg0AEIgsAEIgHACIgBAAQgTAEgcACIgIAAQgPgsgGhFg");
	this.shape.setTransform(8.3,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAuQgggBgugGQgvgGhRgjQAegfAsADQAtACAYADQAYADAsgBIAHgBIAIAAQAcgCATgEIABAAIAHgCIAugEIA0gEIAbgFQAFACACAEIACADIACAGIACAEIAIApIgJABQglgBgPADIhNASQg0AKgcAAIgDAAg");
	this.shape_1.setTransform(-1.5,24.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-22.9,-27.7,43.2,56.5);
p.frameBounds = [rect];


(lib.g_bras2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF007D").s().p("Ag2BtQgLhiAIhmIADg/QACgwA5ARQA5AcAAA1IgHBoQgBAkgFAdIgKBCQgGAkglAUQgGADgGAAQgdAAgJhRg");
	this.shape.setTransform(-1.3,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-7.5,-19,12.5,38.2);
p.frameBounds = [rect];


(lib.g_bras1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF007D").s().p("AgcC2QgOgNgHgRQgHgRAHhvQAIhtADgoQAEgpAGgLQAIgOARAAIATADQADAAADACIAGABQACAAADACQADACACAAQADAAAAAIIgBAMQAEASAAAFIADAYQAAAJADAQQADARAAAOIgDBSQgZCFgFAEQgFAEAAAGIgCAIQgDABgIAEIgLAHIgCABQgGAAgLgKg");
	this.shape.setTransform(2.2,0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3.2,-18.5,10.8,38.5);
p.frameBounds = [rect];


(lib.LM_TEXTE = function() {
	this.initialize();

	// Calque 1
	this.texte_LM_TEXTE = new cjs.Text("Ecris ton texte ici !", "12px 'Arial'");
	this.texte_LM_TEXTE.name = "texte_LM_TEXTE";
	this.texte_LM_TEXTE.lineHeight = 14;
	this.texte_LM_TEXTE.lineWidth = 271;

	this.addChild(this.texte_LM_TEXTE);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,275,57.4);
p.frameBounds = [rect];


(lib.PREV_FONT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{E1:0,E2:5});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("ABahHQgBgiACgYQhdA7hYBGQBTBPBcAzQACgRABgPQAAgQAAgVQAAgVABgXQABgVAAgRQAAgRAAghg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AhZAAQBXhGBcg7QgBAYABAiIAAAyIgBAmIgBAsIAAAlIgEAgQhbgzhShPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},5).wait(5));

	// E2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("ABahHQgBgiACgYQhdA7hYBGQBTBPBcAzQACgRABgPQAAgQAAgVQAAgVABgXQABgVAAgRQAAgRAAghg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CC5").s().p("AhZAAQBXhGBcg7QgBAYABAiIAAAyIgBAmIgBAsIAAAlIgEAgQhbgzhShPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.1,-14.1,20.2,28.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.NEXT_FONT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AhYgQQgBAVAAARQAAARAAAhQABAigCAYQBdg7BYhHQhThOhcgzQgCARgBAPQAAAQAAAVQAAAVgBAXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AhZBIIAAgyIABgmIABgsIAAglIAEggQBbAzBSBOQhXBHhcA7QABgYgBgig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},5).wait(5));

	// E2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AhXhhQAAAQAAAVQAAAVgBAXQgBAVAAARQAAARAAAhQABAigCAYQBdg7BYhHQhThOhcgzQgCARgBAPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CC5").s().p("AhZBIIAAgyIABgmIABgsIAAglIAEggQBbAzBSBOQhXBHhcA7QABgYgBgig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.1,-14.1,20.2,28.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.miniZONE_T = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2F2F").ss(1.5,1,1).p("AJ7ADQhxgDhyAAQhxAAhcAAQhcgDhdACQhbABgCAAQgzAAhrAAQhsgChmACQhmABhZgB");
	this.shape.setTransform(0.2,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A09D").s().p("AGfA9QhxABhkgCQhjgChbAAQhZAAgYABQgZAChsAAQhsAAhkgCQhkgDhaAHIgFgLIACghQABgTALgTQASgjAqgBIAVgBIAPAAQAEAAAmgHQAngHAaAEQAaADA/gCQA/gCBpAEQBoADCLgBQApACBEgCQBFgDA9ACIAVAAQApgJB5AHQA4ADAPACQAMAAAKAEQATAIAGAKQAGAKAEAKQAEAKACANIAAAHIACA3QhugHhxAAg");
	this.shape_1.setTransform(0,-0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-64.3,-7.1,129.1,14.8);
p.frameBounds = [rect];


(lib.CORPS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgaAAIA1AA");
	this.shape.setTransform(-0.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("AAAhDQgcgGgTAPQgWASAAApQAAAaAVAVQAWAWAaAAQAfAAATgOQAUgRAAgjQAAgWgVgWQgWgUgbgHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3CC5").s().p("AgwAwQgVgVAAgaQAAgpAWgSQATgPAcAGQAbAHAWAUQAVAWAAAWQAAAjgUARQgTAOgfAAQgaAAgWgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// E2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgaAAIA1AA");
	this.shape_3.setTransform(-0.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#262627").ss(2,1,1).p("AAAhDQgcgGgTAPQgWASAAApQAAAaAVAVQAWAWAaAAQAfAAATgOQAUgRAAgjQAAgWgVgWQgWgUgbgHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF007D").s().p("AgwAwQgVgVAAgaQAAgpAWgSQATgPAcAGQAbAHAWAUQAVAWAAAWQAAAjgUARQgTAOgfAAQgaAAgWgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-8,16.2,16.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CORPS_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgeIAAAeIAnAAAAAAfIAAgfIgmAA");
	this.shape.setTransform(0.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("AAeg/QgvgaggAhQghAhAHAgQAGAhARARQAQARAfgBQAdgBAagVQAagVACgiQABgkgxgZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3CC5").s().p("Ag0A7QgRgRgGghQgHggAhghQAgghAvAaQAxAZgBAkQgCAigaAVQgaAVgdABIgDAAQgdAAgPgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// E2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgeIAAAeIAnAAAAAAfIAAgfIgmAA");
	this.shape_3.setTransform(0.3,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#262627").ss(2,1,1).p("AAeg/QgvgaggAhQghAhAHAgQAGAhARARQAQARAfgBQAdgBAagVQAagVACgiQABgkgxgZg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF007D").s().p("Ag0A7QgRgRgGghQgHggAhghQAgghAvAaQAxAZgBAkQgCAigaAVQgaAVgdABIgDAAQgdAAgPgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.8,-8.6,17.6,17.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.g_rondbt = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgaQAcgZAEgrQAEgpgcgjQgdgjgsgFg");
	this.shape.setTransform(0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAZQgcAagqAAQgnAAgfgfg");
	this.shape_1.setTransform(0.1,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.7,22.7,23.2);
p.frameBounds = [rect];


(lib.g_rappelpictos = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("ANg5GQALDOgHDPQgGClgDClQgEChgBChQgBCdAACeQAAC/AGC9QADBuACE5QACBCABBDQABAgAAAgQACBVACEhQAEB3AFB2QAGCKgUCJQgXCgiOBIQghASgoAFQjRAUjQgBQjSAAjQAGQgfAAgfABQiyACixgIQiogLgsifQgdhqgChvQgDjIgBjIQgBjXAAgMQgBhpAAhqQgBhDAAhCQgBj5AAguQgBjYgEjZQgDjEABjEQAAi6AIixQAGiygIjKQgKjLAJiOQAIiOAFgUQBFhzCOgPQC/gSDBAKQASACASABIGjgIQDMgBB0gDQB0gEBSAaQBSAaAkBfQAkBbAFBkg");
	this.shape.setTransform(-15.2,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCC2B9").s().p("ApvePQiogLgsifQgdhqgChvQgDjIgBjIIgBjjIgBjTIgBiFIgBknQgBjYgEjZQgDjEABjEQAAi6AIixQAGiygIjKQgKjLAJiOQAIiOAFgUQBFhzCOgPQC/gSDBAKIAkADIGjgIQDMgBB0gDQB0gEBSAaQBSAaAkBfQAkBbAFBkQALDOgHDPQgGClgDClQgEChgBChIgBE7QAAC/AGC9QADBuACE5IADCFIABBAIAEF2QAEB3AFB2QAGCKgUCJQgXCgiOBIQghASgoAFQjRAUjQgBQjSAAjQAGIg+ABIhEABQiQAAiPgHg");
	this.shape_1.setTransform(-15.2,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AIlA0QgDANAAATQAAAZACA0QgHgDgTgMQgMgJgRgMQgrgdgDgCQAAAIgJAAQAAADgPA0QAIACAHAEQASAHAQAIAIlA0QgUgTgHgIQgCgCgBgBQgGgJABgMQACAAAGgBQABgBABAAQAHgFANAAQAVAAAAAAQAQAFAAAXQAAAMgEADQgEAEAAACIgVAAQgBAAAAABQgBAEgBAEgAGKD+QAHgWAMgpQAGgTAEgPQgRgHgTgGQgUgFgNgEQgTgGgHgCAGKD+IA1AAIAAAZIhuAJQAGgKACgHQAFgNAEgEgAl8jyQgEAAgCAAQgEgBgBAAQgFgDgHgVQASgUAUAAQAWAAAHAcQgKALgCABQgIAFgNAAQgFAAgEAAgAmKjNQAIgeAAgHIAGAAAjRjpQgKADiTAVQgPACgNACQgKAkgUBDQgEANgEAMQALgBAMgBQB8gPARgEAkaDuQAKguAui3QgJAFgRAEQgXAFgKADIixAAQAAgEAehjQhwAMgkAAAiOgfQgSAXgHACIAAAPQADAAAPAFQAPAEAJAAQAAgCABgCQADgFAFAAQgCgIgDgFQAAgBAAgBQgIgQgNgJgABwgwQgDgFAAgDQAOgHANgHQAFgDACAAQAIAIAAAaQgFAAgCAEIgBAEIgZAAQAAgEgFgIQgBgDAAgCIgkAAQg0ANgeAIIAAAAQgVAFgOAEQg2AMgVAAAB2gwIgGAAAgGgbQACAWATB1QATBsAGAaQABAFAAACQAhgCAbgGIAIAiIh0AJIgIgiQAiAAAUgBQABAAAAAAQABAAAAAAApEiuQAwgKCKgVAkaDuQAFgBAFAAQAcAAAHASQADAGAAAbIhmAAQAHgWAXgQQANgJALgDg");
	this.shape_2.setTransform(-32.8,-210.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF007D").s().p("AEiAIQAFgKAEgFIAoAAIA1AAIAAAYIhuAIQAGgKACgHgAhGgHIA4AAIABAAIABAAQAfgDAbgFIAIAgIh0AIgAmHAZQAHgWAXgOQANgIALgEQAFgBAFAAQAcAAAHASQADAGAAAZg");
	this.shape_3.setTransform(-27.3,-184.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#262627").ss(2,1,1).p("ABugZQgBgMgBgMIAxgDQABASAAATQABASgEAWIgpACQgBgOgBgNQAQgCAHAAQAAgQgDgDQgDgEgPADQgCAAgCAAQAAgBAAgCgABygWQgCgDgCAAABwAAQgHAAgIABIgBAAQggAFg3AKIAAAAQgdAGgdAGQgfAGgeAGQgDABgsAMAidAZQAxgJAugIQAvgIAogFQApgHAsgK");
	this.shape_4.setTransform(77,-140.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AidAZIBfgRQAvgIAogFQApgHAsgKIAEAAQgBgBAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgCgYIAxgDIABAlQABASgEAWIgpACIgCgbIAXgCQAAgQgDgDQgCgCgGAAIAAAAIAAAAIgDAAIgBAAIgCAAIAAAAIgCAAIgBAAIgBABIABgBIABAAIACAAIAAAAIACAAIABAAIADAAIAAAAIAAAAQAGAAACACQADADAAAQIgXACIgPABIgBAAIhXAPIAAAAIg6AMIg9AMIgvANg");
	this.shape_5.setTransform(77,-140.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AATgDQgCgBgBgBIgiAK");
	this.shape_6.setTransform(57.6,114.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#262627").ss(2,1,1).p("AA5gnQgSANghAdQgcAdgIALQgCgDgghHQgHgSgLgSQgJgRgCgCQAdAJAnAMQAvAPAjALQBGAXAPAGQAEgJAEgIIAAgBIAAAAQhBgYhvgiQhngfgagKAhdhWQgEACgPATQgTAYgIAJQgjAggDAEACABjQgygMg/gJQgOgCgNgCQg/gGgYgIQgDgBgDgBIAAAAQgNgLgLgFIAAgPQASADATAFQAeAFAfAHQAdAGAdAGIAAAAQA3AKAgAFIABAAIAAAAQgVgpgTgjQgPgdgDgIAjCh1QASAFBTAaACYgfQAFgKAGgJQAAgBABAAIAeAQQAEAQgGAPQgGAPgMANIgmgJQACgOAEgKIAAAAQAAAAAAgBQACABABABQgCgBgBAAACYgfQAFABAEAEQAEAFAAAFQAAAKgKAAQgEAAgGgCACWgcQABgCABgBACABmQgBAMgBAMIAxADQABgTAAgSQABgUgEgWIgpgCQgBAOgBAOQAQADAHAAQAAAQgDADQgDAEgPgDQgCADgCAAgACCBMQgHgBgIgBACEBjQgCAAgCAAQAAABAAAC");
	this.shape_7.setTransform(75.2,127.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AB+B/IACgZQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAAAAIABAAIAAAAIABAAIAEABIABAAIACAAIABAAIAAAAQAGAAACgCIAAgBQADgDAAgQIgXgCIACgcIApACQAEAWgBATIgBAlgACNBlIgCAAIgBAAIgEgBIgBAAIAAAAIgBAAIAAAAIgEgBQgygMg/gIIgbgEQg/gGgYgIIgGgCIAAAAQgNgLgLgGIAAgPIAlAIIA9ANIA6ALIAAAAIBXAQIABAAIAPACIAXACQAAAQgDADIAAABQgCACgGAAIAAAAIgBAAgACCBNIAAAAgACIAPQACgNAEgKIADABIAKABQAKAAAAgJQAAgGgEgEQgEgEgFgCIALgTIABgBIAeAQQAEARgGAPQgGAPgMAMgAA5gmIhSgaIhEgWIhlgeIAjgMIAEABQAaALBnAfQBvAhBBAZIAAAAIAAAAQgEAIgEAKQgPgGhGgXg");
	this.shape_8.setTransform(75.2,127);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#262627").ss(2,1,1).p("AABiAQAOAlAHA1QACARgBAQQgFAogRAYQgPAYgbAQIAYAeQAagSATgjQATgiADg0QAEg8gRg9gAgjB2QgBACgHAGQgDADgDAC");
	this.shape_9.setTransform(-6.5,220.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DF007D").s().p("AgtBkQAagPARgYQAPgZAGgoQABgQgCgQQgIg2gLglIAhgCQASA8gFA9QgCAzgTAjQgUAjgaARg");
	this.shape_10.setTransform(-6.1,220.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#262627").ss(2,1,1).p("ABSAIQAOgfgEgoIgqAAQACAzgJAMQgKAOgEABQgEADgIADQgHAEgIABQgFACgFAAQgMAAgOgIQgOgJgHgRQgCgFgCgIIghAAQAAAGACAFQAEAQAIARQAHAPASAKQASALAKABQAEABAJAAQACAAADABQAKgBASgCQAIgDAHgCQAGgBAGgEQATgMAPgfg");
	this.shape_11.setTransform(-2.3,208.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DF007D").s().p("AgMA/IgNgBQgKgBgSgLQgSgKgHgQQgIgQgEgPQgCgGAAgGIAhAAIAEANQAHASAOAIQAOAHAMABIAKgBQAIgCAHgEIAMgGQAEgCAKgNQAJgMgCgyIAqAAQAEAngOAfQgPAfgTAMQgGADgGACIgPAFIgcADIgFgBg");
	this.shape_12.setTransform(-2.3,208.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#262627").ss(2,1,1).p("AA4g0QhGAFhFAEQgqADgpABQhVAEgjAZQgjAYBiAcQA+ASBOACQBDABBKgDQDugMAAhAQAAgugzABQgzAAiKAJg");
	this.shape_13.setTransform(5.6,201.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DF007D").s().p("AhTA+QhOgCg+gSQhigcAjgYQAjgZBVgEIBTgEICLgJQCKgJAzAAQAzgBAAAuQAABAjuAMQg5ACgyAAIgiAAg");
	this.shape_14.setTransform(5.6,201.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#262627").ss(2,1,1).p("AAogzQAMgcAAgcQAAgQgGgfQgIguAAgBQgDgOgJgjQgJghAAgBQAAgCAAgCQAAgDABgDQAAgDADgBQADgDARgBIACgCQAIAfAaBZQAUBQAAAdQAAAMgBALQABADAAAGQAAAKgDAWQgCAVAAAZQAAAdgLAPQgFAFgIAFQgDAGgEBCQgFBDATArQgJACgGACQABABgEACQgEAAgFADQgBACgDABQAAABgBAAQgHACgFgGQgFgGgEgbQgEgaAAgWQgMASgZgNQgZgNgEg/QgFhAACgTQACgRAAgJQgPgKgMgSQAAgBAAAAQgUgiAAguQAAgtAJgeQALgoAFguQgCglAAgIQACgLAZAAQAKAAADAbQAHABARADIAAAAQAFAUgDAWQgCAXgFAhQgDAhADAVQACAUAAAKQAAALAFAIQADAKAEASQABASAAAOQgLAAgKgFQgHgEgHgGQgCgCgCgDAAYiFQAAAGABAEQACAXANAxAAMkfQAAAFAAAOQAAAaAGAwQAEAnACAWAASkmQgGAEAAABQAAABAAABQgDABgEACQgFAEgEAAAgrh2QAAgBAAAAQgBgEgCgXQgCgYABgcQABgaAGg4QABAAAGABAgrh2QgDANgCAIQgDAIAAAGQAAAgANARQACgDAAgHQgBgJgEgfQgDgbABgHgAgRAhQgSgDgNgKIgBAAAgRAhQAIACAJAAQAFAAAEgBIgBgDIADAAQAAACAAABQARgCAPgIQALgGALgKAAJAiQABAAABAAQAAACABAEQAAAOAAALQAAAZgBAIQAAADAAAEQgDAjgIANQgLgIgDggQAAgIgBgHQAAgSgCgvAAMBBQgRgFgFAAQgEAAgDgbAALBpIgZAIAASgUQALgKALgVAAxAtIAEAEQAGgGAEgQQABgKABgJQABgCABgBQAAAAABgBQAWgWAGgiABEBZQgHAEgIADAASDIQAJgMAHgUQAQg0gHhcAARkgQgDAAgCABAABgOQAJAAAIgGQgBgzAHg+AA8ETIAAgBAArEdQABADAIAT");
	this.shape_15.setTransform(18.7,229.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DF007D").s().p("AAfEkQgFgHgEgaQgFgaAAgWQAKgMAGgVQAMgjAAg3QAAgYgDgdQADAdAAAYQAAA3gMAjQgGAVgKAMQgMASgYgNQgagNgDhAQgFhAACgSIACgaIABAAQANAKARADQgRgDgNgKIgBAAQgPgLgMgTIAAgBQgUggAAgvQAAgsAJgfQAMgnADgvQgCgkABgIQACgLAZAAQAKAAADAbIgHgCQgGA4gBAbIgBAYIACAcIACAbIAAABIgEAVQgEAHAAAHQAAAgAOARIAEAFQAHAGAHAEQAKAEALAAQAJAAAHgGQAAgyAHg+IAAAKQACAXAOAxQAMgdAAgbQgBgQgFgfIgJgvQgCgPgKgjIgJgiIAAgDIABgGQABgDADgBQADgDARgBIABgDIAjB5QAUBQAAAdQAAAMgBALQABACAAAHQgBAKgCAWQgCAVAAAYQAAAegMAOQgEAGgIAFIgPAHIAPgHQgDAFgEBDQgFBDATArIgPADQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQgEAAgFADIgEADIgCAAIgDABQgEAAgEgEgAA8EdIAAAAIAAgBgAgOB8QADAgAKAHQAJgMADgkIAAgHIABghIAAgYIgBgGQAQgCAPgIQgPAIgQACIgBgDIgDAAIACADIgJAAQgIAAgKgBQADAbAFAAQAFAAARAEIgBAhIAAAHgAgPBsIABAQIgBgQIgDhAIADBAgAA0A7QAHgFADgQIACgUIADgCIABgBQAWgWAGgiQgGAigWAWIgBABIgDACIgCAUQgDAQgHAFIgDgDIADADgAAqAjQAMgHAKgKQgKAKgMAHgAARgKQAMgJALgVQgLAVgMAJgABEBkIAAAAgAgUgIQgHgEgHgGIgEgFQACgDgBgHIgEgoQgDgbAAgHIAAgBIgCgbIgCgcIABgYQABgbAGg4IAHACIAYADIAAAAQAEAVgCAWIgGA4QgFAhADAVQADAUAAAKQAAALAEAIQAFAJADATQABASAAANQgLAAgKgEgAgmgXIAAAAgAAYhwIAAgKIgHg9QgFgwAAgaIAAgTIAEgBIAAADIAJAiQAKAjACAPIAJAvQAFAfABAQQAAAbgMAdQgOgxgCgXgAAQkVIAAAAg");
	this.shape_16.setTransform(18.7,228.7);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-240.4,200.3,502);
p.frameBounds = [rect];


(lib.g_print = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AD8BCQADgDADgDQAOgRgGgoQgFgngcgsQgdgugbgHQgbgHgQACQgJABgKACQgKACgLADQASgCADAAQAUAAAdAgQAeAhAAAbQAAAqhTApQgLAGgNAFQg8AaguAJQgdAGgbAAQgcAAgogrQgqgrgrAAQgDAAgBACQgCABgNAHQgXAXgBAWQAAAEAAAFQAAABAAABQgBARACATQACAZAZAjQAZAiAlAKQAkAKAKgCQAkACAkgIQAjgIAPgEQANgEAHgBQAFgBAggNAi7iFQAkgRBCgYQBQgcAOAAQAIAAAVAoQAQAdALAbQhyA0hTApQgGADgFACQgQgkgQgpQgHgTgHgNQADAeAJAVQAIAWAGANQAFAMAMAXQAAAAABABQgBAAgBgBQgPgDgHgBQgHAAgDgGQgBgBgBgCQgCgEgEgMQgFgPgJgaQgTg3AAgEQAAgLAIgLQAMgSAggSQAJgFAKgEQBAgfAtAAQAUAAARAHQAWAJAQAVQAKALAcAzQAKgDALgDAiRAFQAdgNBYgoQAfgPApgTQATgJAVgJQAAgCAAgBIgIAAAiRAFQAQAEAOABQAQAAAwgWQAwgZAtgVQAGgCAFgCQAigMAVgUQgEAAgRgJIgDAAQgHgMgEgJAALCgQgeANgMADQgHABgCAAQgKgDgDgJQgCgKAEgDQADgDBlgsQAfgNAYgNQAJgEAIgEQAugXAXgRIAVAAQAAAAABADQABADAAADQAAAEgBAEQAWAFAOANQANAMAIARQghAUhCAgQhAAgg5AaQgEgLgFgIQgJgMgMgHQgHgEgFgDQgKgFgBgCQgGgCgBgCQAtgbBGghQBBgfAfgNQAGABAGACAi7iFQAEgKAOgLQAHgHAKgGQASgLAcgLQBQghAXAIAi9h1QgDgHgDgFQAEgCAEgCAiEgNQgjhSgMgiAj3ATQAHgIAJgHQAFgEAHgEQAQgLAQgKAjGB0QgMADgRgOQgQgPABgPQADgPAEgEQAFgEAKAAQAOAAAQANQARAOgCAMQgCAMgEAEQgFAEgMAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADE76").s().p("AAGgGIADAFQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgNAHIAOgNg");
	this.shape_1.setTransform(-23.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCC2B9").s().p("AgRAUQgQgPABgNQADgPAEgEQAFgEAKAAQAMAAAQANQARAOgCAKQgCAMgEAEQgFAEgMAFIgFABQgIAAgOgMg");
	this.shape_2.setTransform(-21,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFD85A").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_3.setTransform(8.6,-10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4E1DF").s().p("AhBDXQglgJgZgjQgagigCgZQgCgTABgSIAAgCIABgIQABgXAWgXIAPgIQABAAAAgBQAAAAABAAQABAAAAAAQABAAABAAQArAAApArQAnAqAbAAQAcAAAdgFIgLAOIgiAlQgjAlglAhQgCABAEALIgEAAQgLAAgegIgAh4A5QgEADgCAPQgCAPARAPQARAPAMgEQALgEAFgEQAEgEACgMQACgNgQgNQgQgNgOAAQgKAAgGAEgAAmBfQgbAAgngqQgpgrgrAAIgEgGIANgIIAfgVIAHARIABADQAEAFAGAAIAXAFIgXgFQgGAAgEgFIgBgDIgHgRIgOgoQgSg3AAgFQAAgLAHgLQAMgSAhgSIASgJQA+geAtAAQAVAAARAHIgBACQgWgIhQAhQgaALgSALQgLAGgHAGQgNALgEAKIgIAEIAGANQADAdAIAWIAOAjIASAiIgBABIABAAQAQAFAOAAQAOABAxgXQAwgYAugVIgDAQQgQBIgrA7QgdAFgcAAIAAAAg");
	this.shape_4.setTransform(-11.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFC5QgGgMgMgHIgMgHIgOgHQgGgCgBgBQAugcBFggQBCgfAfgOIALADQAWAFAPANQANAMAHARQghAUhCAgQg/Ahg5AZQgEgLgGgIgAjVhWIgOgfIgGgNIAIgEQAjgRBCgXQBRgdAQAAQAHAAAUApQAPAdAMAaQhyA0hUApQgjhRgMgjQAMAjAjBRIgKAFQgRgkgPgpg");
	this.shape_5.setTransform(3.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA8880").s().p("Ag2DFQgKgDgDgJQgCgKAEgDQADgDBlgsQAfgNAYgNIARgIQAugXAXgRIAVAAIABADIABAGIgBAHIgMgCQgfANhBAfQhGAhgtAbQABACAGACIANAHQggAMgMAEIgHABIgCAAgAigAYIgRgjIgOgjQgJgVgCgeIANAgQAQApAQAiIALgFQBTgnByg0QgLgbgQgdQgVgogGAAQgQAAhQAcQhCAXgkASQAFgLANgKQAHgHAKgGQASgLAcgLQBQghAXAIIAAgCQAWAJAQAVQAKALAcAzIALAVIAAADIgoASIhIAiIh1A1IgBgBgABGhTIgIAAg");
	this.shape_6.setTransform(1.4,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF007D").s().p("AiCBGIABgBIAAABIgBAAgACDhFIABACIgVACIAUgEg");
	this.shape_7.setTransform(-1.6,-6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8D3D1").s().p("AjEC1QgEgLABgBQAnghAjglIAigmIALgOQArg4ARhKIADgRIALgEQAggMAVgUQgEAAgRgJQARAJAEAAQgVAUggAMIgLAEQgvAVgwAZQgwAYgQAAQgOgBgQgEIB1g3IBKgiIAmgSIADgDIgDAAIgLgVIAVgGIAVgCIAAgDQAKgCAJgBQAQgCAbAHQAbAHAdAuQAcAsAFApQAGAmgOARIgFAGQgPgNgWgFIABgGIgBgGIgBgDIgVAAQgXAPguAXIgRAIQgYANgdANQhnAsgDADQgEADACAKQADAJAKADIAJgBQAMgEAggMIAMAHQANAGAIANIglAOIgWAFIgyAMQgcAGgcAAIgQAAgAAyABIgYALQg6AagwAJQAwgJA6gaIAYgLQBTgnAAgsQAAgbgeghQgdgggUAAQAUAAAdAgQAeAhAAAbQAAAshTAng");
	this.shape_8.setTransform(6.1,4.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-28.3,-23.4,56.7,46.8);
p.frameBounds = [rect];


(lib.g_minicontour = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2F2F").ss(2,1,1).p("AoYjvQAAgFgBgKQgCgIgCgFAp3h+QgHAEgFAAQgCAAgFgCQgFgBgBAAApkjUQgQgKgKgIAp5gHQgTgDgIAAAmuj0IAAgdAk0j0QgDgIgCgQAi0j3QgBgLgBgOABJj0QgwAAhPABQgBgLAAgTABJj0QgDgHAAgHIAAgOADFkSQADAMABAFQAAAHAAAIQAsABBCABQBDAAAZAAQARAAAXAAIgCgCIAAgaADJjyIAAAAQgBAAgBAAQgHgBgFABAB7j0QgRAAghAAAFFkPQAAAQABALAIqjuQABgDABgFQACgGAEgHAKVDsQgFgFgFgGQgGgIgDgDAIqEQIAAggAp0ClQgKABgVACAneETIAAgbApREIQACgKAMgS");
	this.shape.setTransform(-1.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("AlZEVQgugBhkgDQguABglgEQgkgEADgDQgdgCgdgoQgFgTgCgkQgBgPAAgSQAAgoAAhXQAAgIAAgKQAAg4AAgnQAAgKAAgKQABg1AEgWQAGgiASgPQATgRAmgEQAigEBTgCQAMAAAPgBQBWgBCzAAQAwAAA+ABQA5ABBDABQA8ABBEABQAzABA4ABQALAAAKAAQBAABA0ACQA2ACAoACQA7AFAkAKQASAEALAOQgEAFgJAFQgJAFgEAEQgHgJgYgIQgTgHgdgCQgIAAgJgBQgFgBgHAAQgvABgjAAAhDj0QgYgBgYgBQgqgDgkAAQgOAAgNAAQg6ACgrABQhOACgYgBQgLAAgJAAQgbgBgGABQgJACg7ACQgCAAgDABQhBAGgLAUQgPATgCATQgBANAAAUQgBAIAAAIQgBATAAAFIAAAAQgBAeAABBQAAAIAAAGQAAA+AAAJQABA2AEAgQAEAfAIAMQAQATAuAIQAuAJA8ADQA7ACAhABQAgAAA8ABQA9ABAXAAQAWABDbgBQANAAAOAAQD2AABSgFQBSgFAsgHQAvgFAQgFQAXgGAJgNQAJgNACgcQABgLAAgdQAAgQAAgVIAAh4QAAgrgCgZIAAgBQAAgIgBgHQAAAAAAgBQgBgQAAgCQAAAAgBAAQgBgUAAgZQgBgDAAgEQgBgPgIgKABuj1QAhABAfAAQAHABAHAAAJ6iNQABAAALgEQAIgDAGAAAKGjpQAKANADAVQAGAqABAQQABALABAKQADAqABAsQgFACgJABQgMACgEABAKiB2QgGABgOABQgMACgGABAKggiQABAVAAATQABBSAAAeQAAAMAAAMQgBA8gZAgQgaAhg1ACQgOABgOAAQgsAFhNADQgFgYAAgCACwEZQg5AAhDgBQgWAAgXAAQibgCg/AAQgeAAgKAAQgmAAgUAAQgIAAgcgBIAAgBQABgNAAgHAA0EYQgCgHgCgXACwEZQAAgHAAgEQAAgHAAgHAGkEWQgdAAgiABQgZABgfAAQAAgDgBgHQgCgJgCgFAEtEYQg3ABhGAAAjTEWQAAgEAAgGQAAgIAAgCAhNEUQABgHgBgL");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("AgGAAIAKAAIADAAIAAAAIgNAAg");
	this.shape_2.setTransform(18.1,-24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D796B").s().p("AA0EYQgCgHgCgXIAaAAQD3AABSgFQBSgFAsgHQAvgFAQgFQAXgGAIgNQAKgNACgcIABgoIASgDIAUgCIAAAYQgBA8gaAgIgJgLIgJgLIAJALIAJALQgZAhg1ACIgcABIAAggIAAAgQgsAFhNADIgFgaIAFAaIg/ABIg4ABIgBgKIgEgOIAEAOIABAKIh9ABIAAgLIAAgOIAAAOIAAALIh8gBgAAHEYIjagCIAAgKIAAgKIAAAKIAAAKIgoAAIg6AAIgkgBIAAgBIACgUIgCAUIAAABIiSgEIAAgbIAAAbQguABglgEQgkgEADgDQgdgCgdgoQgFgTgCgkIAfgDIgfADIgBghIAAh/IAAgSIAAhfIAAgUQABg1AEgWQAGgiASgPQATgRAmgEQAjgEBSgCIAbgBQBWgBCzAAIBuABIB8ACICAACIBqACIAWAAIB0ADQA2ACAoACQA7AFAkAKQASAEALAOQgFAFgIAFQgJAFgEAEQAEgEAJgFQAIgFAFgFQAKANACAVIAIA6IABAVQADAqACAsQgFACgJABIgRADIARgDQAJgBAFgCIABAoIABBwIgUACIgSADIAAglIAAh4IgChEIAAgBIgCgPIAAgBIAAgSIgBAAQgBgUAAgZIgBgHQgCgPgHgKQgHgJgZgIQgSgHgdgCIACgIQACgFADgHQgDAHgCAFIgCAIIgRgBIgMgBIhSABIgCgCIAAgbIAAAbIACACIgpAAIhbgBIhugCIAAgOIgEgRIAEARIAAAOIgCAAIgNAAIhAgBIgxgBQgDgHgBgGIAAgPIAAAPQABAGADAHIh/ACIgBgfIABAfIgwgCQgqgDgkAAIgDgZIADAZIgbAAIhlADQgDgIgBgQQABAQADAIQhOACgYgBIgUAAIAAgeIAAAeQgagBgHABQgJACg7ACIgEABIgCgPIgEgNIAEANIACAPQhCAGgLAUQgRgJgIgJQAIAJARAJQgPATgBATIgCAhIgBAQQgHADgFAAIgHgBIgHgBIAHABIAHABQAFAAAHgDIgBAYIAAAAIgBBfQgTgEgIAAQAIAAATAEIAAAOIAABHQABA2AEAgQAEAfAIAMQARATAtAIQAuAJA9ADIBbADIBcABIBUABIDxAAQACAXACAHIgtAAgAhNEUIABgIIgBgKIABAKIgBAIgApfEHQAEgLALgSQgLASgEALgAKGiRIgNAEIANgEIABgBQAGgCAFAAIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAAAQgFAAgGACIgBABgAE5j2QgBgLAAgQQAAAQABALgAKHDqIAAAAgAqGgIIAAAAgAqEh/IAAAAgAA8j2IAAAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-29.1,136.8,58.3);
p.frameBounds = [rect];


(lib.g_ecrouface = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AAIhIQAAAAABAAIAAgBgAAJhIIACAAIgCgBIACABIAAAAIAkAWQABACAHAOQAHAOAIAPQgHgHgGgCQgLgGgOgLQgGABgFABQgHADgOAHQgLAFgNABQgDgEgIgUQgDgJgEgKAAJhIIAXApAAhAOQgBAFgDAFQgCAGgBABQgFAFgIAAQgGAAgDgEQgDgDACgGQACgGADgDQANgNAIAJgABGgFQgFAOgKAcQgFALgBAGQgOAFglAPQgMgDgbgcQgNgYgPgRQACgNAIgRQAHgRAKgLQABAAAagJQARgHAGAAAgYgNQAAAJgHATQgGAWgEAG");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262627").s().p("AgDAOQgGAAgDgDQgDgDACgGQACgEADgDQALgNAIAIIAEAFQgBAFgDACIgDAIQgFAEgEAAIgCAAg");
	this.shape_1.setTransform(1.8,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD9E94").s().p("Ag3AWQAEgGAGgUQAHgVAAgJQANgBANgFIATgKIALgCQAPALAKAGQAGACAHAHIgPAqQgFALAAAGIgzAUQgMgDgcgcgAgEgFQgDADgCAEQgCAGADADQADAEAFAAQAHAAAFgFIADgHQADgDABgFIgEgEQgDgEgEAAQgGAAgGAIg");
	this.shape_2.setTransform(1.4,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E1DF").s().p("AhFARQAUAAAEgRQAFgMAFgKIgHgSIAbgJQARgIAGABIABAAIgBAAIABgBIAAABIACAAIAkAVIAIAQIAPAbQgHgGgGgCQgLgFgOgLIgXgoIAXAoIgLADIgVAJQgLAEgNAAQgDgCgIgUQAIAUADACQAAAKgHAVQgGAVgEAHQgNgZgPgRgAAggQg");
	this.shape_3.setTransform(0,-1.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8.4,16.1,16.9);
p.frameBounds = [rect];


(lib.g_arobase = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AB2A4QAFgBAGgDQAJgFAGgLQAHgKAEgQQAFgPAAgXQAAgggLgZQgKgZgTgRQgUgRgbgJQgagIggAAQgdAAgcAMQgHADgHAEQAbgLAdAAQAfAAAaAIQAbAJATARQAIAHAGAHQABABABABQADAEACAFQAFAIAEAJQALAZAAAgQAAAWgFAQQgFAQgGAKQgFAHgFAFgAhWi5QALgFALgFQAngQAqAAQAoAAAjAMQAjAMAbAWQAbAVAPAgQAQAfAAAmQAAAfgIAXQgIAYgNARQgNARgQAMQgQAMgPAHQgDABgDABQgFADgGADQgPAHgNAEQgOADgIAAQgeAAgDgYQgHAFgGADQgEACgFACQgCACgEACQgNAIgXAAQgRAAgNgHQgPgHgKgMQgKgMgGgRQgGgRAAgWQAAgcAJgZQAJgZAPgSQAPgSATgKQAFgCAFgCQADgCAEgCQAUgKATAAQAZAAAQAJQAJAFAIAJQADgEAEgCQAFgCAFgBQADgDAEgCQAIgEAHAAQAIAAAHAEAA/hbQAFAFAFAHIACgKQACgHADgEAARAxQAOgEAKgLQAPgRAAgXQAAgUgKgMQgLgNgVAAQgMAAgIAFQgEACgEACQAHgBAHAAQATAAAKANQALAMAAATQAAAYgQARQgDAEgEADgAB8heQABAEAAAFQAAADgBAKQgCALgCANQgDAOgCAQQgDAQgCAMQgDANgCAKQgBAKAAACQAAAEACAEQACAEAGAAQACAAACgBAB1BmQgMAGgLADQgNADgJAAQgfAAgCgbIgBAAQgHAGgIAFAg4iOQgTALgPAQQgVAWgLAdQgMAdAAAhQAAAjAMAdQALAdAWAVQAVAUAdAMQAcALAgAAQAfAAAUgGQAKgDAJgDQAKgGAHgFQAGgFAGAAQACgCACgBQAIgFAHAAQAJAAAGAFQAGAGAAAIQAAAJgMALQgLAMgUAKQgGADgHADQgCABgBABQgTAKgaAHQgZAHgbAAQgrAAgngPQgogQgdgbQgegbgRgnQgRglAAgvQAAgrARgmQARgmAdgdQAbgZAjgQABoC6QgOAGgRAFQgZAHgcAAQgqAAgogPQgngQgegbQgdgbgSgnQgQglAAgtQAAgtAQgmQARgmAdgdQAVgTAZgOABbCPQAHgDAGgDQAJgGAHgEAgOgqQgFAFgEAEQgHAJgFAKQgEALAAAKQAAATAKAMQAKANATAAQAJAAAIgCAABBuQgKAEgQAAQgQAAgOgHQgOgHgKgMQgKgMgHgRQgGgRAAgWQAAgcAJgZQAJgZAPgSQANgOAPgK");
	this.shape.setTransform(-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhODFQgogQgdgbQgegbgRgnQgRglAAgvQAAgqARgnQARgmAdgcQAbgaAkgQQgaAOgVATQgdAdgRAmQgQAnAAAsQAAAtAQAlQASAnAdAbQAeAbAnAPQAoAQAqAAQAcAAAZgHQARgFAOgGIgDACQgTAKgaAHQgZAHgbAAQgrAAgngPgAg+C8QgngPgegbQgdgbgSgnQgQglAAgtQAAgsAQgnQARgmAdgdQAVgTAagOIAVgKQAngQAqAAQAoAAAjANQAjALAbAWQAbAWAPAfQAQAfAAAmQAAAfgIAWQgIAZgNARQgNARgQAMQgQAMgPAHIgFACQgNAGgLACQgNAEgJAAQgfAAgCgbIgBAAIgPALIgNAIIgJAEQgKAEgQAAQgQgBgOgGQgOgHgKgMQgKgMgHgRQgGgSAAgWQAAgbAJgZQAJgZAPgSQANgOAPgKIAHgEQAUgJATgBQAZAAAQAJQAJAFAIAJIAKAMIACgKQACgHADgEQADgDAEgCQAIgEAHABQAIAAAHADIACACQADAEACAFIABAJIgBAOIgEAYIgFAdIgFAbIgFAYIgBAMQAAAEACAEQACAEAGgBIAEAAQAFgBAGgDQAJgGAGgKQAHgKAEgRQAFgOAAgWQAAghgLgZQgKgZgTgQQgUgRgbgJQgagJggAAQgdAAgcAMIgOAHIAOgHQAcgMAdAAQAgAAAaAJQAbAJAUARQATAQAKAZQALAZAAAhQAAAWgFAOQgEARgHAKQgGAKgJAGQgGADgFABQAFgFAFgHQAGgKAFgRQAFgQAAgUQAAghgLgZQgEgJgFgIQgCgFgDgEIgCgCQgGgHgIgGQgTgSgbgIQgagJgfAAQgdAAgbALQgTALgPAQQgVAWgLAdQgMAdAAAhQAAAjAMAdQALAdAWAVQAVAUAdALQAcAMAggBQAfABAUgGIATgGIANgHIAQgJIAEgDQAIgGAHAAQAJABAGAFQAGAGAAAIQAAAJgMALQgLAMgUAKIgNAGQgOAGgRAFQgZAHgcAAQgqAAgogQgAgNgqIgKAJQgHAJgFAKQgEALAAAKQAAATAKAMQAKANATAAQAJAAAIgCQAOgEAKgLQAPgRAAgXQAAgTgKgNQgLgNgVAAQgMAAgIAFIgHAEIAHgEQAIgFAMAAQAVAAALANQAKANAAATQAAAXgPARQgKALgOAEIAHgHQAQgRAAgZQAAgRgLgNQgKgNgTAAQgHAAgGABgABsCEQAGgFAGAAIgQAJIgNAHIARgLgAB4B/IAAAAgAAXBiIAPgLIABAAQACAbAfAAQAJAAANgEQALgCANgGIgMAGQgPAHgNADQgOADgIABQgegBgDgXgAhHBzQgPgHgKgMQgKgMgGgSQgGgQAAgXQAAgbAJgZQAJgZAPgSQAPgSATgKIAKgEQgPAKgNAOQgPASgJAZQgJAZAAAbQAAAWAGASQAHARAKAMQAKAMAOAHQAOAGAQABQAQAAAKgEIgGAEQgNAIgXAAQgRgBgNgGgAABBuIAAAAgAB2BmIAAAAgAA/hbQADgEAEgCIAKgDQgDAEgCAHIgCAKIgKgMgABQhkIAAAAgAhVi5IAAAAg");
	this.shape_1.setTransform(-0.2,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-22.2,44.5,44.5);
p.frameBounds = [rect];


(lib.GEN_LMS_AT = function() {
	this.initialize();

	// Calque 1
	this.texte_LM_05_AT = new cjs.Text("Où a-t-elle lieu ?", "9px 'Arial'");
	this.texte_LM_05_AT.name = "texte_LM_05_AT";
	this.texte_LM_05_AT.textAlign = "center";
	this.texte_LM_05_AT.lineHeight = 11;
	this.texte_LM_05_AT.lineWidth = 145;
	this.texte_LM_05_AT.setTransform(75.5,288.5);

	this.texte_LM_04_AT = new cjs.Text("Quelle est la punition ?", "9px 'Arial'");
	this.texte_LM_04_AT.name = "texte_LM_04_AT";
	this.texte_LM_04_AT.textAlign = "center";
	this.texte_LM_04_AT.lineHeight = 11;
	this.texte_LM_04_AT.lineWidth = 146;
	this.texte_LM_04_AT.setTransform(75,216.3);

	this.texte_LM_03_AT = new cjs.Text("Idée de surnom à donner au puni", "9px 'Arial'");
	this.texte_LM_03_AT.name = "texte_LM_03_AT";
	this.texte_LM_03_AT.textAlign = "center";
	this.texte_LM_03_AT.lineHeight = 11;
	this.texte_LM_03_AT.lineWidth = 147;
	this.texte_LM_03_AT.setTransform(75.5,144.4);

	this.texte_LM_02_AT = new cjs.Text("Qui est puni ?", "9px 'Arial'");
	this.texte_LM_02_AT.name = "texte_LM_02_AT";
	this.texte_LM_02_AT.textAlign = "center";
	this.texte_LM_02_AT.lineHeight = 11;
	this.texte_LM_02_AT.lineWidth = 147;
	this.texte_LM_02_AT.setTransform(75.5,72);

	this.texte_LM_01_AT = new cjs.Text("Qui donne la punition ?", "9px 'Arial'");
	this.texte_LM_01_AT.name = "texte_LM_01_AT";
	this.texte_LM_01_AT.textAlign = "center";
	this.texte_LM_01_AT.lineHeight = 11;
	this.texte_LM_01_AT.lineWidth = 146;
	this.texte_LM_01_AT.setTransform(73,1);

	this.addChild(this.texte_LM_01_AT,this.texte_LM_02_AT,this.texte_LM_03_AT,this.texte_LM_04_AT,this.texte_LM_05_AT);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,1,153,313.5);
p.frameBounds = [rect];


(lib.g_ecrou = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AAYARQACgHAEgGIgGgTQgEAEgFAJAADA5QAbgBAHgJQAMgjAEgMQgCgDgDgJQgJgYgGgLQgRAIgMAEQgDAEgBAFQgCAFgDAOQgEAKgBAKQgBAFAHAQQAGARABAGgAAhgvQgOgEgLgDQgJgCgHgBQgGAAgQALAAEgjIgYgGIgNAAQgCgBgIAYQgIAUgBABQAPACAGACQAMAFAJABAg0ADQABAMAGAOQAGAOAEALQATAGATgD");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD9E94").s().p("AgKAXIgKgXQgGgOgBgMQAPACAGACQAKAFAKABQgBAFAGAOQAIARABAGIgNABQgOAAgLgEg");
	this.shape_1.setTransform(-2.5,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("AgEAeQgGgQABgFQgKgBgMgFQgGgCgPgBIAJgXQAIgYACACIAOgBIAWAHQgDADAAAFIgFATQgEAMAAAJQAAgJAEgMIAFgTQAAgFADgDIAegNQAGAMAIAXIAGANIgQAuQgHAJgbACQgBgGgGgRgAAYANQACgHAEgGIgGgUQgEAEgFAKQAFgKAEgEIAGAUQgEAGgCAHg");
	this.shape_2.setTransform(0,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.3,-6.8,12.7,13.7);
p.frameBounds = [rect];


(lib.mc_tesla2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF007D").ss(2,1,1).p("AjuBbQgEgFgzhRQAAgDgCAFQgDAEAAABIgBACQAAgDAEgQQAFgRAAgHIgCgEQgEAAgPAJQgOAIgGAAQgKAAgDgIQgCgFAAgFQAAgGADgIIACgCQgNADgEAAQgFAAgeggQgfgigDgDABWA+QAGAFAKAEQAMAGAGAAQACAAAbgaQAcgdARgGQAGAIgBASQgBAKgCAUQAAAtANAAQAHAAAOgcQANgbAEgSQADADACAHQACAGAAACIAAACQACAAAFgCQACAAAJAFQAMAEASABQARAAAaAHQAUAFAFADQADgDASgjIABAAQABACACANQABANAAADQAAAdgFAGQAGgHAGgHQADgEABAAQALAAAKAH");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DF007D").ss(2,1,1).p("AmtiLQAEACARAeQAQAcAGAAQAWgMAXgLQAtgXACAAQAHAAABADQACACAAAIQAAAsgsA0QgpAuAGAMQAIAAAlggQAcgXAPgQQAAAEgBAIQgBAKgDAEIAAAHQAWgEAQAhQAAAAAOAoAC/BmQAAgBAAAAQAghZANgYIAEgGQgGBCAAAZQAAA4ALALQACgCAWg1QATgtAKAAIAPATQARAUAkADQAeADAOAEQAHACAJAEIAEAAIAAACQgCgBgCgBABSAuIgDACQAFAAAQAJQAQAJAEAAQApgZAPgRQABACAEAlQAEAkAGADADBBtQgCgCAAgF");
	this.shape_1.setTransform(0.3,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DF007D").ss(2,1,1).p("ABNAoQAGgBAOAGQAQAGAGAAQAFgFAIgfQADgLAJgqIACgDQgFAfAAAyQAAAfAKAlQAIAfAJAOIADADQALggAGg7QAFgsAAgVQAAg+gHgnIACgGQAMANAVBeQARBQAAAiQABgZAFgaQAKg0ATgJQATA4AcAAQADAAAQgFQAIAABTAeADuByQgBAEAAADQAAAEAAAEIAAgGQAAgBAAgBAmtibQBSBZA3A4QAigUAKAAQACAAAAAFQAAALgTAcQgUAjgBACIAAACQAUgPAMgMQAFACAEAMQAEANAEAF");
	this.shape_2.setTransform(-0.4,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DF007D").ss(2,1,1).p("AingYQABABAeAGQAgAIANAFIAEAAQAAgHAEgRQAEgTAEgIIACgBQAIAHARAwQAUA1ACAFQAAgHAEgZQADgdAEgEQAWAIBIAEQBBAEAYAN");
	this.shape_3.setTransform(25.5,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.8,-12.7,87.7,25.4);
p.frameBounds = [rect, new cjs.Rectangle(-43.7,-13.3,88,30.1), new cjs.Rectangle(-44.4,-13.8,88.2,33.3), new cjs.Rectangle(7.7,2.3,35.7,13.6), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.g_plothelice = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AgYgtQAQgQATADQAQAJALAPQANAVAAAVQAAAZgRAPQgTARgXgIQgWgHgMgUQgCgDAAgEIgGgYIAKgagAATAEQAAAHgBAKIAAAAQgCAIgEAIQgUASgUgPQgGgFgEgGQgDgDgDgDAABgZIAAgBIAAABAATAEIACAEAATAEIAAAAIgSgdQgLgLgOgJ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E1DF").s().p("AgMAoQgGgFgEgGIgGgHIgGgXIAKgaIAQgSQAMAIANALIASAeIgBAQIAAABIgGAPQgMAKgMAAQgHAAgJgGg");
	this.shape_1.setTransform(-1.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgLA5QgWgHgMgUQgCgDAAgEIAGAGQAEAGAGAFQAUAPAUgSIALgMIgCgRIgCgEIAAAAQAAgNgGgGIgKgKIAAgBIAAABQgNgLgOgJQAQgQATADQAQAJALAPQANAVAAAVQAAAZgRAPQgNALgQAAQgFAAgIgCg");
	this.shape_2.setTransform(0.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.1,-7,12.3,14);
p.frameBounds = [rect];


(lib.g_helice = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AAgAcQBDhcA/gvQACgEADAAQAFAAAEAPQASBFiUBJQgDABgDACQgEgIgEgJQgJgRgJgRQgEgJgEgHQgDgEAAgEQgmhOgKgpQgMgcgEgdQgIg3AcgIQAOgEAEAEQAFAEADAAQAhA0AJAiQAPA2gRBLQgGAYgEASQgEgHgFgIQgBgEgCgDAARAnQAEABACABQABABgCABQgCgCgDgCgAAMAjQgBABAAACQgLgEg4gSQg5gQgogRQgpgTgUgZQgTgbACgOQABgOgBgEIATgEQAmAWBWA9QAuAiAXAOIAAAAQACABACABQAAABABAAQgBAAAAAAQgDgCgCAAQABACABABIABAAQAAABAAAAQAKAJATAOQACACADACQgDgBgDAAQgIALgHAKQgpA1gNAQQgbAfgcAIQgVAGgIAAQgLACgQgEIgFgTQAVgaA/ghQAxgYAhgPAAgAxQARAvAMAcQAMAbADA7QADA7AAADQgqgHgKgKQgFgFgJgiQgIgZAEhfQAAgBABgjIAAAAQAAAAAAgBQABAAAAgBAAKA8QABAAAAgCQAGgIAFgHQAFACAFAEQADgBAEgCQgJgDgHgCQAEgGAFgHAAKA7QABgKAAgLAAoAvQADABABAAQADABACAAQA8ATAhAPQBOAiAMAhQgpAChAgoQhBgogegXQAIADABgDQAAgBgBgBQgBAAAAgBQAAgBABAAQAAABAAABgAAMAjQAAgFAAgHQABgOABgPAAgAxQgJAEgMAFAgOAKQADACACAAQAKAFABAGQgCgCgOgLg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AgDAVIATgQIgQAUgAgOgZIAAABIgBABg");
	this.shape_1.setTransform(-0.5,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA8880").s().p("AAbD/QgFgFgJgiQgIgZAEhfIABgkIAAAAIABgCIAVgJIAdBLQAMAbADA7IADA+QgqgHgKgKgAipCrIgFgTQAVgaA/ghIBSgnIAEAFIg2BFQgbAfgcAIQgVAGgIAAIgHABQgJAAgLgDgAB/BwQhBgogegXQAIADABgDIAIAAQA8ATAhAPQBOAiAMAhIgFAAQgnAAg9gmgAAgAcQBDhcA/gvQACgEADAAQAFAAAEAPQASBFiUBJQgDABgDACQgEgIgEgJgAg4AQQg5gQgogRQgpgTgUgZQgTgbACgOIAAgSIATgEQAmAWBWA9IBFAwIgBABIACADIABAAIAAABQAKAJATAOIgBADIhDgWgAAGgXIgDgHQgmhOgKgpQgMgcgEgdQgIg3AcgIQAOgEAEAEQAFAEADAAQAhA0AJAiQAPA2gRBLIgKAqIgJgPg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-28.2,48.6,56.5);
p.frameBounds = [rect];


(lib.g_bulleverre = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2F2F").ss(2,1,1).p("AATB7QgcgPgeghQgfghACguQACgvARgZQASgYAWgTQAQgTAfAAIAfEVQgjgIgOgIgAgJh3QAFBvAJBAQAJA/AFAE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AgIB7IAAAAQgGgEgJg/QgKhAgGhvQASgTAeAAIAeEVQgigIgNgIg");
	this.shape_1.setTransform(3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("AgOBKQgfghACguQACgvARgZQASgYAUgUQAFBwALBAQAJA/AFADQgegPgcggg");
	this.shape_2.setTransform(-2.5,0.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-7.9,-14.9,15.9,30);
p.frameBounds = [rect];


(lib.g_ecrou2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AA0AOQgBgBgCgXQgCgZgCABIgNgEIgaAAQACAEAAAFQABAGAAAPQAAAKgCALQAJABAOgBQAGgBAQACgAgTg6QAPAAAKAAQALAAAHACQAHABANAPAgRA0QASAIAUgBQAHgKAKgLQAJgMAFgMAAGgmQgJgIgQgMQgJAJgOAVQgGAIgDADQABAOACAkQAFALAaAIQADgGAMgOQAJgOAAgFAgbAHQAAgHgCgFIALgTQACAEADAL");
	this.shape.setTransform(-1.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD9E94").s().p("AgiAQQADgGAMgNQALgNAAgGQAIACANgCQAGgBAQADQgFALgJAKIgRAWIgEAAQgQAAgSgHg");
	this.shape_1.setTransform(0.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("AgvAkIgDgxIAJgLQANgVAJgKIAYAUQADAEAAAGIAAAUIABAFQAAAIgCAIQAAAGgJANQgMAPgDAGQgagJgEgLgAgdgBQACAFAAAHQAAgHgCgFIALgUIAGAPIgGgPIgLAUgAAeAQQgOACgJgCQACgIAAgIIgBgFIAAgUQAAgGgDgEIAbAAIAMAEQACgBADAaQACAWAAACQgPgDgGABg");
	this.shape_2.setTransform(-1.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#262627").ss(2,1,1).p("Ag0AFQABgKADgNIAAgBQAAgEACgFQABgOAFgKQAIgQALgPQAMgOAVgDQAVgDAMAmQALAmgEApQgEArgQAXQgPAXgVgCQgDAAgFAAQgDgBgMgFAgzAHIgBACIABgCIAAAAIgBgCAgcBeQgOgTgFgQQgEgQgBgeQAAgBAAgCQAAAAAAgBQAAgCAAgC");
	this.shape_3.setTransform(1.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262627").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_4.setTransform(-4,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4E1DF").s().p("AgEBlIgIAAIgPgGIgBgBQgOgTgFgQQgEgQgBgeIAAgDIAAgBIABgCIAAAAIgBgCIAEgXIAAgBIACgJQABgOAFgKQAIgQALgPQAMgOAVgDQAVgDAMAmQALAmgEApQgEArgQAXQgOAVgTAAIgDAAg");
	this.shape_5.setTransform(1.3,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-7.7,-11.2,15.4,22.4);
p.frameBounds = [rect];


(lib.LM_DEPASSE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.gereTextes.afficheLM({codeLM:"LM_DEPASSE", mc:this});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.texte_LM_DEPASSE = new cjs.Text("Où a-t-elle lieu ?", "9px 'Arial'");
	this.texte_LM_DEPASSE.name = "texte_LM_DEPASSE";
	this.texte_LM_DEPASSE.textAlign = "center";
	this.texte_LM_DEPASSE.lineHeight = 11;
	this.texte_LM_DEPASSE.lineWidth = 377;
	this.texte_LM_DEPASSE.setTransform(188.5,0);

	this.timeline.addTween(cjs.Tween.get(this.texte_LM_DEPASSE).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,381,17.3);
p.frameBounds = [rect];


(lib.TXTEDIT_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF99").s().p("AnzHzIAAvmIPmAAIAAPmg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,100);
p.frameBounds = [rect, rect];


(lib.repere = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.BT_RET_E1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("ACkjtQAFgBABAAAC+hxQgDgDAAgIACSjLQiSBdiJBuQCBB8CQBPQAEgaABgYQAAgZABggQAAghABgkQABgiABgbQAAgbgBg0QgBgzADgngAAjivQACgFADgBAC+gDIAAgGADqgyQADBOgIBpQgJBpgVAdQgVAdhKgcQhKgdhGg4QhJg4hPhEQgdgYgLgaQgMgYBnhRQBnhQBbg5QBdg5AmALQAmAMAFAhgAC8CDIAAgIAAWCrQAFAIAEACACcDzQACgCAFgDAhNhfQACgBADgCAi4gCQACgDADgDAhfBUIALAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AiNAAQCJhtCSheQgDAnABA0IABBPIgCA9IgBBEIgBA5QgBAZgEAaQiQhQiBh8g");
	this.shape_1.setTransform(0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("ABoEMQhKgdhGg4QhJg4hPhEQgdgYgLgaQgMgYBnhRQBnhQBbg5QBdg5AmALQAmAMAFAhIAHC4QADBOgIBpQgJBpgVAdQgLAPgYAAQgXAAglgOgACcDzIAHgFIgHAFgAiJAAQCBB8CQBPQAEgaABgYIABg5IABhFIACg9IgBhPQgBgzADgnQiSBdiJBugAAfC1QgEgCgFgIQAFAIAEACgAC8CDIAAgIgAhUBUIgLAAgAi4gCQACgDADgDQgDADgCADgAC+gDIAAgGgAhNhfIAFgDIgFADgAC+hxQgDgDAAgIQAAAIADADgAAjivQACgFADgBQgDABgCAFgACkjtIAGgBIgGABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#262627").ss(2,1,1).p("ACkjtQAFgBABAAAC+hxQgDgDAAgIACQhxQgBgzADgnQiSBdiJBuQCBB8CQBPQAEgaABgYQAAgZABggQAAghABgkQABgiABgbQAAgbgBg0gAAjivQACgFADgBAC+gDIAAgGADqgyQADBOgIBpQgJBpgVAdQgVAdhKgcQhKgdhGg4QhJg4hPhEQgdgYgLgaQgMgYBnhRQBnhQBbg5QBdg5AmALQAmAMAFAhgAC8CDIAAgIAAWCrQAFAIAEACACcDzQACgCAFgDAhNhfQACgBADgCAi4gCQACgDADgDAhfBUIALAA");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCFF").s().p("AiNAAQCJhtCSheQgDAnABA0IABBPIgCA9IgBBEIgBA5QgBAZgEAaQiQhQiBh8g");
	this.shape_4.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},13).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-29.2,49.1,58.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ZONE_CACHE_AT = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.g_minicontour();
	this.instance.setTransform(80.9,33.7,1.2,1.2);

	this.ZONE_01_T = new lib.miniZONE_T();
	this.ZONE_01_T.setTransform(80.4,13,1.2,1.2,0,0,0,0.2,0.5);

	this.instance_1 = new lib.g_minicontour();
	this.instance_1.setTransform(80.9,105.7,1.2,1.2);

	this.ZONE_02_T = new lib.miniZONE_T();
	this.ZONE_02_T.setTransform(80.4,83,1.2,1.2,0,0,0,0.2,0.5);

	this.instance_2 = new lib.g_minicontour();
	this.instance_2.setTransform(80.9,321.7,1.2,1.2);

	this.ZONE_05_T = new lib.miniZONE_T();
	this.ZONE_05_T.setTransform(80.4,299,1.2,1.2,0,0,0,0.2,0.5);

	this.instance_3 = new lib.g_minicontour();
	this.instance_3.setTransform(80.9,249.7,1.2,1.2);

	this.ZONE_04_T = new lib.miniZONE_T();
	this.ZONE_04_T.setTransform(80.4,227,1.2,1.2,0,0,0,0.2,0.5);

	this.instance_4 = new lib.g_minicontour();
	this.instance_4.setTransform(80.9,177.7,1.2,1.2);

	this.ZONE_03_T = new lib.miniZONE_T();
	this.ZONE_03_T.setTransform(80.4,155,1.2,1.2,0,0,0,0.2,0.5);

	this.addChild(this.ZONE_03_T,this.instance_4,this.ZONE_04_T,this.instance_3,this.ZONE_05_T,this.instance_2,this.ZONE_02_T,this.instance_1,this.ZONE_01_T,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1.2,-1.2,164.2,357.9);
p.frameBounds = [rect];


(lib.g_avbras2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.g_main("synched",0,false);
	this.instance.setTransform(0.8,8.3,1,1,180,0,0,0.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF007D").s().p("Ag1hXQAHg3AdgIQAbgIAOAcQAOAcAIA0QAHAyAAAjQAAAjADA4Qg4ATgyAIQgJi5AGg3g");
	this.shape.setTransform(1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.4,-16.5,27.4,49.8);
p.frameBounds = [rect, new cjs.Rectangle(-10.1,-16.5,18.9,50.8), new cjs.Rectangle(-8.6,-16.5,25.4,48.7), new cjs.Rectangle(-11.1,-16.5,20.1,52.4), new cjs.Rectangle(-4.7,-16.5,11.4,30.7)];


(lib.g_avbras1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.g_main("synched",0);
	this.instance.setTransform(3.1,6.1,1,1,180,0,0,-0.1,10.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF007D").s().p("AgeCGQgLAAgGgEIgEgjIgEgmQgBgQAAgVQAAgUgFgzQgEg1AEgJQADgKALgHQAKgHASAHIAJABIAKANQAMARAHAVIAQApQAIAVAEATQADAVAFAQQAFARADATQACATgCAYIgnAIIgcAFQgLADgKAAIgFgBg");
	this.shape.setTransform(2.3,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.3,-16,27.4,47.2);
p.frameBounds = [rect, new cjs.Rectangle(-8,-16,18.9,48.2), new cjs.Rectangle(-6.5,-16,25.4,46.1), new cjs.Rectangle(-9,-16,20.1,49.8), new cjs.Rectangle(-4.2,-16,13,27)];


(lib.mc_oeilblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.g_oeil("synched",0);
	this.instance.setTransform(0.5,0,1,1,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgRAFQAZACAKgL");
	this.shape.setTransform(0.6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AANgTQArAGgBANQgCAPgKADQgKADgQgBQgPgBgMgFQgNgGAEgEQAFgEAAgFQABgFAagJgAAPAFQACgGAAgEAg2AHQALgJARgIQAQgIAXgB");
	this.shape_1.setTransform(0.4,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgOANQAUgNAJgM");
	this.shape_2.setTransform(1.1,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AgxAJQANgJAbgGQAbgIAgAS");
	this.shape_3.setTransform(-0.1,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AAPAFQACgGAAgEAANgTQArAGgBANQgCAPgKADQgKADgQgBQgPgBgMgFQgNgGAEgEQAFgEAAgFQABgFAagJgAg2AHQALgJARgIQAQgIAXgB");
	this.shape_4.setTransform(0.4,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},11).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.1,-5.7,12.5,11.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-6.1,-4.8,13.1,10), new cjs.Rectangle(-6.1,-3.9,12.1,8.6), new cjs.Rectangle(-6.1,-4.8,13.1,10), rect=new cjs.Rectangle(-6.1,-5.7,12.5,11.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.PLAIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5,E3:10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeA4QgHgDgEgDQgFgFgDgFQgCgHAAgHIABgJQABgFADgGQAEgEAGgDQAHgEAMgCIAdgEIADAAIADgCIADgEIAAgHQAAgSgYAAQgIAAgFADQgEABgDADIgEAHIgBAIIgSAAQABgKADgIQAEgGAFgFQAGgEAJgDQAIgBAKAAIAFAAIAIABIAKADQAEACAEAEQAEAEACAFQADAFAAAGIAAA/QAAAGAGAAIADAAIADgBIAAAOIgFACIgFABQgGgBgEgBQgEgBgCgDQgCgDgBgCIgBgHIgGAHIgJAFIgJAFQgGACgIAAQgIgBgGgCgAASAAIgFACIgJABIgMACIgHABIgIADIgGAGQgDADAAAGQAAAIAFAGQAFAEALAAQAGAAAFgBQAFgCAFgEQAFgDADgFQADgFAAgGIAAgQIgDAAg");
	this.shape.setTransform(-0.3,-0.1);

	this.instance = new lib.g_rondbt("synched",0);
	this.instance.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},5).wait(10));

	// E2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA4QgHgDgEgDQgFgFgDgFQgCgHAAgHIABgJQABgFADgGQAEgEAGgDQAHgEAMgCIAdgEIADAAIADgCIADgEIAAgHQAAgSgYAAQgIAAgFADQgEABgDADIgEAHIgBAIIgSAAQABgKADgIQAEgGAFgFQAGgEAJgDQAIgBAKAAIAFAAIAIABIAKADQAEACAEAEQAEAEACAFQADAFAAAGIAAA/QAAAGAGAAIADAAIADgBIAAAOIgFACIgFABQgGgBgEgBQgEgBgCgDQgCgDgBgCIgBgHIgGAHIgJAFIgJAFQgGACgIAAQgIgBgGgCgAASAAIgFACIgJABIgMACIgHABIgIADIgGAGQgDADAAAGQAAAIAFAGQAFAEALAAQAGAAAFgBQAFgCAFgEQAFgDADgFQADgFAAgGIAAgQIgDAAg");
	this.shape_1.setTransform(-0.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CC5").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[]},5).wait(5));

	// E3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF007D").s().p("AgeA4QgHgDgEgDQgFgFgDgFQgCgHAAgHIABgJQABgFADgGQAEgEAGgDQAHgEAMgCIAdgEIADAAIADgCIADgEIAAgHQAAgSgYAAQgIAAgFADQgEABgDADIgEAHIgBAIIgSAAQABgKADgIQAEgGAFgFQAGgEAJgDQAIgBAKAAIAFAAIAIABIAKADQAEACAEAEQAEAEACAFQADAFAAAGIAAA/QAAAGAGAAIADAAIADgBIAAAOIgFACIgFABQgGgBgEgBQgEgBgCgDQgCgDgBgCIgBgHIgGAHIgJAFIgJAFQgGACgIAAQgIgBgGgCgAASAAIgFACIgJABIgMACIgHABIgIADIgGAGQgDADAAAGQAAAIAFAGQAFAEALAAQAGAAAFgBQAFgCAFgEQAFgDADgFQADgFAAgGIAAgQIgDAAg");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.3,-11.6,22.7,23.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.PAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5,"E3":10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("ABNgLQAAgCAAgCQAAgfghgPQgVgJgTAAQgRgBgYAMQgXALgGAIQgGAIgFALQgEAKAAAHQAAAFACAGQACAIAGAVQAFASADACQAPAIAJADQAPAFAUAAQAsAAAZgMQAGgDAFgLQAGgOAAgQQAAgPgFgMgAhPAHQAFAMAPAJQABABAAAAQAWAOAcAAQArAAAXgSQASgOABgW");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(0.2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},5).wait(10));

	// E2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("ABNgLQAAgCAAgCQAAgfghgPQgVgJgTAAQgRgBgYAMQgXALgGAIQgGAIgFALQgEAKAAAHQAAAFACAGABNgLQAFAMAAAPQAAAQgGAOQgFALgGADQgZAMgsAAQgUAAgPgFQgJgDgPgIQgDgCgFgSQgGgVgCgIQAFAMAPAJQABABAAAAQAWAOAcAAQArAAAXgSQASgOABgWg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262627").s().p("AgoAlQgJgDgPgIQgDgCgFgSIgIgbQAFAMAPAJIABAAQAWANAcAAQArAAAWgQQASgOACgYQAFAOAAAPQAAAOgHAOQgFALgFADQgaAMgrAAQgUAAgPgFg");
	this.shape_3.setTransform(0.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[]},5).wait(5));

	// E3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFCC").ss(2,1,1).p("ABwASQAEgCABgBAA+ghQAAgDADgFQACgGACgCAAFgnIgFgQAhDgSQgFgGgNgJAhoA1QgDABgJAC");
	this.shape_4.setTransform(-0.7,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(2,1,1).p("ABNgLQAAgCAAgCQAAgfghgPQgVgJgTAAQgRgBgYAMQgXALgGAIQgGAIgFALQgEAKAAAHQAAAFACAGABNgLQAFAMAAAPQAAAQgGAOQgFALgGADQgZAMgsAAQgUAAgPgFQgJgDgPgIQgDgCgFgSQgGgVgCgIQAFAMAPAJQABABAAAAQAWAOAcAAQArAAAXgSQASgOABgWg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262627").s().p("AgoAlQgJgDgPgIQgDgCgFgSIgIgbQAFAMAPAJIABAAQAWANAcAAQArAAAWgQQASgOACgYQAFAOAAAPQAAAOgHAOQgFALgFADQgaAMgrAAQgUAAgPgFg");
	this.shape_6.setTransform(0.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

	// Calque 2
	this.COULEUR = new lib.PAL_COULEUR();
	this.COULEUR.setTransform(0.1,0,1,1,0,0,0,8.3,7.2);
	this.COULEUR.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.COULEUR.cache(-2,-2,21,18);

	this.timeline.addTween(cjs.Tween.get(this.COULEUR).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-8.2,18.5,16.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-13.5,-12.3,25.5,20.5), rect, rect, rect, rect];


(lib.ITAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5,"E3":10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA4QgFgCgDgEQgDgFgBgFQAAgGACgIIAEgIQADgGAGgFQAFgFAJgDQAIgEAMgCIAegDIAEgBIAEgCIADgEIAEgHQAGgSgaAAQgIAAgFACIgIAGIgGAHIgEAHIgSAAQAEgKAGgHQAGgHAIgFQAHgEAIgCQAJgDAKAAIAGABIAIABIAIADQAEACADAEQACADABAGQABAFgDAHIgXA+QgDAHAHAAIADAAIADgBIgFAOIgFABIgGABQgGAAgDgCQgEgBgBgDQgBgCAAgDIABgHIgIAHIgJAFQgFADgHACQgHACgIAAQgIAAgGgDgAAYAAIgFACIgKABIgNACIgIACIgJADQgEABgEAEQgDADgCAFQgDAKACAFQADAFALAAQAHAAAGgCQAHgCAFgEQAGgDAEgFQAFgFACgFIAHgRIgEAAg");
	this.shape.setTransform(-0.4,0.2);

	this.instance = new lib.g_rondbt("synched",0);
	this.instance.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},5).wait(10));

	// E2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA4QgFgCgDgEQgDgFgBgFQAAgGACgIIAEgIQADgGAGgFQAFgFAJgDQAIgEAMgCIAegDIAEgBIAEgCIADgEIAEgHQAGgSgaAAQgIAAgFACIgIAGIgGAHIgEAHIgSAAQAEgKAGgHQAGgHAIgFQAHgEAIgCQAJgDAKAAIAGABIAIABIAIADQAEACADAEQACADABAGQABAFgDAHIgXA+QgDAHAHAAIADAAIADgBIgFAOIgFABIgGABQgGAAgDgCQgEgBgBgDQgBgCAAgDIABgHIgIAHIgJAFQgFADgHACQgHACgIAAQgIAAgGgDgAAYAAIgFACIgKABIgNACIgIACIgJADQgEABgEAEQgDADgCAFQgDAKACAFQADAFALAAQAHAAAGgCQAHgCAFgEQAGgDAEgFQAFgFACgFIAHgRIgEAAg");
	this.shape_1.setTransform(-0.4,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CC5").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[]},5).wait(5));

	// E3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF007D").s().p("AgtA4QgFgCgDgEQgDgFgBgFQAAgGACgIIAEgIQADgGAGgFQAFgFAJgDQAIgEAMgCIAegDIAEgBIAEgCIADgEIAEgHQAGgSgaAAQgIAAgFACIgIAGIgGAHIgEAHIgSAAQAEgKAGgHQAGgHAIgFQAHgEAIgCQAJgDAKAAIAGABIAIABIAIADQAEACADAEQACADABAGQABAFgDAHIgXA+QgDAHAHAAIADAAIADgBIgFAOIgFABIgGABQgGAAgDgCQgEgBgBgDQgBgCAAgDIABgHIgIAHIgJAFQgFADgHACQgHACgIAAQgIAAgGgDgAAYAAIgFACIgKABIgNACIgIACIgJADQgEABgEAEQgDADgCAFQgDAKACAFQADAFALAAQAHAAAGgCQAHgCAFgEQAGgDAEgFQAFgFACgFIAHgRIgEAAg");
	this.shape_4.setTransform(-0.4,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.3,-11.6,22.7,23.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.BT_RET = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Aiag8QABhKAwgSQAqgQA/AeQA9AcAtA0QAwA4ABAxQAAAjgQAdQgZAvg7AAQg2AAibjag");
	this.shape.setTransform(-35.5,-24.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({_off:false},0).wait(5));

	// E1
	this.instance = new lib.BT_RET_E1();
	this.instance.setTransform(-0.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(5));

	// E2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("ACQhxQgBgzADgnQiSBdiJBuQCBB8CQBPQAEgaABgYQAAgZABggQAAghABgkQABgiABgbQAAgbgBg0gACkjtQAFgBABAAAC+hxQgDgDAAgIAAjivQACgFADgBADqgyQADBOgIBpQgJBpgVAdQgVAdhKgcQhKgdhGg4QhJg4hPhEQgdgYgLgaQgMgYBnhRQBnhQBbg5QBdg5AmALQAmAMAFAhgAC+gDIAAgGAAWCrQAFAIAEACAC8CDIAAgIACcDzQACgCAFgDAhNhfQACgBADgCAhfBUIALAAAi4gCQACgDADgD");
	this.shape_1.setTransform(-1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3CC5").s().p("AiNAAQCJhtCSheQgDAnABA0IABBPIgCA9IgBBEIgBA5QgBAZgEAaQiQhQiBh8g");
	this.shape_2.setTransform(-0.6,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E1DF").s().p("ABoEMQhKgdhGg4QhJg4hPhEQgdgYgLgaQgMgYBnhRQBnhQBbg5QBdg5AmALQAmAMAFAhIAHC4QADBOgIBpQgJBpgVAdQgLAPgYAAQgXAAglgOgACcDzIAHgFIgHAFgAiJAAQCBB8CQBPQAEgaABgYIABg5IABhFIACg9IgBhPQgBgzADgnQiSBdiJBugAAfC1QgEgCgFgIQAFAIAEACgAC8CDIAAgIgAhUBUIgLAAgAi4gCQACgDADgDQgDADgCADgAC+gDIAAgGgAhNhfIAFgDIgFADgAC+hxQgDgDAAgIQAAAIADADgAAjivQACgFADgBQgDABgCAFgACkjtIAGgBIgGABg");
	this.shape_3.setTransform(-1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).wait(5));

	// fond
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#262627").ss(2,1,1).p("Ag9BnQACADACACQAFAGACAAQAEACACABQAVAIAWgYQAVgYAVgxQAVgvAEgwQAFgwgVgCQgMgBgMAFQgDABgCACQgEACgEADQgOAOgOARQgIALgIARIAAgBQgCAGgCAEQAAABgBAAQgHAOgFAPQgCADgBADAgwgHIgBADIgCADIAAABQAAAAgBAAQgLAkgCATQgDAVAGAZ");
	this.shape_4.setTransform(40.8,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(1.5,1,1).p("AgsBrIABAAQAVgFAQgcQAIgSAPgnQANghAFgQQAFgQACgIQACgJABgQQAAgQgCgFQgBgCgDgC");
	this.shape_5.setTransform(39,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AguB1IgGgDQgDAAgEgGIgFgFIAAAAQAWgGAQgbQAKgSAPgnIAQgxIAGgYQADgJAAgQQAAgQgCgFIgEgEQADgCADgBQALgFANABQAVACgFAwQgEAwgVAvQgVAxgVAYQgRASgQAAQgFAAgFgCg");
	this.shape_6.setTransform(41.1,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262627").s().p("AgqBqIAAAAQgGgaADgUQACgUALgkIACgCIAAgBIABgBIABgDQAFgPAHgOIABgBIAFgKIAAABQAHgQAGgMQAPgRAQgNQADgEAEgCIAEAEQACAGAAAPQAAARgDAIIgHAYIgSAxQgPAogHARQgRAbgVAGg");
	this.shape_7.setTransform(38.8,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#262627").ss(2,1,1).p("AEykVQCLBYAACqQAAA1gXA+Qg6CoijA/QgcALgdAGQioAlichHQhRglhCg8Qg2gxgbhEQgPglgKgrQgqixB2hgQB5hjDUAAQDOAAB8BPg");
	this.shape_8.setTransform(7.6,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCC2B9").s().p("Ai0E2QhRglhCg8Qg2gxgbhEQgPglgKgrQgqixB2hgQB5hjDUAAQDOAAB8BPQCLBYAACqQAAA1gXA+Qg6CoijA/QgcALgdAGQg6ANg4AAQhrAAhngvg");
	this.shape_9.setTransform(7.6,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#262627").ss(2,1,1).p("AhlhHQgJAAgHABQgQADgKgJQgEgCgCgFQgFgIAAgLQABgQAJgKQANgQAOgCQANgCAKAJQAOALABAaQAAADgWAcQAFACAGADQAYAOAXAVQAbAYANALQADgEABgBQAegkAkgBQAYgBA7ARQARAFgvA9QgPAWgvA3QgKAMgSAOAASCJQgBgBgCgCQgagagHggQgJglAYgjIAAAA");
	this.shape_10.setTransform(-36.6,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AD9E94").s().p("AguBTIgEgDQgbgagHggQgKgjAZgjIAAAAIAFgHQAegkAjgBQAYgBA7ARQAQAFgvA/QgPAUgsA3QgKAMgSAOg");
	this.shape_11.setTransform(-30,-18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4E1DF").s().p("AgZAfQgEgCgCgFQgFgIAAgLQABgOAJgKQANgQANgCQAMgCAKAJQAOALABAYQAAADgWAcQgJAAgGABIgHABQgLAAgHgHg");
	this.shape_12.setTransform(-48.4,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-39.9,106.3,79.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-53.1,-40.7,106.3,80.7), rect, rect, rect, rect];


(lib.BT_IMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{E0:0,"E1":5,"E2":10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AiaChQgUg+AAhcQAAhSA3hOQAxhHBGgnQBGgoAyAPQA2AQAABNQABCJgVB1QgpDqhtAAQh0AAgqiEg");
	this.shape.setTransform(-35.5,29.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(5));

	// E0
	this.instance = new lib.g_print("synched",0);
	this.instance.setTransform(5.4,-16.6);
	this.instance.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("AFRj8QADADADAEQAiAnAUAoQA8B3gyCLQgBACAAADQgmBxhTBFQgxAnhAAZQg3AVg3AJQhjAOhmgcQgCAAgCgBQgBAAgBAAQgEgCgEgBQgGgCgGgCQgkgMgfgSIhMg6IgSgUQgLgMgJgMQgGgHgFgIQhQhxAJh9QADg4AVg7QABgCABgDQAAgBABgBQA5iXCZgsQAAAAACAAQAMgEAOgDQASgFASgDQAVgEAUgCQCNgSCPAyQAHACAHADQA0ATApAjgAEtjpIAIAIACEk/QAGAAACABACNkYQBFAWAzA0QA4A5AVBPQAWBRgeBRQgdBMg/AxQhCA0hTAYQhTAYhUgTQhUgShDg0QhDg1gfhRQgchIALhLQALhRAzg+QAxg+BNgVQBHgSBJgHQBOgBBLAZgAGHglIAAAFAFQCoIAGgGACxEyIAEgEAhUlLIABAAIAOgCAkCkYQABgBABgBAlziMIADgHAmBBGIgFgMAhHFYQAEgEACgBAkfDrQgDgCgCgD");
	this.shape_1.setTransform(3.5,-14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF007D").s().p("AhNEpQhUgShDg0QhEg1gfhRQgchIALhLQALhRAzg+QAyg+BNgVQBGgSBKgHQBNgBBLAZQBGAWAyA0QA5A5AVBPQAWBRgfBRQgcBMg/AxQhCA0hUAYQguAOgtAAQgmAAglgJg");
	this.shape_2.setTransform(3.5,-14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E1DF").s().p("AiLFmIgEgBIgCgBIgIgDIgMgDQgkgNgfgRIhMg7IgSgTIgUgZIgLgOQhQhyAJh8IADAAQAEg4AVg7IABgEQA6iXCYgsIAagHIAlgIIAkgGIAGAlIACAOIgBgOIAOgBIgOABIgDglQCNgSCOAwIACABIAQAFQAyATAoAgIAgAeIAGAHQAiAmAUApQA8B3gyCLIgBAEQgmBxhTBFQgxAnhAAaQg3AVg3AIQgiAFghAAQhDAAhDgSgAhHFWIAGgEIgGAEgAgMkxQhJAGhHATQhNAVgxA9QgzA/gLBRQgLBLAcBIQAfBQBDA1QBDA0BUATQBUATBTgYQBTgYBCg0QA/gxAdhMQAehSgWhRQgVhOg4g6Qgzg0hFgWQhIgXhKAAIgHAAgACxExIAEgEgAkfDqIgFgFIAFAFgAFQCmIAGgFgAmBBEIgFgLgAGHgiIAAgEgAlziOIADgGgAE1jiIgIgIgAkCkZIACgCIgCACgACMk/QgCgCgGAAQAGAAACACg");
	this.shape_3.setTransform(3.5,-14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA8880").s().p("AjwEpQgygOgqgaQAfASAkAMIAMAEIAIADIACAAIAEABQBmAcBlgOQA1gJA3gVQBAgZAxgnQBThFAmhxIABgFQAyiLg8h3QgUgogignIgGgHIAJAKQCFCYhHC9Qg6CzivBEQhYAjhbAAQhDAAhFgUg");
	this.shape_4.setTransform(13.5,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).to({state:[]},5).wait(10));

	// E1
	this.instance_1 = new lib.g_print("synched",0);
	this.instance_1.setTransform(5.4,-16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(2,1,1).p("AjoFBIhMg6IgSgUQgLgMgJgMQgGgHgFgIQhQhxAJh9QADg4AVg7QABgCABgDQAAgBABgBQA5iXCZgsQAAAAACAAQAMgEAOgDQASgFASgDQAVgEAUgCQCNgSCPAyQAHACAHADQA0ATApAjIAgAdQADADADAEQAiAnAUAoQA8B3gyCLQgBACAAADQgmBxhTBFQgxAnhAAZQg3AVg3AJQhjAOhmgcQgCAAgCgBQgBAAgBAAQgEgCgEgBQgGgCgGgCQgkgMgfgSgAEtjpIAIAIACEk/QAGAAACABACNkYQBFAWAzA0QA4A5AVBPQAWBRgeBRQgdBMg/AxQhCA0hTAYQhTAYhUgTQhUgShDg0QhDg1gfhRQgchIALhLQALhRAzg+QAxg+BNgVQBHgSBJgHQBOgBBLAZgAGHglIAAAFAFQCoIAGgGACxEyIAEgEAhUlLIABAAIAOgCAkCkYQABgBABgBAlziMIADgHAmBBGIgFgMAhHFYQAEgEACgBAkfDrQgDgCgCgD");
	this.shape_5.setTransform(3.5,-14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DF007D").s().p("AhNEpQhUgShDg0QhEg1gfhRQgchIALhLQALhRAzg+QAyg+BNgVQBGgSBKgHQBNgBBLAZQBGAWAyA0QA5A5AVBPQAWBRgfBRQgcBMg/AxQhCA0hUAYQguAOgtAAQgmAAglgJg");
	this.shape_6.setTransform(3.5,-14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E4E1DF").s().p("AiLFmIgEgBIgCgBIgIgDIgMgDQgkgNgfgRIhMg7IgSgTIgUgZIgLgOQhQhyAJh8IADAAQAEg4AVg7IABgEQA6iXCYgsIAagHIAlgIIAkgGIAGAlIACAOIgBgOIAOgBIgOABIgDglQCNgSCOAwIACABIAQAFQAyATAoAgIAgAeIAGAHQAiAmAUApQA8B3gyCLIgBAEQgmBxhTBFQgxAnhAAaQg3AVg3AIQgiAFghAAQhDAAhDgSgAhHFWIAGgEIgGAEgAgMkxQhJAGhHATQhNAVgxA9QgzA/gLBRQgLBLAcBIQAfBQBDA1QBDA0BUATQBUATBTgYQBTgYBCg0QA/gxAdhMQAehSgWhRQgVhOg4g6Qgzg0hFgWQhIgXhKAAIgHAAgACxExIAEgEgAkfDqIgFgFIAFAFgAFQCmIAGgFgAmBBEIgFgLgAGHgiIAAgEgAlziOIADgGgAE1jiIgIgIgAkCkZIACgCIgCACgACMk/QgCgCgGAAQAGAAACACg");
	this.shape_7.setTransform(3.5,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA8880").s().p("AjwEpQgygOgqgaQAfASAkAMIAMAEIAIADIACAAIAEABQBmAcBlgOQA1gJA3gVQBAgZAxgnQBThFAmhxIABgFQAyiLg8h3QgUgogignIgGgHIAJAKQCFCYhHC9Qg6CzivBEQhYAjhbAAQhDAAhFgUg");
	this.shape_8.setTransform(13.5,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// E2
	this.instance_2 = new lib.g_print("synched",0);
	this.instance_2.setTransform(5.4,-16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#262627").ss(2,1,1).p("AFRj8IgggdQgpgjg0gTQgHgDgHgCQiPgyiNASQgUACgVAEQgSADgSAFQgOADgMAEQgCAAAAAAQiZAsg5CXQgBABAAABQgBADgBACQgVA7gDA4QgJB9BQBxQAFAIAGAHQAJAMALAMIASAUIBMA6QAfASAkAMQAGACAGACQAEABAEACQABAAABAAQACABACAAQBmAcBjgOQA3gJA3gVQBAgZAxgnQBThFAmhxQAAgDABgCQAyiLg8h3QgUgogignQgDgEgDgDgAEtjpIAIAIACEk/QAGAAACABACNkYQBFAWAzA0QA4A5AVBPQAWBRgeBRQgdBMg/AxQhCA0hTAYQhTAYhUgTQhUgShDg0QhDg1gfhRQgchIALhLQALhRAzg+QAxg+BNgVQBHgSBJgHQBOgBBLAZgAGHglIAAAFAFQCoIAGgGACxEyIAEgEAhUlLIABAAIAOgCAkCkYQABgBABgBAlziMIADgHAmBBGIgFgMAhHFYQAEgEACgBAkfDrQgDgCgCgD");
	this.shape_9.setTransform(3.5,-14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3CC5").s().p("AhNEpQhUgShDg0QhEg1gfhRQgchIALhLQALhRAzg+QAyg+BNgVQBGgSBKgHQBNgBBLAZQBGAWAyA0QA5A5AVBPQAWBRgfBRQgcBMg/AxQhCA0hUAYQguAOgtAAQgmAAglgJg");
	this.shape_10.setTransform(3.5,-14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4E1DF").s().p("AiLFmIgEgBIgCgBIgIgDIgMgDQgkgNgfgRIhMg7IgSgTIgUgZIgLgOQhQhyAJh8IADAAQAEg4AVg7IABgEQA6iXCYgsIAagHIAlgIIAkgGIAGAlIACAOIgBgOIAOgBIgOABIgDglQCNgSCOAwIACABIAQAFQAyATAoAgIAgAeIAGAHQAiAmAUApQA8B3gyCLIgBAEQgmBxhTBFQgxAnhAAaQg3AVg3AIQgiAFghAAQhDAAhDgSgAhHFWIAGgEIgGAEgAgMkxQhJAGhHATQhNAVgxA9QgzA/gLBRQgLBLAcBIQAfBQBDA1QBDA0BUATQBUATBTgYQBTgYBCg0QA/gxAdhMQAehSgWhRQgVhOg4g6Qgzg0hFgWQhIgXhKAAIgHAAgACxExIAEgEgAkfDqIgFgFIAFAFgAFQCmIAGgFgAmBBEIgFgLgAGHgiIAAgEgAlziOIADgGgAE1jiIgIgIgAkCkZIACgCIgCACgACMk/QgCgCgGAAQAGAAACACg");
	this.shape_11.setTransform(3.5,-14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA8880").s().p("AjwEpQgygOgqgaQAfASAkAMIAMAEIAIADIACAAIAEABQBmAcBlgOQA1gJA3gVQBAgZAxgnQBThFAmhxIABgFQAyiLg8h3QgUgogignIgGgHIAJAKQCFCYhHC9Qg6CzivBEQhYAjhbAAQhDAAhFgUg");
	this.shape_12.setTransform(13.5,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2}]},10).wait(5));

	// fond
	this.instance_3 = new lib.g_ecrou("synched",0);
	this.instance_3.setTransform(-44.6,6.6,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#262627").ss(2,1,1).p("ABHiPQgQgLAAgJQABgKAUACQAFABAGACIAAAAQAQAEATANQAbASgFALIgCAEQgCADgEAAIgWgCQABgEAKgQABUijIADgFQgNATgDAGQAAACgBAAQgBABAAACQABAQAJAVQAIARAHAIQgVAogGANQAPAJAEAFQAJAKgLASQgCAEgMAOQgFgQgugYQgfgRgJgGIgEgDQAHgMAGgPQADgFAUAJQAIAEAJADQAOgoAbg1ABehMQAIgRAMgYABDgXQgIgFgLgGQgKgGgKgFABGAlQANAJAKANQAKAOANAWQAMAWgJAbQgJAcggAAQghABgHgJQgIgIgOgoQgOgngGgIQgIgJgkARQglARgZgOQgNgIgLgQQgQgXALgRQARgdAegIQACgBBBgHAApBkQgEARAZAUQAFABAFADIALgEQADgQgBgQQgBgHAAgHIgJgKQgMgGgMAEQgHACgDATgAhrAjQgCgNAJgFQAIgFADgCQAhgQALAcQADAJgIAHQgcAVgdgYg");
	this.shape_13.setTransform(-37,37.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DF007D").s().p("AAxBsQgJgJgNgnQgPgngHgJQgGgIglARQglAQgYgOQgNgHgMgQQgPgVAKgSQASgfAegHQABgBBBgHIAEACIApAYQAuAZAFAQQANAKAKAKIAWAkQANAWgJAbQgKAcggAAIgGAAQgbAAgGgHgAA9AXQgGABgEATQgEASAaATIAKAEIAKgEQADgQgBgPIgBgOIgJgKQgHgEgHAAQgFAAgFACgAhPgtIgLAIQgIAEACANQAcAXAcgUQAIgHgDgIQgGgTgQAAQgJAAgNAGgABRgSQgFgQgugZIgpgYIgEgCIAOgbQABgFAWAJIAQAGIAVAMIATALQAPAJADAFQAJALgLATIgNARIAAAAgAgPhVg");
	this.shape_14.setTransform(-38,42.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E4E1DF").s().p("AgbA9IgUgLQAOgoAcgzQAAAQAIAVQAHAPAHAIQgTAogGANIgTgLgAADgEQgIgVAAgQIABgDIABgCIANgZIgDAFIAEgFIAlAfIgLAUIgUAnQgHgIgHgPg");
	this.shape_15.setTransform(-29.3,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#262627").ss(2,1,1).p("AH6A0QgLBvhpB8QhpB7jgALQjfAKithuQishvAAjCQAAg8AahHQBCjBC7hIQAfgMAigHQDAgrCWArQCWArBEA/QBEA+AaBXQAZBWgKBug");
	this.shape_16.setTransform(0.6,-12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCC2B9").s().p("AlPFBQishvAAjCQAAg8AahHQBCjBC7hIQAfgMAigHQDAgrCWArQCWArBEA/QBEA+AaBXQAZBWgKBuQgLBvhpB8QhpB7jgALIgmAAQjIAAiehkg");
	this.shape_17.setTransform(0.6,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_3}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-55.3,105,110.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-53,-55.3,105.5,114.4), rect, rect, rect, rect];


(lib.BOLD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":5,"E3":10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// E1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA6QgHgCgFgFQgFgEgEgGQgDgGAAgJQAAgIACgGQADgHAFgEQAFgCAHgDQAGgDAIgBIAbgEIAIgCQAEgCAAgFQAAgFgDgDQgBgCgEgBIgHgCIgFgBQgGAAgEACQgEABgCADIgDAFIgBAFIgfAAQABgNAFgHQAGgJAHgDQAIgFAJgBIARgBIAPABQAJABAIADQAIAEAGAHQAEAGAAAKIAAA8QAAAKADAEQACACADABIAAAFIgkAAIgBgEIgBgCIgBgDIAAgFIgHAHQgDACgFACQgEADgFACQgGABgJAAQgGAAgHgBgAALAEIgNADIgJACIgGADIgGAEQgBAEAAAEQAAAEABADIAEAEIAFACIAFABIAJgCQAEgCAFgDQAEgCACgFQADgDAAgGIAAgOIgHADg");
	this.shape.setTransform(0.2,0);

	this.instance = new lib.g_rondbt("synched",0);
	this.instance.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},5).wait(10));

	// E2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA6QgHgCgFgFQgFgEgEgGQgDgGAAgJQAAgIACgGQADgHAFgEQAFgCAHgDQAGgDAIgBIAbgEIAIgCQAEgCAAgFQAAgFgDgDQgBgCgEgBIgHgCIgFgBQgGAAgEACQgEABgCADIgDAFIgBAFIgfAAQABgNAFgHQAGgJAHgDQAIgFAJgBIARgBIAPABQAJABAIADQAIAEAGAHQAEAGAAAKIAAA8QAAAKADAEQACACADABIAAAFIgkAAIgBgEIgBgCIgBgDIAAgFIgHAHQgDACgFACQgEADgFACQgGABgJAAQgGAAgHgBgAALAEIgNADIgJACIgGADIgGAEQgBAEAAAEQAAAEABADIAEAEIAFACIAFABIAJgCQAEgCAFgDQAEgCACgFQADgDAAgGIAAgOIgHADg");
	this.shape_1.setTransform(0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3CC5").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[]},5).wait(5));

	// E3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF007D").s().p("AghA6QgHgCgFgFQgFgEgEgGQgDgGAAgJQAAgIACgGQADgHAFgEQAFgCAHgDQAGgDAIgBIAbgEIAIgCQAEgCAAgFQAAgFgDgDQgBgCgEgBIgHgCIgFgBQgGAAgEACQgEABgCADIgDAFIgBAFIgfAAQABgNAFgHQAGgJAHgDQAIgFAJgBIARgBIAPABQAJABAIADQAIAEAGAHQAEAGAAAKIAAA8QAAAKADAEQACACADABIAAAFIgkAAIgBgEIgBgCIgBgDIAAgFIgHAHQgDACgFACQgEADgFACQgGABgJAAQgGAAgHgBgAALAEIgNADIgJACIgGADIgGAEQgBAEAAAEQAAAEABADIAEAEIAFACIAFABIAJgCQAEgCAFgDQAEgCACgFQADgDAAgGIAAgOIgHADg");
	this.shape_4.setTransform(0.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#262627").ss(2,1,1).p("AAFhoQgrgFggAeQggAeAAAwQAAAuAgAeQAfAfAnAAQAqAAAcgZQAcgaAEgrQAEgpgcgjQgdgjgsgFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBLQgggeAAguQAAgwAggeQAggeArAFQAsAFAdAjQAcAjgEApQgEArgcAaQgcAZgqAAQgnAAgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.3,-11.6,22.7,23.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.g_page = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.g_ecrou2("synched",0);
	this.instance.setTransform(176.4,168.5,1,1,0,0,180);

	this.instance_1 = new lib.g_ecrouface("synched",0);
	this.instance_1.setTransform(153.1,274);

	this.instance_2 = new lib.g_ecrou2("synched",0);
	this.instance_2.setTransform(-129.1,279.1,1,1,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AjJhsQgygGgwgTQgSAigKAPQgKAOgKAOQArAXA+AEQALACAUAAQACAAAAAAQAHgKADgFQAFgIgBgXQgBgVgFgOgAguhtQAMAUABANQABAOgLASIgJAOQAdgBAPABQAoABAdAGIAAAAQAAAAABAAIAAAAQABAAABAAQAOAEAkAKQAIgCAHgLQAHgLAEgPQAEgPgLgQQgMgRgIgIQgUgEgVgBQgpgFhNAFIAAAAQgIAAgHABQhaAGgygGAjRgbQAqAABTgCQASgBAOAAABygJQACAAACABQAfAIARAKQASALAMAKQAMAJAVAaQAHgCAHgCQA0gUgTg9QgPgMgLgIQgQgOgFgDQgCgBgNgIQgvgcg2gLAFdCGQgbhegug7");
	this.shape.setTransform(-256.1,-216.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA8880").s().p("ADyA+QAngPAAgkQAAgMgGgSQAGASAAAMQAAAkgnAPIgNAEQgVgZgNgKQgMgKgRgLQgRgKgfgIIgEgBQAHgCAIgLQAGgLAEgPIACgIQAAgLgJgMQgMgRgHgHQA1ALAwAbIAPAJIAVARIAZAUQAvA8AaBcQhThGgXgBgABAgWIgFgCIACABIgBAAQgcgFgogCIgtAAIAKgNQAKgSAAgNIAAgCQgBgNgNgUQBOgFAoAEQAWADAUAEQAHAHAMARQAJAMAAALIgCAIQgEAPgGALQgIALgHACIgygNgAjTgbQgUAAgLgCQg+gDgrgYIAUgdQAKgOARghQAxASAyAGQAFAOABAVIAAAFQAAATgEAIIgKAOIgCAAgAjHgpQAEgIAAgTIAAgFQgBgVgFgOQAyAGBZgGIAPgCIAAABQANAUABANIAAACQAAANgKASIgKANIgfAAQhTADgqAAIAKgOgAjJhsIAAAAgAgvhtIAAAAg");
	this.shape_1.setTransform(-256.1,-216.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262627").ss(2,1,1).p("AiFiMIAAgBIABAAQAAABgBAAgAjEgSQABgCABgBQAGgRAHgRQATgwAdglAjjBpIAAAAIAAABIAAABIAAgCIAAAAIAAAAIAAABAjjBrIABADIAAACIABACIACAHIAVAlQAfAeAlAVQAHAEAHAEIAIAEIAKADQAGACAGACQADACAEABQADAAAEAAQAiAAAageQATgZgKgrQgYgMgbgGQgOgEgPgCQgPgDgPgBIADgpQgCABgCgBQg3ghgtAlQABgLACgKQADgUAQgtAjiBwIAAABIABABAjiBxIAAAAIADAIAj+DaIgFgHQghgVgDhaQgDhbBmgbAjaBEIgJAlACBk1QAJgIAAgOQgBgfASgNQASgMAdABQAdABAVADQAVAEANgGQAIA/ABAcQAAAbABA1QABA1gDBXQgQAGgVAGQgUAGgagDQgagDgEgBQgEAAgOgFQgNgFgDgKQgCgKABgJIgEAAQAIAAAHgBQAZgHARgEQALAAAQgYQACgCAEgMQAFgMABgnQABgmgLgUQgMgTgCgIQgDgHgqgVQgCAAgCAAQgLACgMACQgGABgHABgAEHlbQgGACgGACQgDAAgDAAACvlaQAAgBgEAAQgIABgDAAACek5QgGACgKACQgGABgJABQABgBABgBABBkaQAEgDAFgDQAKgFAKgEQAAgBABAAQgBAAgBAAQACAAACgBABfkqQABAAABgBQABAAACgBIABAAQAEgCAYgHABBkaQAFgBAGAAQAiAAAVAZQAHAIAEAJQAMAVACAbQADAjgRAbQgBACgCADQgWAagaABQgBAAgBAAQgRAAgQgiQAggCALgCQAKgCAFgfQADgfgMgUQgMgTgZgBQgZAHgKADAgjjRQAEgBAvgQQABAAABgBQAGgCAGgBQABgBACAAQgCgQAKgPQAKgPAOgFAgjjRIAAAAIAAABQgmATgUALQgCACgDACQAVgSAqgQAhwihQACgDACgCIAKgIAhwihQAFADAUAEQAMADAIAKQAJAMADARQACAJADANAA4iFQgWABgSAKQg3AWgLAKQgLAJgHANQgaAtgDAXIA8ARIAEABIAdAKQANAHAPAJQAaAQAWAVQAtAqAPA9QACAIACAKQAAABAAAAAg4BrQgQgxAhgjQADgDADgCAAHCSQgGgHgFgEQgBgBgBAAIAAAAQAFAFACADQAGAFAAgBQACACABACQAaAkADAoQAagZAwAAQAQAAADABQACABACAAQADAdgLA7IgEAIQgEAHgEAHQgiAwg9AMQgDADgEABQgVAFgYAEQgQABgPAAIgBAAQgqgCgkgbQgzglgPg+QgYgOgSgVIgFgGAgHCFIABABAhyBAIARhAACShlQgiADgVgBAEIhpQgEAMgCABAiEiNQAJgLALgJAAnDiQADAWgDAIQgMAbgMAIQgVAQgZAHQgMADgOAAQgJALgFAKQgEAKAAAJQAAAJAAACQABACAMALAhTDnQADABADABQARAGASAFQABAHAHANQAGAOAAAMQAAAFgCAGQgDAFACAIAhwDdIgEgMQgBgGgBgGQgGguAHguAg5E9QgTAAgUgFQg+gPgxgmAjKCeQgIADgHAEQgbAPgLAdIABAJ");
	this.shape_2.setTransform(-230.7,-212.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E1DF").s().p("AgEBcQgRAAgQgiQAggDAJgCQAKgCAFgfQADgdgMgTQgKgUgZAAIgjAJQgCgPAKgPQAKgQAOgEQAFgCAGAAQAgAAAVAaQAHAIAEAIQAMAVACAcQADAhgRAaIgDAFQgWAagYACIgCAAg");
	this.shape_3.setTransform(-221.2,-231.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D796B").s().p("AAZCjIgcgEIgSgFQgNgFgDgKQgCgKABgJIgEAAIAPgBQAZgHAPgEQALAAAQgYIAGgOQAFgMABgnIAAgGQAAgggKgSQgMgTgCgIQgDgHgogVIgEAAIAEAAQAoAVADAHQACAIAMATQAKASAAAgIAAAGQgBAngFAMIgGAOQgQAYgLAAQgPAEgZAHIgPABIAEAAQgiADgVgBQAagBAWgaIADgFQARgbgDgjQgCgbgMgTQgEgJgHgIQgVgZgiAAIgCgFIAUgJIABgBIACgBIADgBIABAAQAEgCAYgHQgOAEAGgBIAGgBIAPgCIAQgEIAHgCIgXAEIgNACQAJgIAAgOQgBgfASgNQASgMAbABQAdABAVADQAVAEANgGQAIA/ABAcIABBOQABA1gDBXIglAMQgNAEgQAAIgRgBgABICBQACgBAEgMQgEAMgCABgABBh4IAMgEIgMAEIgGAAIAGAAgAgJh7QAAAAAAAAQAAgBgBAAQgBAAAAAAQgBAAgBAAIgLABIALgBQABAAABAAQAAAAABAAQABAAAAABQAAAAAAAAg");
	this.shape_4.setTransform(-212.1,-234.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA8670").s().p("AhfCeIABAAIADAHgAhgCVIABACIAAABgABdA+IAEABQgEABgCADgABeikIABAAIgBAAg");
	this.shape_5.setTransform(-243.9,-217);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA8880").s().p("AAQE6IAAgGIgNgMIAAgMQAAgIAEgLQAFgKAJgLQAOAAAMgDQgMADgOAAQgJALgFAKQgEALAAAIIAAAMIANAMIgBAGQgogCgkgaQgzgmgPg+QAxAnA+AOIAAAAIACABIABAAQAOAEAQAAIAAAAIABAAIABAAIACAAIgCAAIgBAAIgBAAIAAAAQgQAAgOgEIgBAAIgCgBIAAAAQg+gOgxgnQgYgOgSgUIgFgGIgBgKQALgcAbgPIAPgIIgVglIAVAlIgPAIQgbAPgLAcIgEADQghgWgDhaQgDhYBmgdQgQAugDAVQgCAJgBAMQABgMACgJQADgVAQguIACgEIANgiQATgvAdglIABgBQAJgMALgJIAEgEIAKgJIAFgDQASgMAmgTIAAAAIA1gRIACgBIAMgEIADgBIAjgJQAZAAAMAUQAMATgDAfQgFAfgKACQgLACggADQgWABgSAKQg5AVgLAKIgFgWQgDgQgJgMQgIgKgKgDQgUgFgFgDQAFADAUAFQAKADAIAKQAJAMADAQIAFAWQgLAKgHAMQgYAugDAXIA6ATIgCAFQgWAYAAAcQAAAOAFAQQgFgQAAgOQAAgcAWgYQADgDADgBIAdAJQAPAIAPAJQAaAQAWASQAtAqAPA9IAEASIgEABQgDgBgQAAQgwAAgaAZQAagZAwAAQAQAAADABIAEABQADAcgLA7IgEAJIgIANQgiAxg9AMIgHADQgXAGgYADIgYABIgHAAgAB3C3QgMAbgMAIQgXARgZAGQAZgGAXgRQAMgIAMgbQABgEAAgJIgBgQQgDgogagkIgDgFQgGgHgHgEIgCgBIAAAAIAJAIIAJAJQAaAkADAoIABAQQAAAJgBAEgAAvDxIgBgGQAAgEACgCQACgGAAgFQAAgNgGgOQgHgMgBgHIgjgMIABgBQAiAAAagfQAVgYgMgrIABAAIgBAAQgYgNgbgGQgOgEgNgCIgegEIADgmIgDAmQgHAuAGAuIACANIgEAHIgOgIQglgVgfgeQAfAeAlAVIAOAIIAIAEIAKAEIAMAEIAHACIAEACIAjAMQABAHAHAMQAGAOAAANQAAAFgCAGQgCACAAAEIABAGgAiSAoIAAABIADAHIgCgHIgBgBgAiSAoIAAgDIgBgCIABACgAiTAjIAAgBIAAgBIAAgBIAAAAgAiKgCIgJAiIAJgiIABgBIACgCIABAAIAAAAQAWgRAYAAIAAAAIAAAAQAWAAAYAOIACABIACABIACAAIACAAIARhCIgRBCIgCAAIgCAAIgCgBIgCgBQgYgOgWAAIAAAAIAAAAQgYAAgWARIAAAAIgBAAIgCACIgBABgAAQE0IAAAAgAh/C6IAAAAgAh6BVgAAcijIAAAAg");
	this.shape_6.setTransform(-238.7,-205.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#262627").ss(2,1,1).p("AAR78QgJgDgMABIgWACAAM/2QgJgDgMABQgZACgCAAAAgzWQgHADgSACQgNADgFACAAMrYQgFAAgIADQgKACgFAAAAbvDQgJgDgLABQgRACgBAAAAljVQgFAAgFAAQgbAAgLgFAAW3lQgbAGgQAAAAbnjQgcAKgPAAAAlD2QgJgDgOABQgXACgCAAAAgAVQgHAAgNgDQgMgCgGAAAAgHmQgJgDgNABIgVACAAgUQQgJgDgLABQgRACgBAAAAlP9QgHACgSADQgNACgFADAAbX2QgFAAgKACQgKADgDAAAAgLsQggAIgQAAAAWbuQgWAHgLAAAARf5QgZgBgNgE");
	this.shape_7.setTransform(160.7,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2F2F2F").ss(2,1,1).p("AgLAYQAFgSASgd");
	this.shape_8.setTransform(-194.9,260.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#262627").ss(2,1,1).p("AgO+5QAVgHANAAAgY3bQAKADAKgBQASgCABAAAgT7BQAFAAAKgCQAJgDAFAAEgAJgjEQAaABANAEAgdzIQAIgCARgDQANgCAGgDAgYu3QAfgIASAAAgdnBQAKADAOgBQAWgCADAAAgYqxQAKADANgBIAVgCAgYjgQAIAAAMADQALACAIAAAgdAKQAFAAAFAAQAaAAANAFAgTEYQAdgKAPAAAgOINQAFAAAJgDQAKgCAFAAAgTLuQAKADAJgBQATgCABAAAgYQBQAIgDAQgCQAOgDAGgCAgTYnQAKADALgBIAXgCAgOUQQAcgGAQAAAgYcXQAKADAOgBQAWgCADAAAgTfuQAIAAALACQAMADAIAAEgAOAjFQAGgGANgHQAOgHAGgF");
	this.shape_9.setTransform(-205.4,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#262627").ss(1.5,1,1).p("AA4gDIhvAH");
	this.shape_10.setTransform(-31.6,266);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#262627").ss(2,1,1).p("EAPHgoiQg2gBg6gCEAWFApdQCHgFBNgIQAZgBAYgBQBcgEAug5QAsg4ABhqQAAgVAAgVIAAgnQAM/jgSxGQgHnDgEodQgBkLgBi+QgDhNgFhIQAAgEAAgEQgCgPgBgOQgCgdgKhKQgFgkgSgXQgTgXgggJQg/gRhmgIQhGgEhggDQhNgChegCQgQgBgPAAQgSgBgTAAQhhgChZgBQh4gChogCQh4gChkgBQhsgBhUAAQjtgBiNACQj1AIhFgBQh4gChogCQh4gChkgBQhsgBhUAAQk5gBiWADQgaAAgVABQgFAAgFAAQiIAEg7AGQhDAIghAcQgeAcgLA6QgDANgBATQgEAmAAA+QAAAAAAABQAAACAAACQgBAOAAAQQAABEABBiQgHAmgHS3QgJYDALdHQACA/AKAiQAyBEAzAEQgGAFBAAHQBAAHBRgBQCuAFBRACQgBgBABAAQACgXAAgMEAIfgojQgpgCgrgCQhKgEg+AAQgYAAgXAAQhmAEhKABQhTACguAAEAbmglnQAAgDAAgEQgCghgBgnQAAgGAAgGQgDgbgNgSQgNgQgqgOQgggKgzgFQgOgBgQgBQgKAAgLAAQhTAAg8AAEAbpglIQAAgFAAgEQgBgUAAgCEAbrgksQgBgOgBgMEAL7AotQAXAAAYAAQFygBCfgGQAagBAUgBQCPgJBNgMQBSgKAbgIQAogKAQgXQAPgWAFgyQABgTABgyIAAgeQAEnYAElRQAHq6gGs7QgP/RgLghIAAjWQgBhJgDgtEAWFApdQgjABgnABQgRAAgSABQgtAAg1ABQAAgGgCgMQgDgPgEgIEAWFApdQgIgqAAgCEAIdApgQicgChOAAQgzgBgRAAQhDAAgkAAQgNAAgxgBQgBgBABAAQACgXAAgMEAEzApeQACgIgBgLQgBgMAAgFEAIdApgQAEgSgEgUEAPaApiQhjAAh0AAQgngBgpAAQhSgBhEAAEAMDApiQgDgOgFgnEAPaApiQABgLAAgHQABgNgCgLEgAxAooQAFgBAFAAQApABAdABQA4AABqACQBqACAoAAQAnABGBgBEAS2AphQhhABh7AAEgMRgojQgpgCgrgCQhKgEg+AAQgYAAgXAAQhmAEhKABQiKADgpgBQgUgBgPAAQgsgBgNACQgBAAAAAAQgPADhnADQgFABgDAAQh0AMgSAjQgbAggCAiQgCAYgBAiIAAAAQgCANAAAOQAAADAAADQAAAdAAAHQAAABAAAAQgCAzAAByQAAAOgDA4QgDAwgEKXQgFNOACQgIAHehQAHA2AOAVQAdAgBQAPQBRAQBoAEQBoAEA4ACQA4AABqACQBqACAoAAQAnABGBgBQAXAAAYAAQEzgBCigEQAKAAAKAAEgFpgoiQg2gBg6gCEgF0ApiQhjAAh0AAQgngBgpAAQhSgBhEAAQAEgSgEgUEgF0ApiQABgLAAgHQABgNgCgLEgChAo4QAEAIADAPQACAMAAAGQhhABh7AAEABKApcQgsgBhFgCEgQbApeQgzgBgRAAQhDAAgkAAQgNAAgxgBEgQbApeQACgIgBgLQgBgMAAgFEgMxApgQicgChOAAEgJTAotQAFAnADAO");
	this.shape_11.setTransform(-21.9,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2F2F2F").ss(2,1,1).p("EAL5gojQgFgMgBgMIAAgZEAPZgogQgCAAgCAAQgMgBgJABEAPZgogQABgOgCgLQgBgJgFgVEANRgojQgeAAg6AAQhTAAiOACQgCgUAAghEAE8gooQgCgTgCgZEAZDgoZQAAgFADgJQADgKAGgLEAb5goNQgHAIgPAJQgQAJgGAGEASxgpTQAAAdADATEAV8gpNIAAAuIAEAEQgoAAgeAAQggAAhKgBQgZAAgdAAQh0gChNgCEAbfglrQAIgBASgHQAPgGAJABEAbiglkQgBAAgBAAEAbygimQAHgCAWgEQAQgBAIgFEAb5AlSQAJgDAVgCQAZgDALgCEAcNAoTQgHgHgJgMQgLgNgGgGEAZTApSIAAg3EgI3gojQhTAAiOACQgCgUAAghEgP0gooQgCgTgCgZEgTTgojQgGgPgDgbEgAkgohQgpAAgkABQABgOgCgLQgBgJgFgVEABdgojQgGgPgDgbEgHfgojQgeAAg6AAQgFgMgBgMIAAgZEgFXgogQgCAAgCAAQgMgBgJABEgFegpXQAFAVABAJQACALgBAOEgBxgogQi2ABgwgBEgbmgnsQgdgQgQgPEgZhgoaQAAgJgDgRQgDgOgDgJEgWogojIAAgzEgc6glTQAJAAAIADQAFABADAAQADABABAAQACAAADgBQAHgBAIgFEgc6giLQACAAACABQAOAAAeAGEgYJApYIAAgw");
	this.shape_12.setTransform(-21.2,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D796B").s().p("EAMDApiQgDgOgFgnQAFAnADAOIhQgBIiWgBQACgJAAgKQAAgJgCgKQACAKAAAJQAAAKgCAJIjqgCIABgNIAAgGIgBgRIABARIAAAGIgBANIhEgBIhnAAIg+gBIgBgBIABAAIACgjIgCAjIgBAAIABABIhxgDIhxAIQAAgGgCgMQgDgPgEgIQAEAIADAPQACAMAAAGIjcABIABgSIAAgGIgBgSIABASIAAAGIgBASIjXAAQgDgOgFgnIAvAAQEzgBCigEIAAgBIAUgBIAAACIAKAAIAAgCIAKABIBGACICiACICSACIGoAAIAvAAQFygBCfgGIAugCQCPgJBNgMQBSgKAbgIQAogKAQgXQAPgWAFgyIAChFIAAgeIAIspQAHq6gGs7QgP/RgLghIAAjWQgBhJgDgtIAAgBIgCgaIAAgCIAAgJIgBgWIgCAAIAAgHQAHgBATgHIAAAAIADgBIAAAAIAJgCIABAAIAGgBIACAAIAAAAIACAAIABAAIgBAAIgCAAIAAAAIgCAAIgGABIgBAAIgJACIAAAAIgDABIAAAAQgTAHgHABQgCghgBgnIAAgMQgDgbgNgSQAHgHAPgJQAPgIAIgJQgIAJgPAIQgPAJgHAHQgNgQgqgOQgggKgzgFIADgOQADgJAHgMQgHAMgDAJIgDAOIgegCIgVAAIiPAAIgFgEIAAguIAAAuIAFAEIhHAAIhpAAIg3gBQhzgBhNgDIAAgGIgBgTIgGgdIC6ADIAlABIAfABICrAEQBgADBGAEQBmAIA/ARQAgAJATAXQASAXAFAkQAKBKACAdIADAdIAAAIQAFBIADBNIACHJQAEIdAHHDQASRGgMfjIAAAnQgLADgYACQgVACgJADQAJgDAVgCQAYgCALgDIAAAqQgBBqgsA4QgIgIgJgMIgRgTIARATQAJAMAIAIQguA5hcAEIgxACIAAg4IAAA4QhNAIiHAFIgIgsIAIAsIhKACIgjABIhiABQAAgGgCgMQgDgPgEgIQAEAIADAPQACAMAAAGIjcABIABgSIAAgGIgBgSIABASIAAAGIgBASIjXAAgEgBPAooIAUAAIgUAAgEgAxAooIAKgBIgKABgEAcWgiuIgeAFIAegFQAPgCAJgEQgJAEgPACgEAS6gomQgCgTAAgcQAAAcACATIAAAAgEgKbAphIiWgBQACgJAAgKQAAgJgCgKQACAKAAAJQAAAKgCAJIjqgCIABgNIAAgGIgBgRIABARIAAAGIgBANIhEgBIhnAAIg+gBIgBgBIABAAIACgjIgCAjIgBAAIABABIj/gHIAAgvIAAAvQhRABhAgHQhAgHAGgFQgzgEgyhEQgKgigCg/QgL9HAJ4DQAHy3AHgmIgBimIABgeIAAgEIAAgBQAAg+AEgmQABgTADgNQALg6AegcQAhgcBDgIQA7gGCIgEIAKAAIAvgBQCWgDE5ABIDAABIDcADIDgAEQBFABD1gIQCNgCDtABIDAABIDcADIDgAEIAGAdIABATIAAAGIgEAAQgMAAgJABIhwgDIhXgBQgFgMgBgMIAAgZIAAAZQABAMAFAMQhTAAiOADQgCgUAAgiQAAAiACAUIhUgEQhKgEg+AAIgEgsIAEAsIgvAAIiwAFQgGgOgDgcQADAcAGAOIiBACIhNABIAAgGIgBgTIgGgdIAGAdIABATIAAAGQi2ACgwgCIAAgGIgBgTIgGgdIAGAdIABATIAAAGIgEAAQgMAAgJABIhwgDIhXgBQgFgMgBgMIAAgZIAAAZQABAMAFAMQhTAAiOADQgCgUAAgiQAAAiACAUIhUgEQhKgEg+AAIgEgsIAEAsIgvAAIiwAFQgGgOgDgcQADAcAGAOQiKADgpgBIgjgBIAAg0IAAA0QgsgBgNACIgBAAQgPADhnADIgIABQAAgJgEgRIgGgWIAGAWQAEARAAAJQh0AMgSAjQgdgRgQgOQAQAOAdARQgbAggCAiQgCAYgBAiIAAAAQgCANAAAOQgIAEgHACIgGAAIgEAAIgHgCQgJgCgIAAQAIAAAJACIAHACIAEAAIAGAAQAHgCAIgEIAAAGIAAAkIAAABQgCAzAAByQgegFgNgBIgEAAIAEAAQANABAeAFIgDBGQgDAwgEKXQgFNOACQgIAHehQAHA2AOAVQAdAgBQAPQBRAQBoAEICgAGICiACICSACIGoAAQAFAnADAOIhQgBgEAcUAoRIAAAAgEAdBAlFIAAAAgEgcEgiHIAAAAgEgcCglXIAAAAgEgIwgomIAAAAgEAPZgpZIAAAAg");
	this.shape_13.setTransform(-21.9,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#262627").ss(2,1,1).p("EgbZAqxQg4gIg6ggQhagzgFkmQgFkngGoiQgGoiAKrfQAKrdgFiuQgFivAJrZQADkuADjKQADjKAckNQADhmBQg6QAkgaC5gQQDjgUHDgGQMzgKOdAgQOfAgBVAWQBUAWANB1QAGBBAGBQQAyLeACe4UAACAiSgA6ABrQg6BqgwAPQgwAOgXALQzFBDvWgQQvGgQj8geIgJgBIgugCQAPABAbACQgeADgggEgEAaTgovIBsBTEgcGgnAIBKhtEgaOAo6IhugLEgb9AovQgBgBAAAAEgabAqyQACgBACAAEgbFAqvIgUACEgaOAqyQgDAAgKAA");
	this.shape_14.setTransform(-22.3,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#262627").ss(1.5,1,1).p("EAb/goOIABAxIAAAfIAAAgQABAYABAYIAvWAIgIYQIgMP9Ega7gouQDFgGDFgEQDIgFDHgEQFdgGFYgBQPQgFOxAdEgb+AotQgymOABtYQABwqgCgOQAAgGAAgGQAAgOAAgNQgBkjADkrIAAgRQAAgCAAgBMAAoghHEgb8AouIAAAAAcdYjQgBAHAAAIQAbLdg3EEIAAABQAAAGgBAHIAAACIAAAAQAAgCAAgCIAAgEIAAgGQAAAAAAgBIABAAEAcBAlxQAAADAAADIAAABEAcBAl3IAAgFIAAgFIAAgSEAcBAlyQAAAAAAgBIAAgBQAAgBAAgCEAcBAmVIAAgTQAAgCAAgBIAAgOEAcBAmCQAAgJAAgIEAcBAmVIgBALQAAACAAACQAAACAAACIAAACIAAAQQAAADAAACQAAABAAACQAAAEAAAFIAAgFIAAALQAAgDAAgDEAcAAnCIAAAEEAcAAnRIAAAGQAAACAAACIAAAQIgBAAgEAcAAnrIAAACQAAACAAABIAAACQAAAAAAABIAAAEIgBAFQAAgDAAgEIAAgCIAAgIUgBiACHg0rgA5EAcAAnwIgBADIABAAEAb/AoKIAAgMQAAgBAAgBEAcAAoFIAAAEIgBALQAAgCAAgDIAAgFgEAcAAoTIAAgKIAAgYIABhNIAAgPEAcAAn3IAAAOEAcAAmqQAAgDABgDEAcAAoTQAChHgCAlEAb/AohIAAgGEAb/AojIAAACIAAAAQAAgBAAgB");
	this.shape_15.setTransform(-22.4,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DF007D").s().p("EgHMArgQvGgQj8geIgJgBIgugCIgUACQg4gIg6ggQhagzgFkmQgFkngGoiQgGoiAKrfQAKrdgFiuQgFivAJrZIAGn4QADjKAckNQADhmBQg6QAkgaC5gQQDjgUHDgGQMzgKOdAgQOfAgBVAWQBUAWANB1QAGBBAGBQQAyLeACe4UAACAiSgA6ABrQg6BqgwAPQgwAOgXALQvaA2s9AAQjGAAi+gDgEgaOAo6UA0qAA5ABjgCHIAAgaIAAAGIAAAEIAAAQIAAAAIAAAAIAAACIAAADIAAADIAAgIIAAAIIAAACIAAAHIAAACIAAAMIAAAFIAAAFIAAAAIAAAAIAAgLIAAAKIAAABIAAgBQA4kEgbrdIAAgPIAAgEIANv9IAI4QIgw2AIAAgFIgBhLIgBgfIhshTQuxgdvQAFQlYABlcAGImPAJQjFAEjGAGIhKBtIAJhrIAAgUIgCATQgEA1gDA3MgAoAhHIAAADIAAARQgDErABEjIAAAbIAAAMQACAOgBQqQgBNYAyGOIABAUIABgTgEAb+AomIABAAIAAgCIAAgCIAAgGIAAgGIAAgBIAAABIAAAGIgBAEIAAAEIAAACIAAAAgEAb/AoiIAAgNIAAANgEAb/gncIgBgxgEgbZAqxIAUgCIAqADIgaABQgSAAgSgCgEgabAqyIAEgBIAJABIgNAAgEgabAqyIgqgDIAuACIgEABIAAAAgEgbFAqvgEAb+AomIAAgCIABAAIAAACgEAb/AokgEAb+AokIAAgEIABgEIAAAGIAAACgEAb/AoLgEAb/An/IAAgCIAAgFIAAAOIAAAFgEAb/An9IAAAAgEAb/An2IAAgCIAAAAIAAAEIAAAFIAAgHgEAb/An0gEAb/An0gEAb/An0gEAb/AnxIAAACIAAABIAAAAgEAb/AnxgEAcAAmpIAAgEIAAgEIAAgLIAAAPIAAAGgEAcAAmAIAAgHIAAgBIABgGIgBAOIABgOIgBARIAAgDgEAcBAlyIAAAAg");
	this.shape_16.setTransform(-22.3,1.7);

	this.instance_3 = new lib.g_bulleverre("synched",0);
	this.instance_3.setTransform(-166.4,-278.7,1,1,90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#262627").ss(2,1,1).p("AhKAFQgBAgASARQARAQAgAAQBTAAAAhKQAAgXgdgWQgcgUgVAAQgqAAgOAWQgPAWAAAegAgnAGQAAgIAKgNQALgNANAAQALgBALAIQAKAHABAOQAAAMgKAMQgLALgJAAQgMAAgIgBQgIgDgEgHQgFgJAAgJg");
	this.shape_17.setTransform(175.2,168.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgQAeQgIgCgEgIQgFgIAAgJQAAgIAKgNQALgNAMAAQAMgBALAIQAKAHABAOQAAAMgKALQgLALgLABIgDAAQgIAAgHgCg");
	this.shape_18.setTransform(174.6,169);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCC2B9").s().p("Ag5A2QgSgQABggQAAgfAPgVQAOgXAqAAQAVABAcATQAdAWAAAXQAABKhTAAQggAAgRgQgAgFgcQgNAAgLANQgKANAAAIQAAAKAFAIQAEAIAIACQAIABAMAAQAJgBALgKQAKgMAAgMQgBgOgKgHQgKgHgKAAIgCAAg");
	this.shape_19.setTransform(175.2,168.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#262627").ss(2,1,1).p("AhtEBInwowIAkgLQARAWATAYQAfAnAmArQBMBaBjBrQAKAKAIAJQBgBoBIBIQAPAQAPAOQAJAJAIAIQACABACACQADADACACQACgBABAAIAAADQgCgBgBgBQABACACABQAAABABACIIUiuQAAgBAAgBQAAgUAKgJQACgDADgBQAGgEANgEQAKgCAOgDAJeBuQgkALgSAFQgSAGgLACQgHABgEAAQgIAAgFgFQgCgCgCgDQgGgKAAgWAHvB9QgQAGgRAGQgeALghAMQkjBkiSASQACAIACAKQADAcgogNQgmgMAAgjQAAgCAAgCQAAgBAAgCAhJDsQAIACALAFQAPAIAFAJQgEAAAAADIgGAAIAAABAgwEGIABAAIAAgBIgBABQgCABgGADAgwEGQgOgPAGAGAgvEFQgEgEgFgEAhJDsQgCAAgDAAQgQAAgJALQgEAFgCAFAgmEWQgEAAgCABIAAgMIgDgFAgmEWQgCgGgDgFIgBAAIAAgD");
	this.shape_20.setTransform(230.4,196,1,1,0,0,0,0,-0.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.instance_3,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-292,-286.7,584.1,573.5);
p.frameBounds = [rect];


(lib.g_boitetexte = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2F2F").ss(2,1,1).p("AIGn1IAAAfIADADQgbAAgUAAQgdAAhPgBQhNgBg0gBAF+n4QAAATACAMAKMnRQABgEABgGQACgGAFgJABWnZQgDgIgBgHIAAgRABWnZQg4AAheACQgBgNAAgXADon7QADAOABAGQABAHAAAKIAAAAADcnWQAGgBAIABQACAAABAAACQnYQgTgBgnAAAKMH5IAAgmAMJHOQgFgFgGgIQgHgIgEgFAjUncQgBgMgCgRAlqnZQgEgJgCgTArQmzQgUgLgKgKArnlNQgHAEgHAAQgBAAgGgCQgGgBgDAAAn6nYIAAgjAp2nSQAAgHgCgLQgCgKgCgFAsIjFQAJAAAXAEAsHF+QAZgBALgCAoyH8IAAggAq6HwQADgNAOgV");
	this.shape.setTransform(9,79.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("ALZm1QAFgFALgGQAKgFAEgGQgMgQgWgGQgqgLhFgGQgvgDhAgBQg9gDhLgBQgMAAgNAAQhBgCg8gBQhRgBhGgBQhPgBhDgBQhJgBg4AAQjTgBhlACQgSABgOAAQhhADgpAEQgsAFgXATQgUATgIAnQgFAbAAA+QAAALAAAMQAAAuAABCQAAAKAAAKQAABPAAA+QAPADAGgDALsgfIAAjCQAAgygCgeIAAgBQgBgJgBgJQAAAAAAgBQgBgTAAgCQAAAAgBAAQgCgXAAgeQAAgEAAgEQgCgSgJgMAMWjhQgBg0gEgxQAAgMgCgNQgBgSgHgyQgDgZgNgPALplfQACAAAMgFQAKgDAHAAAMYgmQAAg+AAhPQgBgXgBgXQgFADgLABQgPACgEABAMYCOQgLgDgMACQgLADgEAAAMYCOQAAg6AAh6QglAHgHAAAMYFEQAAgjAAhhQAAAAAAgyAH6nVQAoAAA4AAQAIAAAGAAQALABAJABQAjACAVAIQAdAJAIALADdnXQgIAAgJgBQgkAAgngBAFiIDQAAgEgBgIQgCgKgDgGAFiIDQAkgBAeAAQAngBAjgBQgGgcAAgCAA5HgQAPAAAQAAQEhgBBhgFQBhgHAzgHQA4gHASgFQAbgHAKgPQALgQADghQABgNAAgiQAAgTAAgZIAAk9AHuIAQBbgDAzgGQARAAAQgBQA+gDAfgmQAegmAAhHQAAgOAAgOQgHACgQABQgOACgHABAj4IBQBKAAC2ABQAbABAaAAQgCgJgCgaAA9IDQBPABBDAAQAAgIAAgFQAAgJAAgHAhbH+QACgJgCgNADPIEQBSAABBgBAhPnYQgcgBgcgCQgygDgqAAQgQAAgPAAQhFADgyABQhcACgdgBQgNAAgKAAQgfgBgIABQgKAChGACQgCABgDAAQhNAIgNAYQgSAVgCAXQgBAQAAAXQgCAJAAAJQAAAXAAAGIAAAAQgBAjAABMQAAAIAAAIQAAEPAABJQAAAbAAAAQAABJAAALQAAA/AFAmQAFAlAJANQATAXA2AKQA3AKBGADQBGADAmABQAlAABIABQBHACAbAAQAaAAECAAAsXgmQAADlAAABQAABmAAAvQAAAWABASQACAqAGAXQAiAuAjACQgFAEArAFQArAEA3AAQB1ADA2ABQAhABAJAAQAYAAAtAAQAMAAAjABQAAgGAAgHQAAgJAAgDAr3ClQgTADgHABQgCAAgBAAAmWH/IAAgBQACgPAAgI");
	this.shape_1.setTransform(10.5,79.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4E1DF").s().p("AgHAAIAMAAIADAAIAAAAIgPAAg");
	this.shape_2.setTransform(31.9,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D796B").s().p("AA9IDQgCgJgCgaQACAaACAJIg1gBIkAgBIAAgNIAAgMIAAAMIAAANIgvgBIhFAAIgqgBIAAgBIACgXIgCAXIAAABIirgEIAAggIAAAgQg3AAgrgEQgrgFAFgEQgjgCgiguQgGgXgCgqQAZgCALgCQgLACgZACQgBgSAAgWIAAiVIAAjmQAPADAGgDQgGADgPgDIAAiNIAAgUIAAhwIAAgXQAAg+AFgbQAIgnAUgTQAXgTAsgFQApgEBhgDIAggBQBlgCDTABICBABICSACICXACIB9ADIAZAAQBLABA9ADQBAABAvADQBFAGAqALQAWAGAMAQQANAPADAZQAHAyABASIACAZQAEAxABA0IACAuIAACNQglAHgHAAIAAjCQAAgygCgeIAAgBIgCgSIAAgBIgBgVIgBAAQgCgXAAgeIAAgIQgCgSgJgMQAFgFALgGQAKgFAEgGQgEAGgKAFQgLAGgFAFQgIgLgdgJQgVgIgjgCIADgJIAGgPIgGAPIgDAJIgUgCIgOAAIhgAAIgDgCIAAgfIAAAfIADACIgwAAIhrAAIiCgDIAAgRIgEgUIAEAUIAAARIgDAAIgOAAIhLgBIg6gBQgEgIAAgIIAAgRIAAARQAAAIAEAIIiWACQgBgOAAgWQAAAWABAOIg4gDQgygDgqAAIgDgdIADAdIgfAAIh3AEQgEgJgCgTQACATAEAJQhcACgdgBIgXAAIAAgjIAAAjQgfgBgIABQgKAChGACIgFABIgCgRIgEgQIAEAQIACARQhNAIgNAYQgUgMgKgKQAKAKAUAMQgSAVgCAXIgBAnQgCAJAAAJQgHAEgHAAIgHgBIgJgCIAJACIAHABQAHAAAHgEIAAAdIAAAAIgBBvQgXgEgJAAQAJAAAXAEIAAAQIAAFYIgaAEIgDAAIADAAIAagEIAAAbIAABUQAAA/AFAmQAFAlAJANQATAXA2AKQA3AKBGADIBsAEIBtABIBiACIEcAAIAfAAQEhgBBhgFQBhgHAzgHQA4gHASgFQAbgHAKgPQALgQADghIABgvIAAgsIAAk9QAHAAAlgHIAAC0IgBgBIAAAAIgLgBIAAAAIgBAAIgJABIgBAAIgPADIAPgDIABAAIAJgBIABAAIAAAAIALABIAAAAIABABIAAAyIAACEQgHACgQABIgVADIAVgDQAQgBAHgCIAAAcQAABHgeAmQgGgFgGgIIgLgNIALANQAGAIAGAFQgfAmg+ADIghABIAAglIAAAlQgzAGhbADIgGgeIAGAeIhKACIhCABIgBgMQgCgKgDgGQADAGACAKIABAMIiTABIAAgNIAAgQIAAAQIAAANIiSgBgAhbH+IABgKIgBgMIABAMIgBAKgArJHuQADgMAOgVQgOAVgDAMgAMGjdIgTADIATgDQALgBAFgDQgFADgLABgAL3lkIgOAFIAOgFQAKgDAHAAIgCAAQgGAAgJADgAFwnaQgBgNAAgTQAAATABANgAL6HNIAAAAgAMYFEIAAAAgAr3ClIAAAAgAMYCOIAAAAgAr3jDIAAAAgAr2lPIAAAAg");
	this.shape_3.setTransform(10.5,79.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#262627").ss(2,1,1).p("AMYitQAJDngMCWQgMCVgeArQgmBOmoAHQmmAGoIAMQiOAOAFlaQAElXAFiPQAFiOAygMQCAgbCEgFQJXgEEYAGQEYAGAvArQAuArAKDqg");
	this.shape_4.setTransform(10.8,79.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsaCrQAElXAFiPQAFiOAygMQCAgbCEgFQJXgEEYAGQEYAGAvArQAuArAKDqQAJDngMCWQgMCVgeArQgmBOmoAHQmmAGoIAMIgLAAQiDAAAFlMg");
	this.shape_5.setTransform(10.8,79.9);

	this.instance = new lib.g_ecrou2("synched",0);
	this.instance.setTransform(95.6,134.4,1,1,-150);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#262627").ss(2,1,1).p("AOSxlQALCugHCwQgBALAAAMQgGCKgDCKQgBBSgBBSQgBA3gBA3QgBB6AAB5QAAAnAAAoQABBJACBJQABAkACAkQAFCiAFChQAECeAJCeQAGBsgVBqQgYB8iWA5QgkAOgpADQjdAQjdAAQjegBjdAFQggAAghABQi7ACi8gHQiygIguh8QgfhTgChWQgDikgCikQgDipgBipQgBhWgBhWQgBhJgBhJQgBgKAAgKQgDiXABiYQAAg3ABg2QAChnAFhlQAFhwgDh8QgCgzgCg0QgKisAJh4QAJh4AFgSQBIhhCXgMQDKgQDMAJQAUABATABIG7gHQDYgBB6gCQB7gEBXAXQBWAWAnBQQAlBOAGBVg");
	this.shape_6.setTransform(9.8,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCC2B9").s().p("AqTV9QiygIguh8QgfhTgChWIgFlIIgElSIgCisIgCiSIgBgUQgDiXABiYQAAg3ABg2QAChnAFhlQAFhwgDh8IgEhnQgKisAJh4QAJh4AFgSQBIhhCXgMQDKgQDMAJIAnACIG7gHQDYgBB6gCQB7gEBXAXQBWAWAnBQQAlBOAGBVQALCugHCwIgBAXQgGCKgDCKIgCCkIgCBuQgBB6AAB5IAABPQABBJACBJIADBIIAKFDQAECeAJCeQAGBsgVBqQgYB8iWA5QgkAOgpADQjdAQjdAAQjegBjdAFIhBABIhGABQiYAAiZgGg");
	this.shape_7.setTransform(9.8,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#262627").ss(2,1,1).p("ABxAJQABAQgKAPQgJAPgOAFQgFABgHAAQghAAgWgZQgGgIgFgJQgJgTgDgbQgDgjAPgbQACgCACgDQAVgaAbgBQABAAABAAQAQAAAKAeQAwgPATgRACWgFQgUAHgEACQgFADgGABQgBABgBAAQgKADgZAHQgZgBgNgSQgMgTAEgfQAEgfALgCQALgCAZgGAAAh3IADAAQgGAAgHABQgZAHgQAEQgMAAgQAYQgBACgFAMQgEAMgCAnQgBAkAMAUQAMATACAIQACAHAqAVQACAAACAAQAMgCAJgCQAHgBAHgBQgJAIAAAOQAAAfgQANQgRAMgdgBQgdgBgWgDQgVgEgNAGQgHg/gBgcQgBgbgBgzQgBg1AEhXQAQgGAUgGQAVgGAZADQAbADAEABQAEAAANAFQAOAFACAKQABAKgBAJQAigDAVABAh1hzQAFgMACgBAhzB9QAGgCAGgCQADAAACAAAgcB8QABABAEAAQAHgBAEAAABRA8QgFADgFADQgKAFgJAEQgBABAAAAQABAAAAAAQgCAAgCABQgBAAgBABIgBAAQgEACgYAHAgLBbQAGgCAIgCQAHgBAJgBQgBABgBABAAzBMQgBAAgCAB");
	this.shape_8.setTransform(-91.4,82.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D796B").s().p("AgPCkQgdgBgVgDQgVgEgNAGQgIg/gBgcIgBhOQgBg1ADhXIAlgMQAUgGAaADIAcAEIASAFQANAFADAKQACAKgBAJIAEAAIgPABQgZAHgPAEQgLAAgQAYIgGAOQgFAMgBAnIAAAGQAAAgAKASQAMATACAIQADAHAoAVIAEAAIgEAAQgogVgDgHQgCgIgMgTQgKgSAAggIAAgGQABgnAFgMIAGgOQAQgYALAAQAPgEAZgHIAPgBIgEAAQAigDAVABQgaABgWAaIgDAFQgRAbADAjQACAbAMATQAEAJAHAIQAVAZAiAAIACAFIgUAJIgBABIgCABIgDABIgBAAQgEACgYAHQAOgEgGABIgGABIgPACIgQAEIgHACIAXgEIANgCQgJAIAAAOQABAfgSANQgRALgYAAIgEAAgAAOB9IALgBIgLABQgBAAgBAAQAAAAgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQABAAAAAAQABAAABAAIAAAAgAhMB9IAMgEIAGAAIgGAAIgMAEgAhNhzQAEgMACgBQgCABgEAMg");
	this.shape_9.setTransform(-95.4,82.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4E1DF").s().p("AgjBCQgHgIgEgIQgMgVgCgcQgDghARgaIADgFQAWgaAYgCIACAAQARAAAKAeIgjAJQgKACgFAfQgDAdAMATQAKAUAZAAIAjgJQACAPgKAPQgKAQgOAEQgFACgGAAQggAAgVgag");
	this.shape_10.setTransform(-86.3,79.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA8880").s().p("AgxAzQgMgTAEgfQAEgdALgCIAkgIQAugPATgSIAAB0IgYAMIgLAEIgCABIghAJQgZAAgNgUg");
	this.shape_11.setTransform(-82.3,77.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#262627").ss(2,1,1).p("AijABQAAgBAAAAQAAgNADgaQAbgNArgHQAFgBAFgBQApgGAtAFQAOABAMABQABABACAAQA+AIAaAKQAbAKAAACQAHAWADAWQACANAAANQABAMABAMIlGgdQgBgWAAgNgACgAPQg6gWhKgFQhUgFhrAS");
	this.shape_12.setTransform(61,-140);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DF007D").s().p("AiiALIgBghQBrgVBUAGQBJAEA7AZIACAYIACAYg");
	this.shape_13.setTransform(61,-137.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#615249").s().p("AAeALQhUgFhrAUIAAgDIADglQAbgNArgHIAKgCQApgGAtAFIAaACIADABQA9AIAbAKQAbAKAAACQAGAUAEAYQg7gYhJgFg");
	this.shape_14.setTransform(60.8,-142.5);

	this.instance_1 = new lib.g_bulleverre("synched",0);
	this.instance_1.setTransform(99.1,30.2,1,1,180);

	this.instance_2 = new lib.g_bulleverre("synched",0);
	this.instance_2.setTransform(98.1,-4.8,1,1,180);

	this.addChild(this.instance_2,this.instance_1,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-107.4,-147.5,214.5,294.8);
p.frameBounds = [rect];


(lib.mc_helice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.g_plothelice("synched",0);
	this.instance.setTransform(1.6,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Calque 1
	this.instance_1 = new lib.g_helice("synched",0);
	this.instance_1.setTransform(1.6,3.8,1,1,0,0,0,1.6,3.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262627").ss(2,1,1).p("AAdgkQABAEAAAEQACAIABAJQALgPAWgsQAWgtAFgvQAFgwgFgVQgEgVgDgGQgDgFgXgIQgXgIgLA3QgFAdABAeQgEAqALBXQgBAEACAEQABAJABAJQACATADAUQBnhTBIgHQAOgGADAnQADAli6AlIgBAAQgCAAgEABQgBABABABQgBgBgBgBQgHgFgGgEQAGgFAHgEAAAgDQAAADACAAQAKAIgBAGQgCgDgJgOgAAPAdQAAAAgBACQADABACACQADACACACQABAAgCABQgCgCgCgDQgCgDgCgCQADgGACgGQAGgNAGgOAAeAwQAAAyACAeQADAegSA4QgQA5gQACQgVgUgGgNQgCgGACgjQACgaAihYQABgBAKghIAAAAQABAAgBgBQACAAAAAAQAAAAgCABAAHAyQAIgGAIgFQADAEAEAFQAGAFACgCQAAAAABgCQABABABABQACABADACQAyAmAaAYQA+A6ABAkQguAGgshEQgshFgVgfQADAAAEgBQABAAABAAQgCgJAAgJAAFAyQAFgJAEgKQgJgIgvgiQgwgjgngiQgmgigIgmQgHglAKgMQAKgLAVAOQAcAiA9BXQAhAvAPAWIAAABQACABABACQAAAAABABQgBgBgBAAQgBgCgDAAQABABABACQAAABAAAAQAEAKAPAVAAeAwQgKAAgNACAAOAfQgMAHgIAGQg5AlgSALQgkAUgdgCQgWgCgHgCQgMgCghgKQgngsCfgCQA2gGAlgE");
	this.shape.setTransform(-0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF007D").s().p("AgLAUIAXgHIgVAOgAgGgZIAAAAIgCABg");
	this.shape_1.setTransform(0.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA8880").s().p("AgqDwQgCgGACgjQACgaAihYQABgBAKghIAAAAIACgBIAXgCQAAAyACAdQADAfgSA4QgQA5gQACQgVgUgGgNgABfCUIhBhkQAGAFACgCIAIADQAyAmAaAYQA+A6ABAkIgIAAQgqAAgog+gAiSBuQgWgCgHgCIgtgMQgngsCfgCIBbgKIADAGQg5AlgSAKQgiATgbAAIgEAAgAAlAcQBnhSBIgHQAOgGADAnQADAli6AlIgBAAIgGAAIgCgSgAgqgLQgwgjgngiQgmgigIgmQgHglAKgMQAKgLAVAOQAcAiA9BXIAwBFIgCACIACADIAAABQAEAKAPAUIgBADIg4gqgAAegcIgBgIQgLhXAEgqQgBgeAFgdQALg3AXAIQAXAIADAFQADAGAEAVQAFAVgFAwQgFAvgWAtQgWAsgLAPIgDgRg");
	this.shape_2.setTransform(-0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#262627").ss(2,1,1).p("AAqAiQACgEADAAIAAgBQCJiJgTgoQgUgpgOAJQgOAKgMAUQgnA+gkBsQAGAHAGAHQAAAAABABQABABAAABQAAADgJAAQgHAGgJAIIAAABQgBABAAABQAAAAgBgBQABgBABAAAAMAhQgBgGgCgGQgEgOgEgPQgEgGgGgHQgDgCgCgEQg8g/gWglQgMgUgHgRQgHgRAAgbQAAgbAJgFQAJgEAaATQAbATARAdQAeAvAEBOQABAYABATQgEgGgHgHQgCgDgDgCAAZAjQgDAAgDAAQADABACABQACgBgBgBgAATA2QACgJADgIQAGABAFACAARA4QgCgJgDgMQAEAAADAAQgEgBgDgBQAAAAAAACQgMAAg3AAQg6AAgkgEQgmgFgcgRQgdgPgIgOQgIgPASgLIAVgCQAQADBjAiQA2AQAaAKIABAAQACAAACABQAAAAACABQACAAACAAQAOABABAFQgBAAgSgGQgCgBAAAAQgDAAgCABQABAAACABIAAAAQABAAAAABQAMAGAWAIAArAjQgBAAgBAAQgDADgDACQAkANBKATQBIAVAngPQgWgchUgKQgjgEg/AAQgDgBgCAAQgCAAgCAAgAAeAUQgDAHgCAIQAIAAAIAAQAAgBABAAAASA5QAJAiAAABQAYBbAOAWQATAeAGADQANAHAqgGQgBgDgUg3QgUg4gTgWQgUgYgegnAAMAjQgFANgFAMQgWA/gIATQgRAmgYAOQgTANgHACQgLAFgQABIgKgRQANgfAygyQAogkAcgYAAeAUQgOgOgPgO");
	this.shape_3.setTransform(-0.4,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF007D").s().p("AAEATIAQgUIgKAXgAgSgVIAAAAIgBACg");
	this.shape_4.setTransform(-1.1,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA8880").s().p("ABaDuQgGgDgTgeQgOgWgYhbIgJgjIABgCIAAgBIAQgOIAyA/QATAWAUA4IAVA6QgUADgOAAQgPAAgGgEgAiEDGQANgfAygyIBEg8IADADIgeBSQgRAmgYAOQgTANgHACQgLAFgQABgACRBIQhKgTgkgNQAJAAAAgDIAIgBQA/AAAjAEQBUAKAWAcQgQAGgWAAQgfAAgqgMgAiVAfQgmgFgcgRQgdgPgIgOQgIgPASgLIAVgCQAQADBjAiIBQAaIAAACIADABIAAAAIABABQAMAGAWAIIAAACIhDAAQg6AAgkgEgAAeAUQAkhsAng+QAMgUAOgKQAOgJAUApQATAoiJCJIAAABQgDAAgCAEIgMgOgAgJgWIgFgFQg8g/gWglQgMgUgHgRQgHgRAAgbQAAgbAJgFQAJgEAaATQAbATARAdQAeAvAEBOIACArIgLgNg");
	this.shape_5.setTransform(-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-28.2,48.6,56.5);
p.frameBounds = [rect, new cjs.Rectangle(-24.1,-28.1,47.9,56.7), new cjs.Rectangle(-26.9,-25.6,53.2,50.5)];


(lib.mc_helic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.g_plothelice("synched",0);
	this.instance.setTransform(1.6,3.3);

	this.instance_1 = new lib.g_helice("synched",0);
	this.instance_1.setTransform(1.6,3.8,1,1,0,0,0,1.6,3.8);

	this.instance_2 = new lib.mc_helice();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},32).to({state:[{t:this.instance_1},{t:this.instance}]},14).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-28.2,48.6,56.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.DECOR = function() {
	this.initialize();

	// Calque 1
	this.ZONE_CACHE_AT = new lib.ZONE_CACHE_AT();
	this.ZONE_CACHE_AT.setTransform(97.4,330.6,1,1,0,0,0,80.9,177.8);

	this.instance = new lib.g_rappelpictos("synched",0);
	this.instance.setTransform(112.8,320.8,1,0.971);

	this.instance_1 = new lib.g_page("synched",0);
	this.instance_1.setTransform(418.9,297.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.addChild(this.shape,this.instance_1,this.instance,this.ZONE_CACHE_AT);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.PALETTE_FOND = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2F2F").ss(2,1,1).p("AHviDQgCALgMASAITgeQABAAAAAAQAKgBAUgCAIgBmQgFgEgFgHQgGgHgDgEAF6iUIAAAiAGzCMIAAghAofhmQAFAEAFAHQAGAIADAEAoSAeQgKACgVABAmyiLIAAAhAl5CUIAAghAnvCEQADgLAMgT");
	this.shape.setTransform(115.4,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("Ag+iWQA6AABCABQATAAAUAAQAEABBVgBQBWgBAnAAQAmAAAYACQAHACAWAAQAXABAjAFQAjAGgEADQAeACAdAoQADAKACAPQABAHAAAIQABAIAAAIQABAKAAAKQABADABAIQAAAJAAAXQAAAlgVAjQgaAig2ACQgOABgPABQgLABgOABQgoADg6ACQgFgZAAgBAg+iWQAAAHgBAEQAAAIABAGABCh2QASAAARAAQAXAAAiABQA+ABAhAAQAhABA8ACQAeABAaADQAcADAZAFQAuAJARATQAFAIAEAQQACAJABAKQABAFAAAFQABAFAAAGQABADgCAEQAAAWgBAKQgCAdgKANQgJANgXAGQgQAFgwAGQgGABgHABQgrAGhIAEQhUAFj5AAQgOAAgNAAQgTAAgRAAQgWgBgjAAQg+gBgggBQghgBg9gCQgdgBgagCQgdgEgYgEQgvgJgQgUQgGgHgDgQQgCgJgCgLQgBgMgBgPQACgYAAgIQADgdAJgOQAJgNAXgGQAQgEAwgGQAHgBAHgBQArgGBIgEQBUgFD5AAQAOAAANAAQgCgXgCgIADkiRQgBAOAAAGAITgJQAAAEAAADAITgJQABAAAAAAAITgUQAAAGAAAFAE3CTQgeABgiAAQgaABgfABQAAgEgBgHQgCgJgCgFAA+CWQAAgHAAgDQAAgIAAgHAA+CWQg6AAhCAAQgTAAgVAAQgDgBhWABQhWAAgmAAQgnAAgXgCQgIgCgWAAQgWAAgjgGQgjgFAEgDQgfgCgdgoQgEgPgCgZQAAgIgBgJQgBgNAAgRQAAgOAAggQAAggATgbQAbghA2gDQAOAAAOgBQAMgBAOgCQAngDA7gBQAegBAhgBQAaAAAggBQAAAEABAHQACAIACAFAhCB3QACAXACAIAC+CWQg5AAhHAAAk3iSQAFAYAAACAjlCRQACgNAAgHAi+iVQA4gBBIAA");
	this.shape_1.setTransform(115.5,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D796B").s().p("AhBCWQgCgIgCgXIAbAAQD5AABUgFQBIgEArgGIANgCQAwgGAQgFQAXgGAJgNQAKgNACgdIABggIABgFIAAgCIAAACIgBAFIAAgHIABAAIgBgLIgBgJIgDgTQgEgRgFgIQgRgTgugJQgZgFgcgDQgagCgegBIhdgEIhfgBIg5gBIgjAAQgCgXgCgHQACAHACAXIgbAAQj5AAhUAFQhIAEgrAGIgOACQgwAGgQAEQgXAGgJANQgJAOgDAdIgCAgIACAcIAEATQADAQAGAHQAQAUAvAJQAYAEAdADQAaAEAdABIBeACIBeACIA5ABIAkAAQACAXACAIIgoAAIhZAAIh8AAQgnAAgXgBIAAgiIAAAiQgIgCgWAAQgWgBgjgFQgjgGAEgDQgfgDgdgoQgEgOgCgZIgBgRIAfgCIgfACIgBgeIAAguQAAgfATgbQAbgiA2gCIAcgBIAagEQAngDA7gBIA/gBIA6gBIABAKIAEANIgEgNIgBgKICAgCIgBAMIABANIgBgNIABgMIB8ACIAnAAIBZgBIB9gBQAmABAYACQAHACAWAAQAXAAAjAGQAjAFgEADQAeACAdAoIAFAZIABAQIABAPIgeAEIgBAAIABAAIAegEIABAVIgBgVQAJgVAAAIQAAAUgIAOIACAKIAAAgQAAAlgVAkQgFgFgFgHIgJgLIAJALQAFAHAFAFQgaAhg2ADIgdABIAAghIAAAhIgZACQgoADg6ACIgFgaIAFAaIhAACIg5ABIgBgLIgEgOIAEAOIABALIiAAAIAAgKIAAgPIAAAPIAAAKIh8AAgAjoCRIACgUIgCAUgAnyCEQADgLALgSQgLASgDALgAoZhbIAKAMIgKgMQgFgHgFgDQAFADAFAHgAHdhlQAMgTADgLQgDALgMATgAm2hqIAAgggAF2hyIAAghgAk1h4IgFgaIAFAagADgh9IABgUIgBAUgAIRgJIAAAAgAIQgJIAAgLIABALIgBAAg");
	this.shape_2.setTransform(115.8,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#262627").ss(2,1,1).p("AnaB+INiAAQBxAAAVgJQAVgKADguQACgugGgyQgHgvAAgBQgDgWgbgNQgYgNhdAJItmAAQhIADAABAQAAALAHA7QAIBAADAJQAKAZAUAIQAHADARACQACAAACAAgAneB+IAEAA");
	this.shape_3.setTransform(115.5,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4E1DF").s().p("AnaB+IgEAAQgRgCgHgDQgUgIgKgZQgDgJgIhAQgHg7AAgLQAAhABIgDINmAAQBdgJAYANQAbANADAWIAHAwQAGAygCAuQgDAugVAKQgVAJhxAAgAneB+IAAAAIAEAAg");
	this.shape_4.setTransform(115.5,36.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2F2F2F").ss(2,1,1).p("AAYBkIAAAiACLBfQgGgEgFgHQgGgIgEgEAgiiFQACAEACAKQACAKAAAGAhbB8QADgMAMgTAhuhLQgSgKgKgJ");
	this.shape_5.setTransform(66.4,80.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#262627").ss(2,1,1).p("AgchjQAmgCAGAAQA1gDAIAEQAaAIAHAKQAFgEAJgGQAKgFAEgEQgGgSgVgHQgWgGhJgGQgFAAgWAEQgKACgNADABuhSQAJALABAQQAAAEAAAEQAAAbACAUQABAAAAAAQAAAAABAIQAAAEAAAGQAAABAAAAQAAACAAADQgCAdgKAPQgKANgYAHQgRAEgyAHQgEAAgEABAB8AIQAAAKAAAFIAAABAB9gEQACAAALgFQAJgCAGAAAAYCKQAPgBAPAAQA4gDAcgjQAagggDg7QAAgGgBgGQgCgQgGguQgDgXgLgMAgQBlQACgBARACQAJABAMABAADCLQAGAAAIAAQABAAABAAQADAAACgBQgDAAgDAAQgIAAgHABgAATCLQgBAAgBAAAgchjQACgBACAAQAIAAgMABgAgKiJQgmABgWACQgoAFgVASQgTARgHAjQgEAVABBPIAjAAQgEg5ABgPQABgUARgUQALgVBHgHAigApQACAbAEAPQAfAqAgADQgFADAoAEQAMACAvACAgQBmQgSgCgPgDQgxgKgSgUQgFgIgEgS");
	this.shape_6.setTransform(66.4,79.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D796B").s().p("AARCLIACAAIAAAAIgCAAgAADCLIAPgBIgPABQgvgCgMgCQgogEAFgDQgggDgfgqQgEgPgCgbIAjAAQAEARAFAJQASAUAxAJIAhAGIAAgBIATABIAAgCIAIgCQAygGARgFQAYgGAKgOQAKgOACgeIAAAAIAAgQIAAAQIAAAAIAAgEIAAgBIAAgLIgBgHIgBAAQgCgVAAgaIAAgIQgBgRgJgKQAFgFAJgFQAKgFAEgFQALAOADAWIAIA/IABAKQADA8gaAgQgFgEgFgIIgKgLIAKALQAFAIAFAEQgcAjg4ADIgeABIAAgjIAAAjIgGAAIABABIgCAAIgOAAgAhbCAQADgMAMgTQgMATgDAMgAAYBnIgVgBIAVABgACKgJIgNAGIANgGIAAAAIACAAIAAAAIAHgCIAEAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgEAAIgHACIAAAAIgCAAIAAAAgAATCLgAigApQgBhPAEgUQAHgkATgRQAVgSAogFIA8gEIgBAEIgXAFQACAEABAJQADALAAAFQhHAHgLAWQgSgKgKgKQAKAKASAKQgRATgBAVQgBAPAEA5gABNhkQgIgEg1ACIgsACQADAAABAAQACAAABAAQAAAAAAAAQgBgBgCAAIgEABQAAgFgDgLQgBgJgCgEIAXgFIAbgEQBJAFAWAHQAVAGAGASQgEAFgKAFQgJAFgFAFQgHgKgagIgACKhmIAAAAg");
	this.shape_7.setTransform(66.4,79.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#262627").ss(2,1,1).p("ABvhiQgTgVgkgFQgjgEhFAGQhGAHgGAtQgGAtACAZQADAYACAWQAHBQBCAAQAIAAA5ABQA6AAAUgLQAlgWAAhUQAAgUgCgSQgDg3gOgPg");
	this.shape_8.setTransform(65.9,80.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4E1DF").s().p("AAPB/IhBgBQhCAAgHhQIgFguQgCgZAGgtQAGgtBGgHQBFgGAjAEQAkAFATAVQAOAPADA3QACASAAAUQAABUglAWQgTALg2AAIgFAAg");
	this.shape_9.setTransform(65.9,80.1);

	this.instance = new lib.g_boitetexte("synched",0);
	this.instance.setTransform(106.6,146.8,1,1,0,0,0,0.1,0.2);

	this.addChild(this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,214.5,294.8);
p.frameBounds = [rect];


(lib.g_tetemuet = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.mc_oeilblink();
	this.instance.setTransform(8,-6.4,1,1,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.mc_oeilblink();
	this.instance_1.setTransform(-15.9,-6.4,1,1,0,0,0,-0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgoAAQAKAAASgBQAXAAAeAD");
	this.shape.setTransform(9.9,-19.3);

	this.instance_2 = new lib.g_sourcil("synched",0);
	this.instance_2.setTransform(-15.5,-19.5);

	this.instance_3 = new lib.g_lips("single",1);
	this.instance_3.setTransform(0,15.9,1,1,0,0,0,-0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AE0AbQAAgOAJgQAk6gBIgCAEIACAAQAAgDAAgBgAk8gaQACALAAAO");
	this.shape_1.setTransform(-0.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AEPkXQALAFAVAZACVllQBRAOApAlQAfAcAUAvACIlsQAGADAHAEACwl6QgDgBgCAAQgFgCgbAAQgWAAgiAHQgHgHgIgHQgOgOgSgTQgagcgIgIIgCACAAalkQACgBACgBQgBgBgBAAQAHgFAggXQABAAAAgBQAkgXAPADAAelmQABAAAAAAQAJACAKAEQANAFAPAIIAGAAQAMADAKAFQAEADAEADQAGADAGABQAYAHA0BNQA0BNADAyQAEAyABAUABTl2QgCAAgCAAQgkAHgNAJABOlTIgIAAADAjTQgBgCgDgJQgFgNgPgYQgUgfgagaQgEgFgEgEQgTgGgRgIABqlLQgQgOgOgGABSliIAJAAQBCARAoAeQAlAdAtBBQAVAfAKAfQgQgagXgdQATAlADAgQgBAeACADAgPgzQAIgsAZgSQAZgSAsAAQAjAAAUATQAVASAAAdQAAAyghAXQgcAVgqAAQgXAAgUgOQgRgNgPg1gAFTieQgTgigTgcQgUgcgUgVQgtgxhDgnAFCgqQgDgygDgaQgBgRgFgQQALATAIASQALAaABAQQAAACAAABAEPjOQgEgIgFgIAEvgbQAFgCAOgEQAQgFAEAAQANAAAKALQALAKAAANQAAAIgTA8QgHAbgGAIQgJAKgXAAQgNAAgGgEQgFBSgSAlQgTAlgOAMQgNAMgEAjQgDAigCAcAEdgbQgFhsgkhHQgthXhdgmAg3mvQgBgBgCgBQgWgNgFgFAgnmNIgQgiAi4l1QAQgQAmgHQAUgDAQAAQAcAAAbACQAKABAJABQArAGAWAKAgrlvQgQABgOADQALgBALAAQA2AAAZAFAiil9QAGgBAHgDQAHgCAXAAQAPAAAeAEQAgAEANAAAjSkLQATgRAtgrQAhgbAogJQhLAKhTBNQg5AzgYA2IAbhSQANgPAHgHQASgWAhgRQAagOAagHAAylgQgpADgfAGQgeAFgCAAQgDAAgDgBAlPioQABgZAagiQANgPAKgLAknk1QAngeAQgHQAlgRBMgFAhZg2QgEAUgQAZQgVAegTADQgjAKgKgEQgLgEgagXQgagWAAgiQAAgpAngYQAhgVArAAQAbAAAPAZQANAUAAAZQAAAHgCAIQAKACASAAQALAAAjABAk4irQgJAUgCAKQgBAKgBALQAAALAAAmAlGgsQgGgEgFAAQgVAAgJANQgIANAAAZQAAAaAJAdQAJAcAYAAQACAAAJgFQgDAIgBAWQgCAeAEAeQAFAtAcAiQAeAlBPAgQBQAgAIBrAlWjYQAyhFAPgPQApgrBCgRAhLgXQgDAEhDAzQg6AuADAUQACAUAbAEQAaADAVgBQAUgBAjgBAlCBRQABgHABgGAgbm9QAMANApAjAAMmLQgjgRgggT");
	this.shape_2.setTransform(1.6,-2);

	this.addChild(this.shape_2,this.shape_1,this.instance_3,this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-37,-48.8,77.3,93.8);
p.frameBounds = [rect];


(lib.mc_bernardcoucou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AgygtQANAKAlAoQAcAcAXAN");
	this.shape.setTransform(15,49.8);

	this.instance = new lib.g_tetemuet("synched",0);
	this.instance.setTransform(3.6,-6.2,1,1,0,0,0,5.3,38.9);

	this.instance_1 = new lib.g_torse("synched",0);
	this.instance_1.setTransform(-0.2,34.7,1,1,0,0,0,-5.8,11.9);

	this.instance_2 = new lib.g_bras1("synched",0);
	this.instance_2.setTransform(-14.2,1.8,0.999,0.999,29,0,0,3.5,-13.5);

	this.instance_3 = new lib.g_jambe2("synched",0);
	this.instance_3.setTransform(3.6,46.6,1,1,0,0,0,4.5,-16);

	this.instance_4 = new lib.g_jambe1("synched",0);
	this.instance_4.setTransform(-13.1,44.4,1,1,0,0,0,7.3,-16.7);

	this.instance_5 = new lib.g_avbras1("single",4);
	this.instance_5.setTransform(-27.6,30.7,0.998,0.998,0,-45.7,134.3,-0.1,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(49));

	// Calque 2
	this.instance_6 = new lib.g_bras2("synched",0);
	this.instance_6.setTransform(30.3,6.4,1,1,-15,0,0,-0.2,-10.7);

	this.instance_7 = new lib.g_avbras2("single",4);
	this.instance_7.setTransform(31.9,33.6,0.999,0.999,0,41.8,-138.2,0.1,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:0.1,regY:-9.2,scaleX:0.999,scaleY:0.999,rotation:0,skewX:41.8,skewY:-138.2,x:31.9,y:33.6,startPosition:4}},{t:this.instance_6,p:{regX:-0.2,regY:-10.7,rotation:-15,x:30.3,y:6.4}}]}).to({state:[{t:this.instance_7,p:{regX:0.2,regY:-9.5,scaleX:0.998,scaleY:0.998,rotation:54.2,skewX:0,skewY:0,x:39.3,y:32.2,startPosition:1}},{t:this.instance_6,p:{regX:-0.3,regY:-10.5,rotation:-30,x:30.8,y:6.6}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.3,regY:-10.7,rotation:-30,x:30.7,y:6.4}},{t:this.instance_7,p:{regX:0,regY:-9.5,scaleX:0.998,scaleY:0.998,rotation:0,skewX:-174.2,skewY:5.8,x:44.1,y:27.2,startPosition:1}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.4,regY:-10.6,rotation:-45,x:30.7,y:6.5}},{t:this.instance_7,p:{regX:0,regY:-9.7,scaleX:0.998,scaleY:0.998,rotation:0,skewX:-174.2,skewY:5.8,x:50.1,y:23.4,startPosition:0}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.3,regY:-10.7,rotation:-30,x:30.7,y:6.4}},{t:this.instance_7,p:{regX:0,regY:-9.5,scaleX:0.998,scaleY:0.998,rotation:0,skewX:-174.2,skewY:5.8,x:44.1,y:27.2,startPosition:1}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.3,regY:-10.5,rotation:-37.7,x:29.6,y:6.7}},{t:this.instance_7,p:{regX:0.1,regY:-9.1,scaleX:0.997,scaleY:0.997,rotation:0,skewX:-179.2,skewY:0.8,x:46.2,y:24.4,startPosition:1}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.4,regY:-10.6,rotation:-45,x:30.7,y:6.5}},{t:this.instance_7,p:{regX:0,regY:-9.7,scaleX:0.998,scaleY:0.998,rotation:0,skewX:-174.2,skewY:5.8,x:50.1,y:23.4,startPosition:0}}]},1).to({state:[{t:this.instance_6,p:{regX:-0.3,regY:-10.5,rotation:-37.7,x:29.6,y:6.7}},{t:this.instance_7,p:{regX:0.1,regY:-9.1,scaleX:0.997,scaleY:0.997,rotation:0,skewX:-179.2,skewY:0.8,x:46.2,y:24.4,startPosition:1}}]},14).to({state:[{t:this.instance_6,p:{regX:-0.3,regY:-10.7,rotation:-30,x:30.7,y:6.4}},{t:this.instance_7,p:{regX:0,regY:-9.5,scaleX:0.998,scaleY:0.998,rotation:0,skewX:-174.2,skewY:5.8,x:44.1,y:27.2,startPosition:1}}]},1).to({state:[{t:this.instance_7,p:{regX:0.2,regY:-9.5,scaleX:0.998,scaleY:0.998,rotation:54.2,skewX:0,skewY:0,x:39.3,y:32.2,startPosition:1}},{t:this.instance_6,p:{regX:-0.3,regY:-10.5,rotation:-30,x:30.8,y:6.6}}]},1).to({state:[{t:this.instance_7,p:{regX:0.1,regY:-9.3,scaleX:0.999,scaleY:0.999,rotation:0,skewX:41.8,skewY:-138.2,x:32.6,y:32.8,startPosition:4}},{t:this.instance_6,p:{regX:-0.2,regY:-10.7,rotation:-15,x:30.8,y:6.4}}]},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-94,82.7,184.5);
p.frameBounds = [rect, new cjs.Rectangle(-43.3,-94,89.1,184.5), new cjs.Rectangle(-43.3,-94,99.7,184.5), new cjs.Rectangle(-43.3,-94,111.4,184.5), new cjs.Rectangle(-43.3,-94,99.7,184.5), new cjs.Rectangle(-43.3,-94,98.6,184.5), rect=new cjs.Rectangle(-43.3,-94,111.4,184.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-43.3,-94,98.6,184.5), new cjs.Rectangle(-43.3,-94,99.7,184.5), new cjs.Rectangle(-43.3,-94,89.1,184.5), rect=new cjs.Rectangle(-43.3,-94,83.1,184.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mc_bernardattente = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AgygtQANAKAlAoQAcAcAXAN");
	this.shape.setTransform(15,49.8);

	this.instance = new lib.g_tetemuet("synched",0);
	this.instance.setTransform(3.6,-6.2,1,1,0,0,0,5.3,38.9);

	this.instance_1 = new lib.g_bras2("synched",0);
	this.instance_1.setTransform(30.2,6.3,1,1,-15,0,0,-0.3,-11);

	this.instance_2 = new lib.g_avbras2("single",4);
	this.instance_2.setTransform(32.4,34.2,0.999,0.999,0,41.8,-138.2,-0.1,-9.3);

	this.instance_3 = new lib.g_torse("synched",0);
	this.instance_3.setTransform(-0.2,34.7,1,1,0,0,0,-5.8,11.9);

	this.instance_4 = new lib.g_bras1("synched",0);
	this.instance_4.setTransform(-14.2,1.8,0.999,0.999,29,0,0,3.5,-13.5);

	this.instance_5 = new lib.g_jambe2("synched",0);
	this.instance_5.setTransform(3.6,46.6,1,1,0,0,0,4.5,-16);

	this.instance_6 = new lib.g_jambe1("synched",0);
	this.instance_6.setTransform(-13.1,44.4,1,1,0,0,0,7.3,-16.7);

	this.instance_7 = new lib.g_avbras1("single",4);
	this.instance_7.setTransform(-27.6,30.7,0.998,0.998,0,-45.7,134.3,-0.1,-8.8);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-94,82.8,184.5);
p.frameBounds = [rect];


(lib.PALETTE_TEXTE = function() {
	this.initialize();

	// LM
	this.texte_CORPS = new cjs.Text("10", "12px 'Arial'");
	this.texte_CORPS.name = "texte_CORPS";
	this.texte_CORPS.textAlign = "center";
	this.texte_CORPS.lineHeight = 14;
	this.texte_CORPS.lineWidth = 28;
	this.texte_CORPS.setTransform(-42.6,-75.6);

	this.texte_FONT = new cjs.Text("Mobiclic", "14px 'Arial'");
	this.texte_FONT.name = "texte_FONT";
	this.texte_FONT.textAlign = "center";
	this.texte_FONT.lineHeight = 16;
	this.texte_FONT.lineWidth = 94;
	this.texte_FONT.setTransform(6,-120.1);

	// BOUTONS
	this.PAL_12 = new lib.PAL();
	this.PAL_12.setTransform(39.1,6.2);

	this.PAL_11 = new lib.PAL();
	this.PAL_11.setTransform(9.1,6.2);

	this.PAL_10 = new lib.PAL();
	this.PAL_10.setTransform(-20.9,6.2);

	this.PAL_09 = new lib.PAL();
	this.PAL_09.setTransform(53.1,-13.8);

	this.PAL_08 = new lib.PAL();
	this.PAL_08.setTransform(23.1,-13.8);

	this.PAL_07 = new lib.PAL();
	this.PAL_07.setTransform(-6.9,-13.8);

	this.PAL_06 = new lib.PAL();
	this.PAL_06.setTransform(-36.9,-13.8);

	this.PAL_05 = new lib.PAL();
	this.PAL_05.setTransform(69.1,-33.8);

	this.PAL_04 = new lib.PAL();
	this.PAL_04.setTransform(39.1,-33.8);

	this.PAL_03 = new lib.PAL();
	this.PAL_03.setTransform(9.1,-33.8);

	this.PAL_02 = new lib.PAL();
	this.PAL_02.setTransform(-20.9,-33.8);

	this.PLAIN = new lib.PLAIN();
	this.PLAIN.setTransform(22.2,-66.7);

	this.BOLD = new lib.BOLD();
	this.BOLD.setTransform(51.2,-66.7);

	this.ITALIC = new lib.ITAL();
	this.ITALIC.setTransform(80.2,-66.7);

	this.NEXT_FONT = new lib.NEXT_FONT();
	this.NEXT_FONT.setTransform(80.8,-109.6);

	this.PREV_FONT = new lib.PREV_FONT();
	this.PREV_FONT.setTransform(-62.2,-109.6);

	this.CORPS_PLUS = new lib.CORPS_1();
	this.CORPS_PLUS.setTransform(-10.5,-66.3);

	this.CORPS_MOINS = new lib.CORPS();
	this.CORPS_MOINS.setTransform(-67.3,-66.3);

	this.PAL_01 = new lib.PAL();
	this.PAL_01.setTransform(-50.6,-33.6);

	// fond
	this.FOND = new lib.PALETTE_FOND();
	this.FOND.setTransform(0.2,0.3,1,1,0,0,0,106.6,146.8);

	this.addChild(this.FOND,this.PAL_01,this.CORPS_MOINS,this.CORPS_PLUS,this.PREV_FONT,this.NEXT_FONT,this.ITALIC,this.BOLD,this.PLAIN,this.PAL_02,this.PAL_03,this.PAL_04,this.PAL_05,this.PAL_06,this.PAL_07,this.PAL_08,this.PAL_09,this.PAL_10,this.PAL_11,this.PAL_12,this.texte_FONT,this.texte_CORPS);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-107.4,-147.5,214.5,294.8);
p.frameBounds = [rect];


(lib.BT_WEB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E0":0,"E1":5,"E2":10});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AiPNIIgQgXQgMgLgZAAIgjATQgmATgUAAQhKAAgag3QgHgRgCgVIgBgSQABgLAOgeQANgeAAgMQAAgKgNguQgOgugBgKQAAhIAng0QAYghBCgzQBIg3AgglQA4hAAYhWQAbhdBCACQA5ABBMBCQBCA9A0BTQAzBTAAAvQABBKgTA0QgcBNgOBYQgCARgDA2QgGAygTAVQgXAchhAmQheAlgmAAQhWAAgYgigAiBoBQgtg9gchEQgbg+AAglQAAiIBjAFQBQADCGBfQBuBMBrBqQBiBgAAAWQABBMgwAKQgeAGhagIIgjATQgmASgYAAQiRAAh3igg");
	this.shape.setTransform(-49,0.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(5));

	// E0
	this.instance = new lib.g_arobase("synched",0);
	this.instance.setTransform(29.1,-21.8);
	this.instance.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262627").ss(2,1,1).p("ADklTIAIAEAl1j8IgCgeQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHQAWACAVADIARAXQAHAPAHAQQALAYAMAZQAGAOAGAOQAFANAFASQAGARAHATQAGASAIAUQAHAUAFAZQAHAZAGAXQAGAaAGAaQAFAXAFAXQACAMADAMIAWBrQlBgLkyA+IiIooQElgjEdgBACKl2QhGgGhGgBQg8gBg4AFQg5AEhPAIQhPAHgnANQgnANg3AbQAFBAARA9QARA9AMBBQAMA+APA/QAQA/AQA6QARA5ALApQAMApAcA0QGrg8FIgFQgyndiUjLQhBgGhCgGgAgRlnIAIACAjvlXIAIADAE7iwIAIAFAF6AqIAHACADmkeIgZgCQBeDaA9DUIAeBrAC5EZQAEABAFAAQADACADABAGfEcIALAFAj1FVIAMAAAgrExIAKABAlRCJIAKAKAl8g1IAGAGAmekYIACAG");
	this.shape_1.setTransform(30.7,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF007D").s().p("Al9kBQElgkEdAAQBeDZA9DUIAeBsQlBgMkyA+g");
	this.shape_2.setTransform(31.5,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgOg0IAJAAIAUBpg");
	this.shape_3.setTransform(68.2,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262627").s().p("AFsDoQg9jWhejYIAZACIAOAfIAWAxIANAcQAFANAFASIAMAkIAOAkQAHAUAGAZIANAyIAMA0IAKAuIAFAYgAlzjAQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHIArAFIARAXIgZgCQkdABklAjg");
	this.shape_4.setTransform(30.3,-29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4E1DF").s().p("AlIEiIgbhiQgRg6gQg/QgPg/gMg+QgMhBgRg9QgRg9gFhAQA3gbAngNQAngNBPgHICIgMQA4gFA8ABQBGABBGAGICEAMQCTDLAyHdQlIAFmrA8Qgcg0gMgpgAjpFVIgMAAgAghEyIgKgBgAAYlBQhBAAhcAHQgsABhHALQg/AJhAALIACAeICIIoQEyg+FBALIgVhrIgGgYIgKguIgMg0IgNgwQgFgZgHgUIgPgmIgLgkQgFgSgGgNIgNgcIgWgxIgOgfIgRgXIgrgFQhDgHhFAAIgKAAgAGqEhIgLgFgADCEaIAHADIgHgDIgJgBIAJABgAlHCTIgKgKgAGAAsIgFgCgAl2gvIgGgGgAFEirIgJgFgAmbkSIgDgGgADslPIgIgEgAjnlUIgHgDgAgJllIgHgCg");
	this.shape_5.setTransform(30.7,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).to({state:[]},5).wait(10));

	// E1
	this.instance_1 = new lib.g_arobase("synched",0);
	this.instance_1.setTransform(29.1,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#262627").ss(2,1,1).p("ADklTIAIAEAl1j8IgCgeQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHQAWACAVADIARAXQAHAPAHAQQALAYAMAZQAGAOAGAOQAFANAFASQAGARAHATQAGASAIAUQAHAUAFAZQAHAZAGAXQAGAaAGAaQAFAXAFAXQACAMADAMIAWBrQlBgLkyA+IiIooQElgjEdgBACKl2QhGgGhGgBQg8gBg4AFQg5AEhPAIQhPAHgnANQgnANg3AbQAFBAARA9QARA9AMBBQAMA+APA/QAQA/AQA6QARA5ALApQAMApAcA0QGrg8FIgFQgyndiUjLQhBgGhCgGgAgRlnIAIACAjvlXIAIADAE7iwIAIAFAF6AqIAHACADmkeIgZgCQBeDaA9DUIAeBrAC5EZQAEABAFAAQADACADABAGfEcIALAFAj1FVIAMAAAgrExIAKABAlRCJIAKAKAl8g1IAGAGAmekYIACAG");
	this.shape_6.setTransform(30.7,-20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF007D").s().p("Al9kBQElgkEdAAQBeDZA9DUIAeBsQlBgMkyA+g");
	this.shape_7.setTransform(31.5,-20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgOg0IAJAAIAUBpg");
	this.shape_8.setTransform(68.2,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262627").s().p("AFsDoQg9jWhejYIAZACIAOAfIAWAxIANAcQAFANAFASIAMAkIAOAkQAHAUAGAZIANAyIAMA0IAKAuIAFAYgAlzjAQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHIArAFIARAXIgZgCQkdABklAjg");
	this.shape_9.setTransform(30.3,-29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4E1DF").s().p("AlIEiIgbhiQgRg6gQg/QgPg/gMg+QgMhBgRg9QgRg9gFhAQA3gbAngNQAngNBPgHICIgMQA4gFA8ABQBGABBGAGICEAMQCTDLAyHdQlIAFmrA8Qgcg0gMgpgAjpFVIgMAAgAghEyIgKgBgAAYlBQhBAAhcAHQgsABhHALQg/AJhAALIACAeICIIoQEyg+FBALIgVhrIgGgYIgKguIgMg0IgNgwQgFgZgHgUIgPgmIgLgkQgFgSgGgNIgNgcIgWgxIgOgfIgRgXIgrgFQhDgHhFAAIgKAAgAGqEhIgLgFgADCEaIAHADIgHgDIgJgBIAJABgAlHCTIgKgKgAGAAsIgFgCgAl2gvIgGgGgAFEirIgJgFgAmbkSIgDgGgADslPIgIgEgAjnlUIgHgDgAgJllIgHgCg");
	this.shape_10.setTransform(30.7,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1}]},5).to({state:[]},5).wait(5));

	// E2
	this.instance_2 = new lib.g_arobase("synched",0);
	this.instance_2.setTransform(29.1,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#262627").ss(2,1,1).p("ADklTIAIAEAl1j8IgCgeQA/gLA/gJQBIgLArgBQBdgHBBAAQBKAABIAHQAWACAVADIARAXQAHAPAHAQQALAYAMAZQAGAOAGAOQAFANAFASQAGARAHATQAGASAIAUQAGAUAGAZQAHAZAGAXQAGAaAGAaQAFAXAFAXQACAMADAMIAWBrQlBgLkyA+IiIooQElgjEdgBACJl2QhGgGhFgBQg8gBg4AFQg5AEhPAIQhPAHgnANQgnANg3AbQAFBAARA9QARA9AMBBQAMA+APA/QAQA/AQA6QARA5ALApQAMApAcA0QGrg8FIgFQgyndiUjLQhBgGhDgGgAgRlnIAIACAjvlXIAIADAE7iwIAIAFAF6AqIAHACADmkeIgZgCQBeDaA9DUIAeBrAC5EZQAEABAFAAQADACADABAGfEcIALAFAj1FVIAMAAAgrExIAKABAlRCJIAKAKAl8g1IAGAGAmekYIACAG");
	this.shape_11.setTransform(30.7,-20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3CC5").s().p("Al9kBQElgkEdAAQBeDZA8DUIAfBsQlBgMkyA+g");
	this.shape_12.setTransform(31.5,-20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgOg0IAIAAIAVBpg");
	this.shape_13.setTransform(68.2,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262627").s().p("AFsDoQg9jWhejYIAZACIAOAfIAWAxIANAcQAGANAFASIALAkIAPAkIAMAtIANAyIAMA0IAKAuIAFAYgAlzjAQA/gLBAgJQBHgLAsgBQBcgHBBAAQBKAABIAHIArAFIARAXIgZgCQkdABklAjg");
	this.shape_14.setTransform(30.3,-29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E4E1DF").s().p("AlIEiIgbhiQgRg6gQg/QgPg/gMg+QgMhBgRg9QgRg9gFhAQA3gbAngNQAngNBPgHICIgMQA4gFA8ABQBFABBGAGICFAMQCTDLAyHdQlIAFmrA8Qgcg0gMgpgAjpFVIgMAAgAghEyIgKgBgAAYlBQhBAAhcAHQgsABhHALQhAAJg/ALIACAeICIIoQEyg+FBALIgWhrIgFgYIgKguIgMg0IgNgwIgMgtIgPgmIgLgkQgFgSgGgNIgNgcIgWgxIgOgfIgRgXIgrgFQhDgHhFAAIgKAAgAGqEhIgLgFgADCEaIAHADIgHgDIgJgBIAJABgAlHCTIgKgKgAGAAsIgFgCgAl2gvIgGgGgAFEirIgJgFgAmbkSIgDgGgADslPIgIgEgAjnlUIgHgDgAgJllIgHgCg");
	this.shape_15.setTransform(30.7,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2}]},10).wait(5));

	// Calque 1
	this.instance_3 = new lib.mc_helic();
	this.instance_3.setTransform(-60.5,58.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#262627").ss(2,1,1).p("ACQgmIgIiOIAeAAQgBBZgIA5QAIAAAKABQAbAEgXAhQgVAighgJQgCgBgCAAQgBgBgCAAQAEgWgGgGQgHgIgBAAQgCAAABgCQADgHAIgJQAMgNAKgCQgBADAFABgACLgdQABgBABgBIAAAAgACQggIAAgGACNgfQABAAACgBIAAACIgFABACdgiQgHAAgGACAB2AbIkyCaIAAggQAMgGAMgGQAMgHALgFQB9hCBWgzQATgJASgK");
	this.shape_16.setTransform(-40.6,46.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E4E1DF").s().p("Ai8CVIAYgMIAXgMQB9hCBWgzIAlgTIgBABIACABIAAAAIADADIADADIAAAAIAAAAIACACQADADAAAKIgBAPIkyCagAB9AdIgEgBIgDgBIABgPQAAgKgDgDIgCgCIAAAAIAAAAIgDgDIgDgDIAAAAIgCgBIABgBQADgHAIgJQAMgNAKgCQgBADAFABIAAAGQAGgCAHAAQgHAAgGACIAAgGIgIiOIAeAAQgBBZgIA5QAIAAAKABQAbAEgXAhQgRAbgYAAQgGAAgHgCgACLgdIAFgBIAAgCIgDABIAAAAg");
	this.shape_17.setTransform(-40.6,46.3);

	this.instance_4 = new lib.g_ecrouface("synched",0);
	this.instance_4.setTransform(-25.2,25.6,1,1,60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#262627").ss(2,1,1).p("AgGg3QAPACATADQAAABAAAAQAFABAIABIgBAAQAUADAOAGQAXAKAUAOQAEADAEADQACADACACQAJAJADAOQADAYg1AIQg0AKg6gJQg8gIgggTQgggRADgWQAAgDAAgFQAAgCAFgHQACgDACgDAiBgmQAagOAWgCQAWgEArACQABAAACAAQAEAAADABIgDAAIgEgB");
	this.shape_18.setTransform(17.8,46.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#262627").ss(1.5,1,1).p("ACAAFQgBAFgCABQgFADgSAEQgRAEgKABQgJAAgTgBQgSAAgogEQgwgFgWgGQgigHgMgVIAAgB");
	this.shape_19.setTransform(17.5,44.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgTArQg8gIgggTQgggQADgXIAAgIQAAgCAFgHIAEgGIAAAAQANAVAiAKQAWAGAvAEQAoAFATAAIAbAAQALAAARgEQARgFAGgDIADgGIAEAFQAJALADAMQADAYg1AIQgcAFgfAAQgaAAgZgEg");
	this.shape_20.setTransform(17.8,47.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262627").s().p("AAvAgQgSAAgogEQgwgFgWgGQgigJgMgUIAAAAIABgBQAagOAXgDQAWgDAqACIADAAIAEABIAEAAQAPABASAEIABAAIANACIgBAAQATAEAPAGQAXAJATAMIAIAHIgDAGQgFADgSAEQgRAEgKABIgcgBg");
	this.shape_21.setTransform(17.5,43.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#262627").ss(2,1,1).p("AhvBWQgOg0gOg2QgMgwgCgFAAhinIgBAAQgDAAgEABQgrgFhBAUQhBARgqA7QgBAPAQBDQAQBGAQAyQAAABAAABQABACAHAPQAHAOAXAKQAXAIABgMQABgNADgKQAFgBAGAAQAAgEgBgFQByhDBJAaACUBVQAqgKAAgDQAEgMgRhKQgPhHgGgPQgQgqgHgPQgHgPgLAAQgKAAg0AEQgFAAgPABQANAAAaAKQAbAKAFAIQAFAHAUBHQAUBFAFA3QgCgBgCgCQgCgDgOgMQgIgHgWgCQgQgDgmABQgnAAgOAFQgihvgRgwABoAkQAAgQgSgyQgRgzgQgpAhNCPQADgGAGgFQAFgSAjgVQAggVAwADQAwABAFAEQAHAEAIAIQAQgEAMgDACWBPQAEgQAAAAIAAAAIgEAQIgCAGAgDAnQhHAPgkAfQgBAAAAABAiPB/QgCgMAigd");
	this.shape_22.setTransform(-38,-4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8D796B").s().p("AhtBCQgXgKgHgOIgIgRIgBgCQgBgMAhgbIABgBQAlgfBHgPQANgFAnAAQAngBAPADQAWACAIAHIARAPIADADIgEAQIgBAGIgcAHQgJgIgGgEQgGgEgvgBIgKAAIgBAAIAAAAQgmAAgeARIgCABQgiATgFASQgGAFgEAGQgCAKgCANQgBAHgIAAQgFAAgJgDgAhIAcQAFgSAigTIACgBQAegRAmAAIAAAAIABAAIAKAAQAvABAGAEQAGAEAJAIQhKgahyBBg");
	this.shape_23.setTransform(-37.6,5.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262627").s().p("AAlB7IAFgQIgBAAQgFg3gUhFQgShHgFgHQgFgIgbgKQgagKgMAAIAUgBIA8gEQAKAAAHAPIAYA5QAGAPAPBFQAQBMgDAMQgBADgpAKg");
	this.shape_24.setTransform(-26.8,-8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5E0DB").s().p("AicAcQgQhDABgPQAqg7BBgSQBAgTAsAEIAHAAIABAAQANAAAaAKQAbAJAFAIQAFAIAUBGQAUBFAFA4IgEgDIgQgPQgIgIgWgCQAAgPgSgzQgRgzgQgoQAQAoARAzQASAzAAAPQgQgDgmABQgnABgQAFQgghvgRgxQARAxAgBvQhFAPgkAeIgBABIgchqIgOg0IAOA0IAcBqQgiAdACAMQgQgygQhFg");
	this.shape_25.setTransform(-39.9,-6.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#262627").ss(2,1,1).p("AAHidQgdAAgcANQgcALgUAWQgVAWgLAdQgNAdAAAfQAAAlANAdQALAdAWAVQAVAUAdAMQAcALAgAAQAeAAAUgGQAUgFANgHQAMgHAIgHQAHgFAIAAQAJAAAGAGQAGAGAAAIQAAAJgMALQgLAMgUAKQgTAKgZAHQgZAHgcAAQgqAAgogPQgngQgegbQgegcgRgmQgRgmAAguQAAgrARgmQARgmAdgdQAdgbAngQQAmgQArAAQAnAAAjANQAkALAbAWQAbAWAPAfQAQAfAAAmQAAAfgIAXQgIAXgNASQgNARgQAMQgQAMgPAHQgQAHgNAEQgNACgJAAQgfAAgCgaIgBAAQgOAMgOAHQgMAHgXAAQgQAAgOgGQgOgHgKgMQgKgMgHgSQgGgRAAgWQAAgbAJgZQAJgZAPgSQAPgSAUgJQAUgKAVAAQAXAAAQAIQAPAIAMASIACgKQADgNAIgDQAJgDAGAAQAKAAAIAFQAGAGAAAMQAAADgBAKQgCALgCANQgDAOgCAQQgEAOgBANQgEAOgBAKQgBAKAAACQAAAEACAEQACADAGAAQAHAAAIgEQAJgGAGgKQAHgKAEgRQAFgNAAgYQAAgfgLgaQgKgZgTgRQgUgQgbgKQgagIggAAgAgfgdQgIAJgEAKQgEAKAAALQAAATAKAMQAKANAUAAQAZAAAPgRQAPgRAAgXQAAgUgKgMQgLgNgVAAQgKAAgKAFQgKAFgHAIg");
	this.shape_26.setTransform(30.2,-22.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhGDBQgngQgegbQgdgbgSgnQgRgmAAguQAAgqARgnQARgmAdgcQAdgcAngQQAmgQArAAQAnAAAjANQAkALAbAWQAbAVAPAgQAQAfAAAmQgBAfgHAWQgJAZgNARQgMARgQAMQgQAMgPAHQgQAHgNADQgOADgIAAQggAAgBgbIgBAAQgPANgOAHQgLAIgXgBQgRAAgNgGQgOgHgLgMQgKgMgGgSQgGgQAAgXQAAgbAJgZQAJgZAPgSQAPgSATgKQAVgKAVAAQAXABAPAIQAPAJANARIACgKQADgMAJgEQAHgDAHAAQALgBAGAGQAHAGAAAMIgBAOIgEAXIgFAeIgGAcIgEAXIgBAMQAAAEACAEQABADAHAAQAGAAAJgEQAJgFAGgLQAHgKAEgQQAFgPAAgWQAAghgLgZQgLgZgTgQQgTgSgbgIQgagJggAAQgeAAgcAMQgbAMgUAXQgVAVgLAdQgMAdgBAfQABAlAMAdQALAdAWAVQAUAUAeAMQAcALAfgBQAgAAATgFQAUgGANgHIAUgMQAIgGAHAAQAJABAGAFQAGAGAAAIQAAAIgMAMQgMAMgTAKQgTAKgaAHQgZAHgbAAQgrAAgngPgAgPgqQgKAFgHAIQgGAJgFAKQgEAKAAALQAAASAKANQAJANAVAAQAZAAAPgRQAPgRAAgXQAAgTgLgNQgKgNgVAAQgLAAgKAFg");
	this.shape_27.setTransform(30.2,-22.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#262627").ss(2,1,1).p("AAJjPQAnAAAjAMQAkAMAbAWQAaAVAQAgQAQAfAAAmQAAAfgIAXQgJAXgMASQgNARgQAMQgQAMgPAHQgQAHgNADQgOADgIAAQggAAgBgbIgBAAQgPANgOAHQgLAHgXAAQgRAAgNgHQgPgGgKgMQgKgMgGgSQgGgRAAgWQAAgbAJgZQAJgZAPgSQAPgSATgKQAUgKAVAAQAYAAAPAJQAPAIANASIACgKQADgNAIgDQAIgEAHAAQAKAAAIAGQAGAGAAAMQAAADgBAKQgCALgCANQgDAOgDAQQgDAOgCANQgDAOgBAKQgBAKAAACQAAAEABAEQADADAGAAQAGAAAJgEQAJgGAGgKQAGgKAFgRQAFgOAAgXQAAgggLgZQgKgZgUgQQgTgSgbgJQgagIggAAQgeAAgcAMQgbAMgUAWQgVAWgLAdQgNAdAAAfQAAAlANAdQALAdAWAVQAUAUAdAMQAdALAfAAQAfAAAUgGQAUgFANgIQAMgGAIgHQAHgFAIAAQAJAAAGAGQAGAGAAAIQAAAIgMAMQgLAMgUAKQgTAKgZAHQgZAHgcAAQgrAAgngQQgogPgdgbQgegcgRgmQgRgmAAguQAAgrARgmQARgmAdgdQAdgbAngQQAmgQArAAgAgPgqQgKAFgHAIQgHAJgEAKQgEAKAAALQAAATAJAMQAKANAVAAQAZAAAOgRQAQgRAAgXQAAgUgLgMQgKgNgVAAQgLAAgKAFg");
	this.shape_28.setTransform(28.1,-21.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhGDBQgogQgdgbQgegcgRgmQgQgmAAguQAAgrAQgmQARglAdgdQAdgcAngQQAmgQArAAQAoAAAjAMQAjAMAbAWQAbAVAPAgQAQAfAAAmQAAAfgIAXQgJAYgMARQgNARgQAMQgQAMgQAHQgPAHgNADQgNADgJAAQgfAAgCgbIgBAAQgPANgOAHQgLAIgXgBQgQAAgOgGQgPgHgKgMQgJgMgHgSQgGgQAAgWQAAgcAJgYQAJgaAPgSQAPgSATgKQAUgKAWABQAXAAAPAIQAQAJAMARIACgKQADgMAIgEQAJgEAHAAQAJAAAIAGQAGAGAAAMIgCAOIgDAXIgGAeIgEAcIgFAXIgBAMQAAAEABAEQADADAGAAQAHAAAIgEQAIgFAHgLQAGgKAFgQQAFgOAAgYQAAgggLgZQgKgZgTgRQgUgRgbgIQgagJggAAQgdAAgdAMQgbAMgUAXQgVAVgLAdQgNAdAAAfQAAAlANAdQALAdAWAVQAUAUAeAMQAcAKAgABQAfgBATgFQAUgGANgGIAUgOQAHgEAIAAQAJAAAGAFQAGAGAAAIQAAAIgMAMQgMAMgTAKQgTAKgaAHQgYAHgcAAQgqAAgogPgAgPgqQgJAFgHAJQgIAIgEAKQgEAKAAALQAAATAKAMQAKANAUAAQAZAAAPgRQAPgRAAgWQAAgVgLgMQgKgNgVAAQgKAAgLAFg");
	this.shape_29.setTransform(28.1,-21.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#262627").ss(2,1,1).p("ADklTIAIAEAl1j8IgCgeQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHQAWACAVADIARAXQAHAPAHAQQALAYAMAZQAGAOAGAOQAFANAFASQAGARAHATQAGASAIAUQAHAUAFAZQAHAZAGAXQAGAaAGAaQAFAXAFAXQACAMADAMIAWBrQlBgLkyA+IiIooQElgjEdgBACKl2QhGgGhGgBQg8gBg4AFQg5AEhPAIQhPAHgnANQgnANg3AbQAFBAARA9QARA9AMBBQAMA+APA/QAQA/AQA6QARA5ALApQAMApAcA0QGrg8FIgFQgyndiUjLQhBgGhCgGgAjvlXIAIADAgRlnIAIACAE7iwIAIAFAF6AqIAHACADmkeIgZgCQBeDaA9DUIAeBrAGfEcIALAFAC5EZQAEABAFAAQADACADABAgrExIAKABAj1FVIAMAAAmekYIACAGAl8g1IAGAGAlRCJIAKAK");
	this.shape_30.setTransform(30.7,-20.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DF007D").s().p("Al9kBQElgkEdAAQBeDZA9DUIAeBsQlBgMkyA+g");
	this.shape_31.setTransform(31.5,-20.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgOg0IAJAAIAUBpg");
	this.shape_32.setTransform(68.2,-1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#262627").s().p("AFsDoQg9jWhejYIAZACIAOAfIAWAxIANAcQAFANAFASIAMAkIAOAkQAHAUAGAZIANAyIAMA0IAKAuIAFAYgAlzjAQA/gLBAgJQBHgLArgBQBdgHBBAAQBKAABIAHIArAFIARAXIgZgCQkdABklAjg");
	this.shape_33.setTransform(30.3,-29.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E4E1DF").s().p("AlIEiIgbhiQgRg6gQg/QgPg/gMg+QgMhBgRg9QgRg9gFhAQA3gbAngNQAngNBPgHICIgMQA4gFA8ABQBGABBGAGICEAMQCTDLAyHdQlIAFmrA8Qgcg0gMgpgAjpFVIgMAAgAghEyIgKgBgAAYlBQhBAAhcAHQgsABhHALQg/AJhAALIACAeICIIoQEyg+FBALIgVhrIgGgYIgKguIgMg0IgNgwQgFgZgHgUIgPgmIgLgkQgFgSgGgNIgNgcIgWgxIgOgfIgRgXIgrgFQhDgHhFAAIgKAAgAGqEhIgLgFgADCEaIAHADIgHgDIgJgBIAJABgAlHCTIgKgKgAGAAsIgFgCgAl2gvIgGgGgAFEirIgJgFgAmbkSIgDgGgADslPIgIgEgAjnlUIgHgDgAgJllIgHgCg");
	this.shape_34.setTransform(30.7,-20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#262627").ss(2,1,1).p("AKghrQA0HBmOC3QmMC3lTkEQlUkEBclrQBbltINg8QKVAqA0HDg");
	this.shape_35.setTransform(16,-6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCC2B9").s().p("AmZHAQlUkEBclrQBbltINg8QKVAqA0HDQA0HBmOC3QikBMibAAQjZAAjHiZg");
	this.shape_36.setTransform(16,-6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#262627").ss(2,1,1).p("AAugxQgcgUgVAAQgqAAgOAWQgPAWAAAeQgBAgASAQQARARAgAAQBTAAAAhKQAAgXgdgWgAAcAAQAAAMgKALQgLAMgJAAQgMAAgIgCQgIgCgEgIQgFgIAAgJQAAgIAKgNQALgNANAAQALgBALAIQAKAHABAOg");
	this.shape_37.setTransform(-61.4,-78.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AgQAeQgIgCgEgIQgFgIAAgJQAAgIAKgNQALgNAMAAQAMgBALAIQAKAHABAOQAAAMgKALQgLALgLABIgDAAQgIAAgHgCg");
	this.shape_38.setTransform(-62,-78);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCC2B9").s().p("Ag5A1QgSgQABggQAAgeAPgWQAOgWAqABQAVgBAcAVQAdAVAAAYQAABIhTAAQggABgRgRgAgFgcQgNAAgLANQgKANAAAIQAAAKAFAHQAEAJAIABQAIACAMAAQAJAAALgMQAKgLAAgMQgBgOgKgHQgKgHgKAAIgCAAg");
	this.shape_39.setTransform(-61.4,-78.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#262627").ss(2,1,1).p("AECCSIg4AjInZk5IAngwQAXARAYATQAoAdAvAgQBiBDB6BNQALAHALAHQA9AnA1AgIAOgJ");
	this.shape_40.setTransform(-39.6,-62.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E4E1DF").s().p("AkIiEIAngwIAvAkQApAdAuAgQBgBDB8BNIAWAOQA9AnA1AgIg4Ajg");
	this.shape_41.setTransform(-40.3,-62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_4},{t:this.shape_17},{t:this.shape_16},{t:this.instance_3}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.8,-86.3,169.6,172.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-89,-86.9,173.8,174.8), rect, rect, rect, rect];


(lib.BT_BERNARD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"E1":0,"E2":4});

	// timeline functions:
	this.frame_3 = function() {
		/* //stop();*/
	}
	this.frame_7 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AiYOUIgTgFIgDABIAAAAQgZADgSgBQgfgBgvgGQgugGhRgkQAdggAtADQAsADAYADQAYADAsgCIAJAAQgPgtgGhFQgFhGgBhfQAAgpAEgoIgBgBQgLgPgJgPQgHgPgNgSQgNgRgKgTIgSgpQgHgPgDgQQgEgEgDgKQgGgSABgSQADgSA8heIBMh0QAEgOAHgNQgEgQAAgSQAAgmAOgeIgcgRQhSgvgOgdQgmhLgUhSQgUhQAAhNQAAheAwgtIgCgOIACgaQAKhuBdg6QA3giBFgKQApgeA5AFQA1AEAoAdQBSATBBAtQAQAMAOAMQBCAFAwBHQAPA/ANBoQALBZAAAlQAABBgbAqQgRAagrAhQgsAigPAXQgbAoAAA8QAAAQAWAfQANASAkAqQAOAUAMASQAGAHAEAJQAiA9AAAzQABAQgEARIAFAmIAHBBQAFAlgiAdIgDADIgCAEQgVAehCBFQgFAmgXAkQgaAmgoAPIAHBPQAHBMACAtIABATIAAAZIgCASQgBAUgJAaQgKAEgRAAQgLAAgQgDIgbgEQAEgHAAgGQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAAAgBgBQgBgBgHAAIgJAAIgXADQgjAUgxAAIgFAAQguAKgYAAQgcAAglgFg");
	this.shape.setTransform(-0.2,-1.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(4));

	// E1
	this.instance = new lib.mc_bernardattente();
	this.instance.setTransform(0.8,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(4));

	// E2
	this.instance_1 = new lib.mc_bernardcoucou();
	this.instance_1.setTransform(0.8,-0.4,1,1,0,0,0,0,-0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.6,-93.7,86.5,184.2);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-42.6,-93.8,86.4,184.3), rect, rect, rect];


(lib.CLIP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ATTENTE:1});

	// Calque 1
	this.LM_DEPASSE = new lib.LM_DEPASSE();
	this.LM_DEPASSE.setTransform(397.5,587.4,1,1,0,0,0,190.5,8.7);
	this.LM_DEPASSE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LM_DEPASSE).wait(1).to({_off:false},0).wait(10));

	// REPERES_IBS
	this.IBrep_IB_IMP = new lib.repere();
	this.IBrep_IB_IMP.setTransform(726,554.8);

	this.IBrep_IB_WEB = new lib.repere();
	this.IBrep_IB_WEB.setTransform(716,423);

	this.IBrep_IB_PAPIER = new lib.repere();
	this.IBrep_IB_PAPIER.setTransform(701,303.9);

	this.IBrep_IB_RET = new lib.repere();
	this.IBrep_IB_RET.setTransform(150,136.5);

	this.IBrep_IB_AT = new lib.repere();
	this.IBrep_IB_AT.setTransform(629.7,123.9);

	this.IBrep_IB_MAN = new lib.repere();
	this.IBrep_IB_MAN.setTransform(71,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.IBrep_IB_MAN},{t:this.IBrep_IB_AT},{t:this.IBrep_IB_RET},{t:this.IBrep_IB_PAPIER},{t:this.IBrep_IB_WEB},{t:this.IBrep_IB_IMP}]},1).wait(10));

	// BERNARD
	this.BT_BERNARD = new lib.BT_BERNARD();
	this.BT_BERNARD.setTransform(616.3,549,0.41,0.41,0,0,0,0.6,-1.7);
	this.BT_BERNARD._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BT_BERNARD).wait(1).to({_off:false},0).wait(10));

	// Calque 8
	this.LM_TEXTE = new lib.LM_TEXTE();
	this.LM_TEXTE.setTransform(395.5,279.1,1,1,0,0,0,137.5,28.7);
	this.LM_TEXTE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LM_TEXTE).wait(1).to({_off:false},0).wait(10));

	// LM
	this.GEN_LM_AT = new lib.GEN_LMS_AT();
	this.GEN_LM_AT.setTransform(95.5,308.7,1,1,0,0,0,76.5,152);
	this.GEN_LM_AT._off = true;

	this.timeline.addTween(cjs.Tween.get(this.GEN_LM_AT).wait(1).to({_off:false},0).wait(10));

	// TEXTE
	this.FEUILLE = new lib.TXTEDIT_01();
	this.FEUILLE.setTransform(394.9,295.5,3.549,5.165,0,0,0,49,49);
	this.FEUILLE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.FEUILLE).wait(1).to({_off:false},0).wait(10));

	// PAPIER
	this.PICTO_PAPIER = new lib.PICTO_PAPIER_XX();
	this.PICTO_PAPIER.setTransform(484.5,301.5,1,1,0,0,0,84.6,1.7);
	this.PICTO_PAPIER._off = true;

	this.timeline.addTween(cjs.Tween.get(this.PICTO_PAPIER).wait(1).to({_off:false},0).wait(10));

	// PALETTE_TEXTE
	this.PALETTE_TEXTE = new lib.PALETTE_TEXTE();
	this.PALETTE_TEXTE.setTransform(686.2,157.5,1,1,0,0,0,0.1,0.2);
	this.PALETTE_TEXTE._off = true;

	this.timeline.addTween(cjs.Tween.get(this.PALETTE_TEXTE).wait(1).to({_off:false},0).wait(10));

	// decor mobile
	this.instance = new lib.mc_tesla2();
	this.instance.setTransform(87.8,105.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(10));

	// BOUTONS 2
	this.BT_IMP = new lib.BT_IMP();
	this.BT_IMP.setTransform(732,500.5);

	this.BT_WEB = new lib.BT_WEB();
	this.BT_WEB.setTransform(694.9,380.4,1,1,0,0,0,-3.6,0);

	this.BT_RET = new lib.BT_RET();
	this.BT_RET.setTransform(90.4,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.BT_RET},{t:this.BT_WEB},{t:this.BT_IMP}]},1).wait(10));

	// MEMO
	this.DECOR = new lib.DECOR();
	this.DECOR.setTransform(400,300,1,1,0,0,0,400,300);
	this.DECOR._off = true;

	this.timeline.addTween(cjs.Tween.get(this.DECOR).wait(1).to({_off:false},0).wait(10));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib.ATELIER = function() {
	this.initialize();

	// Calque 7
	this.CLIP = new lib.CLIP();
	this.CLIP.setTransform(400,300,1,1,0,0,0,400,300);

	this.addChild(this.CLIP);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(400,300,800,600);
p.frameBounds = [rect];

})(ATELIER = ATELIER||{}, images = images||{}, createjs = createjs||{});
var ATELIER, images, createjs;