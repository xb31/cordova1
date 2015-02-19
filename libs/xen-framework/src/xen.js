//--- variables globales
var stage;

// espace de noms
this.xen = this.xen || {};

/**
 * @class xen
 * test4
 */
( function() {
    "use strict";
    xen.initialized = false;

    /**
     * Fonctions Globales
     * @see Tools
     */
    xen.tools = null;

    /**
     * Config du module
     * @see Config
     */
    xen.config = null;

    xen.monitor = null;
    /**
     * sons et bruitages
     * @see SoundPlayer
     */
    xen.sound = null;

    /** 
     * lecteur de commentaire zappable associé au module
     * @see CommentPlayer
     */
    xen.comment = null;

    /**
     * Musique de fond
     * @see MusicPlayer
     */
    xen.music = null;

    /** 
     * Objet pour sauvegarder/récupérer des variable sur le poste client (type cookie).
     * @see Memo
     */
    xen.memo = null;

    xen.text = null; // TODO:

    xen.video = null; // TODO:

    xen.image = null; // TODO:

   xen.init = function() {
        if ( xen.initialized === true ) {
            console.log( "xen already initialized" );
            return;
        }
 
        require( [ "src/ModuleConfig" ], function() {
            if ( xen.Initializer === undefined ) {
                require( [ xenPath + "/src/Initializer.js" ], function() {
                    new xen.Initializer().init();
                } );
            } else {
                new xen.Initializer().init();
            }

        } );

    };
}() );

/** ne pas supprimer, utilisé par les anims exportées de flash */
function playSound( id, loop ) {
    console.log( "ps " + id );
    createjs.Sound.play( id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop );
}