define( function() {
    return function() {

    var mainAlgo = this;
    var intro = null;
    var atelier;



    this.init = function() {
        console.log( "INIT MODULE" );
        console.log( xen.Clip );

        //-- on charge les screens utilisés
        
        xen.r.loadClips({
            ids: ["INTRO", "MACHINE", "ATELIER"],
            onFinished: function(event){
                mainAlgo.start();
            }
        })
    }

    this.start = function() {
        console.log("start")
       this.atelierGo()
        //this.introPlay(this.atelierGo)
    }

    var removeAllScreens = function(){
        if (intro.parent != null) {stage.removeChild( intro.clip );};
        if (atelier.parent != null) {stage.removeChild( atelier.clip );};
    }

    this.introPlay = function(callback){
        xen.screen.change("INTRO");

         xen.c["INTRO"].playLabel( "first", {
            onEvent: {
                finished: function( event ) {
                    console.log( "end mainTimeline.gotoAndPlay" );
                    callback();

                }.bind( this )
            }
        } );

    }

    this.atelierGo = function(){
        xen.screen.change("ATELIER");

        xen.c["ATELIER"].gotoLabel( "ATELIER", {
            onEvent: {
                labelCreated: function( event ) {
                    console.log( "labelCreated " + event.label )
                    initAtelierScreen.call( mainAlgo );
                }
            }
        } );
    }

    function initAtelierScreen() {
        console.log(atelier)

        //--- EDITOR TXT
        var repere = atelier.getChildByName( "FEUILLE" );
        var bounds = repere.getTransformedBounds();

        createTextEditor( {
            id: "editor2",
            bounds: bounds
        } )

        initPalette();

        initBTN( {
            clip: atelier.getChildByName( "BT_WEB" )
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
        $( '#canvasHolder' )[ 0 ].appendChild( newdiv )

    console.log($('#'+params.id))
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
        console.log(atelier)

        initColorButtons();
    }


    var initColorButtons = function() {
        console.log(atelier)
        for ( var i = 1; i <= 12; i++ ) {
            initColorBTN( {
                no: i,
                clip: atelier.getChildByPath( "PALETTE_TEXTE.PAL_" + xen.tools.g2d( i ) )
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

    function hexToRGB(h){
        return {r:parseInt((cutHex(h)).substring(0,2),16), g: parseInt((cutHex(h)).substring(2,4),16), b:parseInt((cutHex(h)).substring(4,6),16)}
    }

    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
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
                click: function( event ) {
                    console.log( "click " + event.target.clip.name );
                    console.log( "ceditor " + ceditor );
                    var style = new CKEDITOR.style( {
                        styles: {
                            'color': 'Blue'
                        }
                    } );
                    ceditor.applyStyle( style )
                },
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

    var testText = function() {

        // create dynamic text on the fly
        var text1 = xen.texts.create( {
            type: "dynamic",
            text: "blabla",
            style: "LM",
            parent: parent,
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but id instead text, text is get from Ressources Manager, and must be already loaded.
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but get matrix transformation from object instead coordonnees
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            transform: {
                x: 0,
                y: 0,
                width: 100,
                height: 50
            }
        } )
        // same but get informations from existing clip that will be replaced by created textfield, with same position, dimensions
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            model: clipOrTextfield
        } )

        // change text and style of existing text
        xen.texts.change( {
            target: textField,
            id: "LM_10",
            style: "LM"
        } )

    };

    var testImage = function() {

        // load image
        var image1 = xen.images.load( {
            idOrUrlOrPath: ""
        }, function( result ) {

        } )

        // get image already loaded
        var image1 = xen.images.getRessource( {
            idOrUrlOrPath: ""
        } )

        // create dynamic text on the fly
        var image1 = xen.images.create( {
            id: "",
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but id instead text, text is get from Ressources Manager, and must be already loaded.
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but get matrix transformation from object instead coordonnees
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            transform: {
                x: 0,
                y: 0,
                width: 100,
                height: 50
            }
        } )
        // same but get informations from existing clip that will be replaced by created textfield, with same position, dimensions
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            model: clipOrTextfield
        } )

        // change text and style of existing text
        xen.texts.change( {
            target: textField,
            id: "LM_10",
            style: "LM"
        } )

    };

    var ressourcesTest = function() {

        // cas 1
        // récuperer les infos d'une ressource
        // 
        // 
        // cas2
        // charger la ressource
        // 
        // utiliser la ressource
        // 
        // load and get image
        var image1 = xen.ressources.getRessource( {
            idOrUrlOrPath: ""
        }, function( result ) {

        } )

        // create dynamic text on the fly
        var image1 = xen.images.create( {
            id: "",
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but id instead text, text is get from Ressources Manager, and must be already loaded.
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            x: 0,
            y: 0,
            width: 100,
            height: "auto"
        } )
        //same but get matrix transformation from object instead coordonnees
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            parent: parent,
            transform: {
                x: 0,
                y: 0,
                width: 100,
                height: 50
            }
        } )
        // same but get informations from existing clip that will be replaced by created textfield, with same position, dimensions
        var text1 = xen.texts.create( {
            type: "dynamic",
            id: "LM_10",
            style: "LM",
            model: clipOrTextfield
        } )

        // change text and style of existing text
        xen.texts.change( {
            target: textField,
            id: "LM_10",
            style: "LM"
        } )

    };

    var getRessource = function( params, callback ) {

        callback( result );
        return result;
    }

    }
} )