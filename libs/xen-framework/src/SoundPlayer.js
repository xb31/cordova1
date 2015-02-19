// espace de noms
this.xen = this.xen || {};

/**
 * @class SoundPlayer
 */
( function() {
    "use strict";

    /** @constructor */
    var SoundPlayer = function() {

        this.initialize();
    }

    var p = SoundPlayer.prototype;
    /**
     * [initialize description]
     * @constructs SoundPlayer
     * @return {} [description]
     */
    p.initialize = function() {}

    /**
     * joue le son.
     * @param {string} code
     * @return {SoundInstance} SoundInstance createjs
     * @memberof! SoundPlayer#
     */
    p.play = function( code ) {
        var noiseId = "B_" + xen.config.moduleID + "_" + code;
        return createjs.Sound.play( noiseId )
    }

    /**
     * stop tous les sons.
     * @memberof! SoundPlayer#
     */
    p.stopAll = function() {
        createjs.Sound.stop();
    }

    xen.SoundPlayer = SoundPlayer;

}() )