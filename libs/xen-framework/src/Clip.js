this.xen = this.xen || {};

/**
 * @class Clip
 * @tutorial Clip-tutorial
 */
( function() {
    "use strict";
    /**
     * Initialise un clip.
     * @constructor
     * @example
     * var clip = new xen.Clip({code : "ANIM"});
     * clip.gotoAndPlay("firstLabel", "lastLabel", function(result){
     *
     * })
     */
    var Clip = function( params ) {
        this.initialize( params );
    }

    var p = Clip.prototype;

    // PUBLIC ______________________________________

    p.id;
    p.actions = {};
    p.onEvent = function( event ) {};
    /**
     * Détails des différents états du clip lors de l'interactivité type bouton.
     * @memberof! Clip#
     * @property {object}  normal               - état normal du clip
     * @property {string}  normal.label         - label à jouer
     * @property {object}  rollover             -  état au roll
     * @property {string}  rollover.label         - label à jouer
     * @property {string}  rollover.noiseCode         - code bruitage à jouer
     * @property {string}  rollover.ibId         -  id infobulle
     * @property {object}  rollout             -  état au rollout
     *
     * @example Initialisation d'un clip type bouton.
     * var btn = new Clip({clip: stage.getChildByName("MY_CLIP") ,
     * states:
     * {
     *     normal : {label: "E1"},
     *     rollover : {label: "E2", noiseCode:"B_ROLL", ibID:"IB_01"},
     *     rollout : {label: "E1"}
     * },
     * onClick: function(){
     *     console.log("clicked")
     * }})
     */
    p.states = {
        disabled: {label: "E0"},
        normal: {label: "E1"},
        rollover: {label: "E2",noise: {code: ""},ib: {id: "",position: 12}},
        click: {label: "E2",noise: {code: ""},ib: {id: "",position: 12}},
        rollout: {label: "E1"}
    };   


    /** initialize */
    p.initialize = function( params ) {
        console.log( "initialize" )
        //--- un clip 'clip' est donné
        if ( params.clip != undefined ) {
            console.log( params.clip );
            this.clip = params.clip;
            this._initializeClip();
            this._overdubEvents( params );
            if(params.onLoaded != undefined) {setTimeout(params.onLoaded(),0);}
        }
        //--- l'id d'un clip à chargé est donné
        else if ( params.id != undefined ) {
            this.id = params.id;

            var loadedAll = function( event ) {
                //--- On instancie le clip
                this.lib = window[ params.id ];
                console.log(this);
               // console.log(this.lib[ "CLIP" ]);
                if (this.lib[ "CLIP" ]!= undefined) {
                    this.clip = new this.lib[ "CLIP" ]();
                }else{
                    this.clip = new this.lib[ this.id ]();
                }

                this._initializeClip();
                this._overdubEvents( params );

                if(params.onLoaded != undefined) {setTimeout(params.onLoaded,0);}
            }

            this.lib = window[ params.id ];
            if ( this.lib == undefined ) {

                xen.data.load({
                    manifest: [
                        {id:params.id, type: "Clip"}
                    ],
                    onFinished: function(event){
                        loadedAll.call(this);
                    }.bind(this)
                });

            }else{
                 loadedAll.call(this);
            }
        }
    }

    p._initializeClip = function() {
        console.log( "initializeClip" );
        console.log( this );
       if ( this.clip instanceof createjs.MovieClip ) {
            this.clip.gotoAndStop( 0 );
            this._labelAnalyser = new ClipLabelAnalysis( this );
            this.currentLabelIndex;
            this.labels = this.clip.getLabels();
        }
        this.onEvents = {
            labelEnter: this.onEvent,
            labelExit: this.onEvent,
            error: this.onEvent,
            finished: this.onEvent
        };

        Clip.arrangeFlashClipsNames( this.clip );

    }

    p._overdubEvents = function( params ) {
        console.log( "_overdubEvents" )
        //--- Récupération des paramètres
        if ( params != undefined ) {
            //--- on récupère les fonctions de callback et d'event
            if ( params.onEvent != undefined ) {
                if ( typeof( params.onEvent ) == "function" ) {
                    this.onEvents.labelEnter = this.onEvents.labelCreated = this.onEvents.labelExit = this.onEvents.finished = this.onEvents.error = this.onEvents.click = this.onEvents.rollover = this.onEvents.normal = params.onEvent;
                } else {

                    if ( params.onEvent.labelEnter != undefined ) {
                        this.onEvents.labelEnter = params.onEvent.labelEnter;
                    }
                    if ( params.onEvent.labelCreated != undefined ) {
                        this.onEvents.labelCreated = params.onEvent.labelCreated;
                    }
                    if ( params.onEvent.labelExit != undefined ) {
                        this.onEvents.labelExit = params.onEvent.labelExit;
                    }
                    if ( params.onEvent.finished != undefined ) {
                        this.onEvents.finished = params.onEvent.finished;
                    }
                    if ( params.onEvent.error != undefined ) {
                        this.onEvents.error = params.onEvent.error;
                    }
                    if ( params.onEvent.click != undefined ) {
                        this.onEvents.click = params.onEvent.click;
                    }
                    if ( params.onEvent.rollover != undefined ) {
                        this.onEvents.rollover = params.onEvent.rollover;
                    }
                    if ( params.onEvent.normal != undefined ) {
                        this.onEvents.normal = params.onEvent.normal;
                    }
                }
            }

            if ( params.states != undefined ) {
                this.states = params.states;
            };
        }
    }

    /**
     * gotoLabel description
     * @param  {string} label
     * @param  {object} params
     * @property {function}  params.onEvent   - function appelée à chaque event.
     * @memberof! Clip#
     */
    p.gotoLabel = function( label, params ) {
        console.log( "gotoLabel " + label );

        this._overdubEvents( params );

        //--- on verifie que le label demandé existe
        var labelFounded = false;
        for ( var i = 0; i < this.labels.length; i++ ) {
            if ( label == this.labels[ i ].label ) {
                //--- OK il existe, on va à la suite.
                labelFounded = true;
                this.currentLabelIndex = i;
                break;
            }
        }

        //--- ERROR label inexistant + exit
        if ( labelFounded == false ) {
            console.log( "label " + label + "not found on " + this.clip.name );
            this._dispatchEvent( {
                type: "error",
                text: "label " + label + "not found on " + this.clip.name
            } );
            return;
        }

        //--- OK
        //--- on va au label
        this.clip.gotoAndStop( label );

        Clip.arrangeFlashClipsNames( this.clip );

        //--- on appelle l'ecouteur labelEnter lié. Si la function retourne false, on s'arrete là.
        if ( this._dispatchEvent( {
            type: "labelEnter",
            label: label
        } ) == false ) {
            return;
        }

        //--- on analyse le contenu du label et déclenche les actions en fonction.
        this._labelAnalyser.check( function( result ) {
            //console.log(arguments);
            switch ( result.event ) {
                case "before":
                    break;
                case "running":
                    break;
                case "finished":
                    //--- Une fois toutes les actions liées au label,executées.
                    //--- on appelle l'ecouteur finished lié. Si la function retourne false, on s'arrete là.
                    //console.log(this);
                    if ( this._dispatchEvent( {
                        type: "finished"
                    } ) == false ) {
                        return;
                    }

            }
        } );

        if ( this._dispatchEvent( {
            type: "labelCreated",
            label: label
        } ) == false ) {
            return;
        }
    }

    /**
     * [playLabel description]
     * @memberof! Clip#
     * @param  {} label
     * @param  {object} params
     * @property {function}  params.onEvent   - function appelée à chaque event.
     * @property {function}  onFinished   - function appelée à lastLabel.
     * @property {string}  lastLabel   - dernier label inclus à jouer.
     * @property {string}  lastLabelExclude   - dernier label non inclus à jouer.
     * @return {}
     *
     * @example
     * clip.gotoAndPlay("_01", {
     * onEvent: function(result){
     *     switch (result.type){
     *         case "enterLabel":
     *         break;
     *     }
     * }})
     */
    p.playLabel = function( label, params ) {

        console.log( "playLabel " + label + " " + params.toString() );
        this.onEvents.externfinished = params.onEvent.finished; // on conserve finished() dans externfinished car on va la remplacer par _onLabelFinished
        params.onEvent.finished = this._onLabelFinished;
        this.gotoLabel( label, params );
    }
    /**
     * [play description]
     * @memberof! Clip#
     * @param  int startFrame
     * @param  int stopFrame
     * @param  {function} callback
     *
     * @example (ClipLabelAnalysis _playAnimsOnce)
     * anim.play(0, anim.totalFrames, this._finish.bind( this, actionID ) );
     */
    p.play = function(startFrame, stopFrame, callback){

        console.log("startFrame "+startFrame);
        console.log("stopFrame "+stopFrame);
        console.log("callback "+callback);
        var myClip = this.clip;
        var myClipTL = this.clip.timeline;
        // var tickFrame = createjs.Ticker.on("tick", handleTick);
        var handleTick =  function (event) {
            // Actions carried out each tick (aka frame)
            if (!event.paused) {
                // Actions carried out when the Ticker is not paused.
                console.log("current "+myClipTL.position)
                console.log("total "+stopFrame)
                if(myClipTL.position == (stopFrame-1)){
                    myClipTL.position = stopFrame;
                    event.remove();
                    callback();
                }
                if(myClipTL.position == (stopFrame)){
                    myClip.stop();
                     event.remove();
                }
            }
        }
        createjs.Ticker.on("tick", handleTick);
        this.clip.gotoAndPlay(startFrame);
    }

    /**
     * [private getChildByPath description]
     * @param  {} path
     * @return {}
     */
     p.getChildByPath = function( path ) {
        var pathArr = path.split(".");
        var clipName;
        var clipParent = this;
        var clipResult;


        for (var i = 0; i < pathArr.length; i++) {

            clipName = pathArr[i];
            clipResult = clipParent.getChildByName(clipName) || clipParent[clipName];
            console.log('clipresult', clipResult)
            if (clipResult == null) { return; };

            clipParent = clipResult;
        };

        
        return clipResult;
    }

    /**
     * [getChildByName description]
     * @param  {} path
     * @return {}
     */
    p.getChildByName = function( path ) {
        for ( var b = this.clip.children, c = 0, d = b.length; d > c; c++ ) {
            //console.log( b[ c ] )
            if ( b[ c ].name == path ) return b[ c ];
        }
        return null
    }

    // PRIVATE ______________________________________

    p._dispatchEvent = function( event ) {
        console.log( "_dispatchEvent " + event.type )
        //console.log("this.clip.name "+this.clip.name)
        //console.log("this.name "+this.name)
        // console.log( this )
       // console.log( this.onEvents[ event.type ] )
        if ( this.onEvents[ event.type ] == undefined ) {
            return true;
        } else {
            return this.onEvents[ event.type ].apply( this, [ event ] );
        }
    }

    p._labelAnalyser = null;

    p._onLabelFinished = function( result ) {
        console.log( "currentLabelIndex " + this.currentLabelIndex );
        if ( this.currentLabelIndex + 1 < this.labels.length ) {
            console.log( "nextLabel " + this.labels[ this.currentLabelIndex + 1 ].label );
            this.gotoLabel( this.labels[ this.currentLabelIndex + 1 ].label ); //this.finished == onLabelFinished car on est ici dans le scope de onEvents.
        } else {
            this.onEvents.externfinished.apply( this, [ {
                event: "finished"
            } ] );
        }
    }

    Object.defineProperty( p, "totalFrames", {
        get: function() {
            return this.clip.timeline.duration;
        }
    } );

    //--- INTERACTIVITY 

    p._enabled = false;

    Object.defineProperty( p, "enabled", {
        get: function() {
            return this._enabled;
        },
        set: function( value ) {
            console.log( "enabled " + value )
            if ( value == this._enabled ) {
                return;
            };
            this._enabled = value;
            if ( this._enabled ) {
                this._enableInteractivity();
            } else {
                this._disableInteractivity();
            }
        }
    } );

    p._clickHandler = function( event, data ) {
        console.log( "click ", this );
        if ( this.states.rollover.sound != undefined ) {
            this.states.rollover.sound.stop();
            this.states.rollover.sound = undefined;
        };
         console.log( "click2" );
       if ( this.states.click.noise != undefined ) {
            var noiseId = "B_" + xen.config.moduleID + "_" + this.states.click.noise.code;

            this.states.click.sound = createjs.Sound.play( noiseId );
        };
        console.log( "click3" );
        if ( this.states.click.label != undefined ) {
            this.gotoLabel( this.states.click.label );
        };
        console.log( "click 4" );
        this._dispatchEvent({type:"click", target: this});
        //this.onEvents.click.call( this );
    }

    p._rolloverHandler = function( event, data ) {
        console.log( "rollover " + this );
        if ( this.states.rollover.noise != undefined ) {
            var noiseId = "B_" + xen.config.moduleID + "_" + this.states.rollover.noise.code;

            this.states.rollover.sound = createjs.Sound.play( noiseId );
        };
        if ( this.states.rollover.label != undefined ) {
            this.gotoLabel( this.states.rollover.label );
        };
        this._dispatchEvent({type:"rollover", target: this});
        //this.onEvents.rollover.call( this );
    }

    p._rolloutHandler = function( event, data ) {
        console.log( "rollout " + this );
        if ( this.states.rollover.sound != undefined ) {
            this.states.rollover.sound.stop();
            this.states.rollover.sound = undefined;
        };
        if ( this.states.normal.label != undefined ) {
            this.gotoLabel( this.states.normal.label );
        };
        this._dispatchEvent({type:"normal", target: this});
        //this.onEvents.normal.call( this );
    }

    p._enableInteractivity = function() {
        console.log( "_enableInteractivity" )
        console.log( this )

        this.clip.on( "click", this._clickHandler, this, false );
        this.clip.on( "rollover", this._rolloverHandler, this, false );
        this.clip.on( "rollout", this._rolloutHandler, this, false );

        this.clip.cursor = "pointer";

        if ( this.states.normal.label != undefined ) {
            this.gotoLabel( this.states.normal.label );
        };
    }

    p._disableInteractivity = function() {
        console.log( "_disableInteractivity" )
        console.log( this )
        this.clip.removeAllEventListeners( "click" );
        this.clip.removeAllEventListeners( "rollover" );
        this.clip.removeAllEventListeners( "rollout" );

        this.clip.cursor = "auto";

        if ( this.states.disabled != undefined && this.states.disabled.label != undefined ) {
            this.gotoLabel( this.states.disabled.label );
        };

        //--- ? ce qui suit ne marche pas, bizarre
        // this.clip.removeEventListener ( "click", this._clickHandler );
        // this.clip.removeEventListener ( "rollover", this._rolloverHandler );
        // this.clip.removeEventListener ( "rollout", this._rolloutHandler );
    }

    p.turnLabelIntoFrame = function( labelName) {
        // transforme le frameName  en frameNumber
        var frame = -1;
        for ( var i = 0; i < this.labels.length; i++ ) {
            if ( labelName == this.labels[ i ].label ) {
                //--- OK il existe, on va à la suite.
                frame = this.labels[ i ].position;
                break;
            }
        }
        if(frame == -1){
            console.log("ATTENTION, le label "+labelName+ " n'existe pas dans le clip ciblé")
        }
        return frame;
    }

    // STATIC ______________________________________

    /**
     * Retourne un array de tous les enfants de mc, de nom pattern.
     * @param  {} mc
     * @param  {} pattern
     * @return {}
     */
    Clip.getChildrenByName = function( mc, pattern ) {
        var result = [];
        var regExp = new RegExp(pattern, "g")
       
       // console.log( " mc "+ mc );
       // console.log( " mc.children "+ mc.children );
       // console.log( " mc.children.length "+ mc.children.length );
        for ( var i = 0; i < mc.children.length; i++ ) {
            var child = mc.children[ i ];
            if ( child.name != null && child.name.search(regExp) != -1) {
                result.push( child );
            }
        };
        return result;
    }
    /**
     * Corrige les noms des clips dans l'export html5 de Flash.
     * Lors de l'export Flash vers html5, les noms des clips sont référencés comme variable dans le clip parent, mais clip.name est null. Donc parent.getChildByName("NomClip") return null même si le clip est bien nommé "NomClip" dans le fla.
     * L'appel de cette fonction sur un clip corrige ceci en remplissant la variable name de tous ces enfants selon les références trouvées.
     * @param  {createjs.MovieClip} movieClip
     */
    Clip.arrangeFlashClipsNames = function( movieClip ) {
        for ( var prop in movieClip ) {
            if ( prop != "parent" && prop != "shape" && movieClip[ prop ] instanceof createjs.DisplayObject ) {
                //console.log( prop );
                movieClip[ prop ].name = prop;
                //console.log("arrangeFlashClipsNames " +  movieClip[ prop ].name );
            };
        };

    }

    xen.Clip = Clip;

}() );