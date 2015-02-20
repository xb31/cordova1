define( function() {
    return function() {

        var mainAlgo = this;
        var ceditor;
        var editor1;
        var html;

        var intro = null;

        this.init = function() {
            console.log( "INIT MODULE" );

            //-- preload of needed ressources

            xen.data.load({
                manifest: [
                    {id:"INTRO", type: "Clip"},
                    {id:"ATELIER", type: "Clip"},
                    {id:"MACHINE", type: "Clip"},
                    {id:"EL", type: "Clip"}
                ],
                onFinished: function(event){
                    console.log("finished", window["INTRO"] )
                    intro = new xen.Clip({ id: "INTRO"});
                    screens.atelier = new xen.Clip({ id: "ATELIER"});
                    screens.machine = new xen.Clip({ id: "MACHINE"});
                    this.start();
                }.bind(this)
            });

            // intro = new xen.Clip( {
            //     id: "INTRO",
            //     onLoaded: ( function() {
            //         //-- on charge l'screens.atelier'
            //         screens.atelier = new xen.Clip( {
            //             id: "ATELIER",
            //             onLoaded: ( function() {

            //                 screens.machine = new xen.Clip( {
            //                     id: "MACHINE",
            //                     onLoaded: ( function() {

            //                         this.start();
            //                     } ).bind( this )
            //                 } );
            //             } ).bind( this )
            //         } );

            //     } ).bind( this )
            // } );

        }
     
        this.start = function() {

            console.log("start");
            this.introPlay(function(){
                this.goScreen("machine");
            }.bind(this))
            //this.goScreen("machine")
             //this.goScreen("atelier")
            //
        }



//______________________________________________________________________________________
// SCREENS  (Screens are Flash export clips wich contains only one label named ATTENTE.)

        var screens = [];

        var removeAllScreens = function(){
            console.log("removeAllScreens")
            if (intro.clip.parent != null) {stage.removeChild( intro.clip );};
            if (screens.atelier.clip.parent != null) {stage.removeChild( screens.atelier.clip );};
            if (screens.machine.clip.parent != null) {stage.removeChild( screens.machine.clip );};
        }

        this.goScreen = function(screenName){
            console.log("goScreen", screenName)
            var screen = screens[screenName];
            removeAllScreens();
            stage.addChild( screen.clip );

            if (!screen.isInitialised) {
               screen.gotoLabel( "ATTENTE", {
                    onEvent: {
                        labelCreated: function( event ) {
                            console.log( "labelCreated " + event.label )
                            console.log( "_initScreen_"+ screenName )
                            console.log( this["_initScreen_"+ screenName] )
                            this["_initScreen_"+ screenName].call( mainAlgo );
                        }.bind(this)
                    }
                } );
                screen.isInitialised = true;
            };

        }



//______________________________________________________________________________________
// INTRO (Linear Sequence INTRO)

        this.introPlay = function(callback){
            removeAllScreens();
            stage.addChild( intro.clip );




            intro.playLabel( "GENERIQUE", {
                onEvent: {
                    labelEnter: function(event){
                        xen.Clip.optimiseClips({clips: xen.Clip.getChildrenByName(intro.clip,"^cache_")});
                    },
                    finished: function( event ) {
                        console.log( "end mainTimeline.gotoAndPlay" );
                        callback();

                    }.bind( this )
                }
            } );

        }


        xen.Clip.optimiseClips = function(params){
            var clips = params.clips;

           for (var i = 0; i < clips.length; i++) {
               clips[i].cache(0,0,800,600);
           };
        }

//______________________________________________________________________________________
// MACHINE




        this._initScreen_machine = function() {
            console.log(screens.atelier)

            // var bounds = screens.machine.getChildByName("DECOR2").getBounds();
            // console.log(bounds, screens.machine.getChildByName("DECOR2"))
            screens.machine.getChildByName("DECOR2").cache(0,0,800,600);

            var btnManette = new xen.Clip( {
                clip:screens.machine.getChildByName("MANETTE"),
                states: {
                    normal: {label: "E1"},
                    rollover: {label: "E2"},
                    click: {label: "E3"}
                },
                useHandCursor: true,
                onEvent: {
                    click: function( event ) {
                        console.log( "click " + event.target.clip.name );
                        this._mediasBank.shuffle(function(){
                            console.log(this._mediasBank.getSelecteds())
                        }.bind(this));
                        
                    }.bind(this),
                    rollover: function( event ) {
                        console.log( "rollOver " + event.target.clip.name );
                    },
                    normal: function( event ) {
                        console.log( "rollOut " + event.target.clip.name );
                    }
                }
            });
            btnManette.enabled = true;

            var btnAtelier = new xen.Clip( {
                clip:screens.machine.getChildByName("BT_ATELIER"),
                states: {
                    disabled: {label: "E0"},
                    normal: {label: "E1"},
                    rollover: {label: "E2"},
                    click: {label: "E3"}
                },
                useHandCursor: true,
                onEvent: {
                    click: function( event ) {
                        console.log( "click " + event.target.clip.name );
                        this.goScreen("atelier");
                        
                    }.bind(this),
                    rollover: function( event ) {
                        console.log( "rollOver " + event.target.clip.name );
                    },
                    normal: function( event ) {
                        console.log( "rollOut " + event.target.clip.name );
                    }
                }
            });
            btnAtelier.enabled = true;

            //--- Banks
            this._mediasBank.init(function(){

            })
     
           
        }

        this._mediasBank= {
            banks: [],
            getSelecteds: function(){
                var result = {}
                for (var i = 0; i < this.banks.length; i++) {
                    result[i+1] = this.banks[i].selected.no;
                };
                return result;
            },
            shuffle: function(onFinished, noBank){
                if (noBank == undefined) {noBank = 0};

                this.banks[noBank].shuffle({
                    onFinished: function(event){
                        //console.log("finish", event)
                        for (var i = 0; i < this.banks.length; i++) {
                           // console.log(this.banks[i].shuffleRunning);
                            if (this.banks[i].shuffleRunning == true) {
                                return;
                            };
                        };
                        onFinished();

                    }.bind(this)
                });

                if (noBank==this.banks.length - 1) {

                }else{
                    console.log("setime")
                    setTimeout(function(){ 
                        console.log("setime2",this.shuffle,  this )

                        this.shuffle(onFinished, noBank+1)
                    }.bind(this), 500+ Math.random()*500);
                }
            },

            init: function(callback){

                this.banks[this.banks.length] = new xen.MediasBank({
                    clipId: "EL",
                    target: screens.machine.getChildByName("MB_0"+ Number(this.banks.length+1)),
                    onInitialized: ( function(event) {
                        var btnL = new xen.Clip( {
                            clip:screens.machine.getChildByName("BOUTON_0"+Number(this.banks.length)+"_G"),
                            states: {
                                normal: {label: "E1"},
                                rollover: {label: "E2"},
                                click: {label: "E3"}
                            },
                            useHandCursor: true,
                            onEvent: {
                                click: function( event ) {
                                    console.log( "click " + event.target.clip.name );
                                    this.banks[event.target.no-1].prev();
                                }.bind(this),
                                rollover: function( event ) {
                                    console.log( "rollOver " + event.target.clip.name );
                                }.bind(this),
                                normal: function( event ) {
                                    console.log( "rollOut " + event.target.clip.name );
                                }.bind(this)
                            }
                        });

                        btnL.no = this.banks.length;
                        btnL.enabled = true;

                        var btnR = new xen.Clip( {
                            clip:screens.machine.getChildByName("BOUTON_0"+Number(this.banks.length)+"_D"),
                            no: this.banks.length,
                            states: {
                                normal: {label: "E1"},
                                rollover: {label: "E2"},
                                click: {label: "E3"}
                            },
                            useHandCursor: true,
                            onEvent: {
                                click: function( event ) {
                                    console.log( "click " + event.target.clip.name, event.target.no, event.target );
                                    this.banks[event.target.no-1].next();
                                }.bind(this),
                                rollover: function( event ) {
                                    console.log( "rollOver " + event.target.clip.name );
                                }.bind(this),
                                normal: function( event ) {
                                    console.log( "rollOut " + event.target.clip.name );
                                }.bind(this)
                            }
                        });
                        btnR.no = this.banks.length;
                        btnR.enabled = true;

                        // this.banks[this.banks.length-1].y = this.banks.length*70.
                        if (this.banks.length == 5) {
                            callback();
                        }else{
                            this.init(callback);
                        }


                    }).bind( this ),

                    onRollOver: ( function(event) {
                    //xen.comment.play({code:""})
                    }).bind( this ),
                    onRollOut: ( function(event) {
                    //xen.comment.stop();
                    }).bind( this ),
                    onClick: ( function(event) {

                    }).bind( this )
                })

            }

        };



//______________________________________________________________________________________
// ATELIER

        this._initScreen_atelier = function() {
            console.log(screens.atelier)

            var bounds = screens.atelier.getChildByName("DECOR").getBounds();
            console.log(bounds, screens.atelier.getChildByName("DECOR"))
            screens.atelier.getChildByName("DECOR").cache(0,0,800,600);
            //--- EDITOR TXT
            var repere = screens.atelier.getChildByName( "FEUILLE" );
            var bounds = repere.getTransformedBounds();

            // createTextEditor( {
            //     id: "editor2",
            //     bounds: bounds
            // } )

            initPalette();

            initBTN( {
                clip: screens.atelier.getChildByName( "BT_WEB" ),
                click: function( event ) {
                        alert("envoi web")
                    }
            } )


            initBTN( {
                clip: screens.atelier.getChildByName( "BT_RET" ),
                click: function( event ) {
                    this.goScreen("machine");
                }.bind(this)
            } )
        }

        var createTextEditor = function( params ) {
            console.log( $( '#canvasHolder' ) )
            var newdiv = document.createElement( 'div' );
            newdiv.id = params.id;
            newdiv.className = params.id;
            newdiv.setAttribute( "name", params.id );
            newdiv.setAttribute( "contenteditable", true );

            console.log( newdiv )
            newdiv.style.left = params.bounds.x + "px";
            newdiv.style.top = params.bounds.y + "px";
            newdiv.style.width = params.bounds.width + "px";
            newdiv.style.height = params.bounds.height + "px";
            $( '#canvasHolder' )[ 0 ].appendChild( newdiv );

            console.log($('#'+params.id));

            ceditor = CKEDITOR.inline( params.id, {
            // Allow some non-standard markup that we used in the introduction.
            //extraAllowedContent: 'a(documentation);abbr[title];code',
            //removePlugins: 'stylescombo',
            //extraPlugins: 'sourcedialog',
            // Show toolbar on startup (optional).
            // toolbarGroups: [
            // ]
            } );
            ceditor.on("selectionChange", function(event){
                console.log(event.data.selection.getSelectedText())
                console.log(event.editor.getSelection().getCommonAncestor().$.parentElement.style)
                //console.log(event.editor.getSelection().getSelectedElement())
            })

        }

        var initPalette = function() {
            console.log(screens.atelier)

            initColorButtons();
        }


        var initColorButtons = function() {
            console.log(screens.atelier)
            for ( var i = 1; i <= 12; i++ ) {
                initColorBTN( {
                    no: i,
                    clip: screens.atelier.getChildByPath( "PALETTE_TEXTE.PAL_" + xen.tools.g2d( i ) )
                } )
            };

        }

        var initColorBTN = function( params ) {
            console.log("initColorBTN");
            console.log(params.clip)
            var btn = new xen.Clip( {
                clip: params.clip,
                states: {
                    normal: {
                        label: "E1"
                    },
                    rollover: {
                        label: "E2",
                        noise: {
                            code: "B_DEMO_ROLL"
                        },
                        ib: {
                            id: "IB_ROLL",
                            position: 12
                        }
                    },
                    click: {
                        label: "E3",
                        noise: {
                            code: "B_DEMO_CLIC"
                        }
                    },
                },
                useHandCursor: true,
                onEvent: {
                    click: function( event ) {
                        console.log( "click " + this );
                        console.log( "click " + event.target.no );
                        console.log( "color " + event.target.color );
                        changeColor( {
                            color: event.target.color
                        } );
                    },
                    rollover: function( event ) {
                        console.log( "rollOver " + event.target.clip.name );
                    },
                    normal: function( event ) {
                        console.log( "rollOut " + event.target.clip.name );
                    }
                }
            } );
            btn.no = params.no;
            btn.color = colors[params.no-1];
            console.log("color", btn.getChildByName("COULEUR"))
            //btn.getChildByName("COULEUR").visible = false;
             var bounds = btn.clip.getBounds();
             btn.getChildByName("COULEUR").shape.cache(bounds.x, bounds.y, bounds.width, bounds.height);

            var colorBtn = hexToRGB(colors[params.no-1])
            btn.getChildByName("COULEUR").shape.filters = [
                 new createjs.ColorFilter(0,0,0,1, colorBtn.r,colorBtn.g,colorBtn.b,255)
             ];

            btn.getChildByName("COULEUR").shape.updateCache();
            btn.enabled = true;

        };

        var colors = [ '#ff0000', '#00ff00', '#0000ff', '#000000', '#ffff00', "#547896", "#547896", "#547896", "#547896", "#547896", "#547896", "#547896" ]

        var changeColor = function( params ) {
            console.log("changeColor", params.color);   
            var style = new CKEDITOR.style( {
                styles: {
                    'color': params.color
                }
            } );
            ceditor.applyStyle( style )
        }


//______________________________________________________________________________________
// COMMON

        function hexToRGB(h){
           return {r:parseInt((cutHex(h)).substring(0,2),16), g: parseInt((cutHex(h)).substring(2,4),16), b:parseInt((cutHex(h)).substring(4,6),16)}
        }

        function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
        function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
        function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
        function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}


       var initBTN = function( params ) {
            var btn = new xen.Clip( {
                clip: params.clip,
                states: {
                    normal: {
                        label: "E1"
                    },
                    rollover: {
                        label: "E2",
                        noise: {
                            code: "B_DEMO_ROLL"
                        },
                        ib: {
                            id: "IB_ROLL",
                            position: 12
                        }
                    },
                    click: {
                        label: "E3",
                        noise: {
                            code: "B_DEMO_CLIC"
                        }
                    },
                },
                useHandCursor: true,
                onEvent: {
                    click: params.click,
                    rollover: function( event ) {
                        console.log( "rollOver " + event.target.clip.name );
                    },
                    normal: function( event ) {
                        console.log( "rollOut " + event.target.clip.name );
                    }
                }
            } );
            //btn.no = i;
            btn.enabled = true;

        };
    };
} )