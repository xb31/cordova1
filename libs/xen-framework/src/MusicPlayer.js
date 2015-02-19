// espace de noms
this.xen = this.xen || {};

/**
 * @class MusicPlayer
 */
( function() {
    "use strict";

    /** @constructor */
    var MusicPlayer = function() {

        this.initialize();
    }

    var p = MusicPlayer.prototype;
    /**
     * [initialize description]
     * @constructs MusicPlayer
     * @return {} [description]
     */
    p.initialize = function() {}

    p.sound = null;

    /**
     * joue le son.
     * @param {string} code
     * @memberof! MusicPlayer#
     */
    p.play = function( code ) {
        if ( code == undefined && this.sound != null ) {
            this.sound.play();
        } else if ( code != undefined ) {
            this.stop();
            var noiseId = "B_" + xen.config.moduleID + "_" + code;
            this.sound = createjs.Sound.play( noiseId );
        } else
            console.log( "no sound to play" );
    }

    /**
     * stop le son.
     * @memberof! MusicPlayer#
     */
    p.stop = function() {
        if ( this.sound != null ) {
            this.sound.stop();
        }
    }

    xen.MusicPlayer = MusicPlayer;

}() )