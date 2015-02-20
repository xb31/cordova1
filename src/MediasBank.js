// espace de noms
this.xen = this.xen || {};

/**
 * [class description]
 * @example
 * ...
 * @class MediasBank
 */
( function() {
    "use strict";

    /** @constructor */
    var MediasBank = function(params) {
        this._params = params;
        this.initialize();
    }

    var p = MediasBank.prototype;

    p.clip;
    p._params;
    p._clipBank;

    p.bankData={
        bankClip: null,
        ypos: 0,
        nearest: null,
        speed: 0
    }

p.getInfos = function(){
    return this._clipBank;
}

    /**
     * [initialize description]
     * @constructs MediasBank
     * @return {} [description]
     */
    p.initialize = function() {
        console.log("MediaBank initialize", this._params)
        this._clipBank = new xen.Clip({
            id:this._params.clipId,
            onLoaded: ( function() {
                console.log("_constructs", this);
                var media = new xen.Clip({
                    clip: new window[this._params.clipId].EL_01_01()
                });
                 this.clip = new createjs.Container();

                 var mask = new createjs.Shape();
                 mask.graphics.beginFill("#f00").drawRect(0,0,230,70);

                 this.clip.addChild(this._clipBank.clip);
                 this._clipBank.clip.mask = mask;

                 if (this._params.target != undefined) {
                    this._params.target.parent.addChild(this.clip);
                    this.clip.x = this._params.target.x;
                    this.clip.y = this._params.target.y;
                    this._params.target.parent.swapChildren(this._params.target, this.clip);
                    this._params.target.parent.removeChild(this._params.target);
                    this._params.target = null;
                 };

                 if (this._params.parent != undefined) {
                    this._params.parent.addChild(this.clip);
                 };

                 
                 var el;
                 var ypos = 0; // /!\ c'est le point d'alignement qui est utilisé comme coordonnée par l'export flash.
                 this.numItems =  this._clipBank.clip.numChildren;
                 for (var i = 1; i <= this.numItems; i++) {
                     el = this._clipBank.getChildByName(this._params.clipId + "_0" + i);
                     el.no = i;
                     el.regY = 0;
                     el.y = ypos;
                     ypos += el.nominalBounds.height;
                 };

                 media.clip.no = this.numItems+1
                 media.clip.y = ypos - 0;
                 this._clipBank.clip.addChild(media.clip);
                 this.numItems =  this._clipBank.clip.numChildren;
                 this.select({itemIndex:1, transition:"none"});
                 this._params.onInitialized({type: "initialized", target: this});


            }).bind( this )
        });
    }

    p.numItems = 0;
    p.selected = null;

    p.select = function(params){


        // si == selected return
        if (this.selected != null && params.itemIndex == this.selected.no) { return};
        // get pos itemIndex
        
         if (params.transition == "none") {
            this.selected = this.getItemAt(params.itemIndex);
             this._clipBank.clip.y = - this.selected.y +0
         }
        else if (params.transition == "curve") {
            console.log("nn",this.selected.no, params.itemIndex, this.numItems-1)
            if (this.selected.no == 1 && params.itemIndex == this.numItems-1 ) {
                this.select({
                            itemIndex: this.numItems,
                            transition: "none",
                        })
                //return;
            };
            this.selected = this.getItemAt(params.itemIndex);

             //this._clipBank.clip.y = - this.selected.y +0
           createjs.Tween.get(this._clipBank.clip, {override:true})
                .to({y: -this.selected.y+0}, 1000, createjs.Ease.quadOut).call(function(event){
                    console.log("yy",this, this.selected.no, params.itemIndex, this.numItems)
                    if (this.selected.no == this.numItems) {
                        this.select({
                            itemIndex: 1,
                            transition: "none",
                        })
                        console.log("nn",this.selected.no)
                    };
                },undefined,this)
         }

 
        // this.selected = this.getItemAt(params.itemIndex)

        //  this._clipBank.clip.y = - this.selected.y +0
    }

    p.prev = function(){
      // console.log( banks[0].getNumItems(), banks[0].selected.no)
        this.select({
           itemIndex: (this.selected.no -1 <1) ? this.getNumItems() : this.selected.no -1,
           transition: 'curve'
        });

    }
    
    p.next = function(){
      // console.log(banks[0].selected.no)
       var  itemIndex= (this.selected.no +1 > this.getNumItems()) ? 6 : this.selected.no +1
       //console.log(itemIndex)
       this.select({
           itemIndex: (this.selected.no +1 > this.getNumItems()) ? 6 : this.selected.no +1,
           transition: 'curve'
        });

    }

    p.getNumItems = function(){
        return this._clipBank.clip.numChildren -1;
    }

     p.getItemAt = function(itemIndex) {
         return this._clipBank.clip.getChildAt(itemIndex - 1)
     }

     p.set = function(params){
        this.clip.set(params);
     }

    Object.defineProperty(p, "x", {
        get: function() {return this.clip.x },
        set: function(value) { this.clip.x = value }
    });


   Object.defineProperty(p, "y", {
        get: function() {return this.clip.y },
        set: function(value) { this.clip.y = value }
    });


    p.getNearest = function(){

        var indexEL = Math.ceil(Math.abs(this._clipBank.clip.y)/70);
        console.log("EL_0"+ Number(indexEL+1))
        var selectClip = this._clipBank.clip.getChildByName("EL_0"+ Number(indexEL+1));
        return {index: indexEL, clip: selectClip, y: -indexEL * 70}
    }


    p.shuffleRunning = false;

     p.shuffle = function(params){
   

        this.shuffleRunning = true;
       this.bankData={
            blurFilter:null,
            ypos: this._clipBank.clip.y,
            nearest: null,
            speed: 0
        }

        // this.bankData.blurFilter = new createjs.BlurFilter(0,0, 1);
        // this._clipBank.clip.filters = [this.bankData.blurFilter];
        // this._clipBank.clip.cache(0,0, 250,350);

        createjs.Tween.get(this.bankData, {override:true})
           .to({speed: 100}, 2500 + Math.random()*3000, createjs.Ease.quadIn)
           .to({speed: 3}, 2000, createjs.Ease.quadOut)
           .call(handleChange2,undefined,this)
           .addEventListener("change", handleChange.bind(this));


        function handleChange(event) {
            console.log("handleChange");
            // The tween changed.
            if (this.bankData.nearest==null) {
                this.bankData.ypos -= this.bankData.speed;

                if (this.bankData.ypos < -350) { this.bankData.ypos = -this.bankData.speed};
               this._clipBank.clip.y = this.bankData.ypos;
            // this.bankData.blurFilter.blurY = this.bankData.speed/2;
            //   this._clipBank.clip.updateCache();
            }
        }

        function handleChange2(event) {

            this.bankData.nearest = this.getNearest();
            console.log("hd2",  this.bankData.nearest.y)
 //this.bankData.blurFilter.blurX = 0;
               //this._clipBank.clip.updateCache();

            createjs.Tween.get(this._clipBank.clip, {override:true})
                .to({y: this.bankData.nearest.y}, 2500, createjs.Ease.quadOut).call(handleChange3,undefined,this)

         }

         function handleChange3(event) {
            console.log("hd3", event, this);

            this.select({itemIndex: (this.bankData.nearest.index + 1 == this.numItems ? 1 : this.bankData.nearest.index + 1), transition: "none"})
            //this.selected = this.bankData.nearest.clip;
            this.shuffleRunning = false;
            params.onFinished({type:"finished", target: this})
        
        }
       // this._clipBank.getChildByName("EL_01").visible = true;
        //createjs.Ticker.addEventListener( "tick", this );
    }




 
    xen.MediasBank = MediasBank;

}() )