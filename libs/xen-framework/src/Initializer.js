( function() {
    "use strict";

    var Initializer = function() {

        this.init = function() {
            console.log( "Initializer.init" );
            // charge tous les fichiers js nécessaires + ceux du module (ModuleConfig.moduleRequired)
            require( (xen.Config == undefined ? [
                // hotePath + "/html5/libs/createjs-2013.12.12.min.js", // ces 2 lignes sont instables ici
                // hotePath + "/html5/libs/movieclip-0.7.1.min.js",
                xenPath + "/src/DataManager.js",
                xenPath + "/src/Monitor.js",
                xenPath + "/src/Config.js",
                xenPath + "/src/Tools.js",
                xenPath + "/src/ClipLabelAnalysis.js",
                xenPath + "/src/Preload.js",
                xenPath + "/src/Clip.js",
                xenPath + "/src/Memo.js",
                xenPath + "/src/CommentPlayer.js",
                xenPath + "/src/SoundPlayer.js",
                xenPath + "/src/MusicPlayer.js"
            ] : []).concat(moduleRequired), function() {
                init1();
            } );
        }

        var init1 = function() {
            console.log( "init1" );
            if (window["monitoring"] == true) {xen.monitor = new xen.Monitor();};
            
            xen.data = new xen.DataManager();
            xen.config = new xen.Config();
            xen.comment = new xen.CommentPlayer();
            xen.memo = new xen.Memo();
            xen.sound = new xen.SoundPlayer();
            xen.music = new xen.MusicPlayer();
            console.log(xen.Tools)
            xen.tools = xen.Tools; //static class
            console.log(xen.tools)

            xen.tools.loadXML( "localConfig.xml", true, localConfigPathLoaded )
        }

        /** recuperation du nom du fichier xml de config */
        var localConfigPathLoaded = function( event ) {
            var xml = event.result;
            var src = xml.getElementsByTagName( "xml" )[ 0 ].getAttribute( "src" )
            console.log( src );
            xen.config.configPath = src;
            xen.tools.loadXML( xen.config.configPath, true, localConfigLoaded )
        }

        /** on conserve les infos */
        var localConfigLoaded = function( event ) {
            xen.config.configXML = event.result;
            console.log( xen.config.configXML );

            xen.config.moduleID = xen.config.configXML.getElementsByTagName( "ModuleInfo" )[ 0 ].getAttribute( "id" );
            xen.config.directories.animations = "A_" + xen.config.moduleID;

            getRessources();
        }

        /** récuperation des infos ressources et convertion en objet type manifest */
        var getRessources = function() {
            var ressources = xen.config.configXML.getElementsByTagName( "Resource" );
            var ressourcesArr = [];
            console.log( ressources.length );

            for ( var i = 0; i < ressources.length; i++ ) {
                //console.log(i);
                var attributes = ressources[ i ].attributes;
                var obj = {};
                for ( var j = 0; j < attributes.length; j++ ) {
                    obj[ attributes[ j ].name ] = attributes[ j ].value;
                };
                //console.log(obj);
                ressourcesArr.push( obj );
            };
            console.log( ressourcesArr );
            xen.config.ressources = ressourcesArr;
            init2();
        }

        /** Initialisation du xen-engine. 
        /*  chargement des ressources */
        var init2 = function() {
            console.log( "init2" );
            //xen = new xen();
            xen.Preload = new xen.Preload( xen.config.ressources, init3 );
        }

        var init3 = function() {
            console.log( "init3" );
            xen.initialized = true;

            //--- Initialise le stage createjs et canvas
            var canvas = document.getElementById( "canvas" );
            var ctx = canvas.getContext( '2d' ); //? utile ?
            stage = new createjs.Stage( canvas );

            //--- enable rollover, out events
            if ( xen.config.ENABLE_MOUSE_OVER == true ) {
                stage.enableMouseOver()
            } else {
                stage.enableMouseOver( 0 )
            }

            //--- Ticker createjs
            createjs.Ticker.setFPS( xen.config.framerate );
            createjs.Ticker.addEventListener( "tick", stage );

            //--- Initialisation du code propre au module. 
            xen.config.capsuleAlgo = new( require( "src/CapsuleAlgo" ) )();
            xen.config.capsuleAlgo.init();
        }

    }

    xen.Initializer = Initializer;
} ());