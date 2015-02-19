// espace de noms
this.xen = this.xen || {};

/**
 * @class CommentPlayer
 */
( function() {
    "use strict";

    /** @constructor */
    var CommentPlayer = function() {
        
        this.initialize();
    }

    var p = CommentPlayer.prototype;
/**
 * [initialize description]
 * @constructs CommentPlayer
 * @return {} [description]
 */
    p.initialize = function() {
        this._initClicZap();
    }

    // commentaire en cours
    p._currentComment = null;
    p._currentCommentCallback = null;

    /**
     * play.
     * @param  {}   id
     * @param  {}   zapBlock
     * @param  {Function} callback
     * @return {}
     * @memberof! CommentPlayer#
     */
    p.play = function( id, zapBlock, callback ) {
        this.cancel(); // on annule le comment en cours si existant.
        this._currentCommentCallback = callback;
        this._currentComment = {
            id: id
        };
        console.log( "playComment id : " + this._currentComment.id );

        this._currentComment.sound = createjs.Sound.play( this._currentComment.id );
        this._currentComment.sound.on( "complete", this._commentFinished, this );
        // this._currentComment.sound.addEventListener( "complete", _commentFinished );
        if ( zapBlock == "ZAP" ) {
            this._clipZapShow( true );
        }
    }

    p._commentFinished = function() {
        console.log( "_commentFinished" );
        this._currentComment.sound.removeEventListener( "complete", this._commentFinished );
        this._clipZapShow( false );
        if (this._currentCommentCallback != null && this._currentCommentCallback.handleEvent != null ) {
            this._currentCommentCallback.handleEvent.apply( this._currentCommentCallback.thisObj );
        } else if ( this._currentCommentCallback != null ) {
            this._currentCommentCallback();
        }
    }

    /**
     *  Stop le son et execute les actions de fin.
     * @return {} 
     * @memberof! CommentPlayer#
     */
    p.stop = function() {
        console.log( "stopComment" );
        console.log( this );
        this._clipZapShow( false );
        this._currentComment.sound.stop();
        this._currentComment.sound.removeEventListener( "complete", this._commentFinished );

        if (this._currentCommentCallback != null &&  this._currentCommentCallback.handleEvent != null ) {
            this._currentCommentCallback.handleEvent.apply( this._currentCommentCallback.thisObj );
        } else if ( this._currentCommentCallback != null ) {
            this._currentCommentCallback();
        }
    }

    /**
     * Stop le son sans executer les actions de fin
     * @return {} 
     * @memberof! CommentPlayer#
     */
    p.cancel = function() {
        console.log( "cancelComment" );
        if ( this._currentComment != null ) {
            this._currentComment.sound.stop();
            this._currentComment.sound.removeEventListener( "complete", this._commentFinished );
            this._clipZapShow( false );
            this._currentCommentCallback = null;
            this._currentComment = null;
        }
    }

    //// CLIPZAP ////

    /** Crée le clipZap */
    p._initClicZap = function() {
        console.log( "_initClicZap" );
        this.clicZap = new createjs.Shape();
        this.clicZap.graphics.beginFill( "#ff0000" ).drawRect( 0, 0, 800, 600 ); // TODO:stage size
        this.clicZap.alpha = xen.config.commentClicZapAlpha;
    }

    /** Active/Desactive le clipZap */
    p._clipZapShow = function( visibility ) {
        if ( visibility == true ) {
            this.clicZap.on( "click", this.stop, this );
            stage.addChild( this.clicZap );
        } else {
            this.clicZap.removeAllEventListeners();
            stage.removeChild( this.clicZap );
        }
    }

    xen.CommentPlayer = CommentPlayer;

}() )