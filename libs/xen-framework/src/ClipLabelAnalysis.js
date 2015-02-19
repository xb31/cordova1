var ClipLabelAnalysis = function( xenClip ) {
    this.target = xenClip;
    this.clip = xenClip.clip;
    this._callback = null;
    var currentLabel;
    var actions = [];
    this.mainAction = "sound";

    this.check = function( callback ) {
        this._callback = callback;
        var labelToTest = this.clip.getCurrentLabel();
        actions = [];
        console.log( "check " + currentLabel + ", " + labelToTest );

        if ( labelToTest == null ) {
            return;
        }

        if ( labelToTest !== currentLabel ) {
            //--- on a changé de label
            console.log( "NEW LABEL : " + labelToTest );
            this.clip.stop();
          currentLabel = labelToTest;

            
          //this._showTextes();
            //this._showPhotos();

            //this._callCustomFunction1();

            this._playComment();
            this._playAnimsOnce();
             //this._showVideos();

            //--- Si clips nommés BTN_
            //--- Si clips nommés SND_
            //...
            this._callCustomFunction();
        }
    }

    this._callCustomFunction = function() {
        //--- APPEL DE FONCTION CUSTOM
        //On execute la premiere déclaration de fonction trouvée:
        //1/ fonction xenClip.actions[currentLabel]
        if ( this.target.actions[ currentLabel ] != undefined ) {
            this.target.actions[ currentLabel ]();
        }
        //2/ la fonction definie dans le fichier "src/" + currentLabel (cf require)
        else {
            try {
                console.log("src/" + currentLabel)
                require( "src/" + currentLabel )();
            } catch ( err ) {

            }
        }
    }

    this._playComment = function() {
        //--- COMMENTAIRE
        //--- Si commentaire du même nom (moins le _"), on le joue
        var commentFounded = false;
        var commentId = "S_" + xen.config.lang + "_" + xen.config.moduleID + "_" + currentLabel.substr( 1 );
        for ( var i = 0; i < xen.config.ressources.length; i++ ) {
            if ( xen.config.ressources[ i ].id == commentId ) {
                commentFounded = true;
                break;
            }
        }
        if ( commentFounded == true ) {
            xen.comment.play( commentId, "ZAP", this._finish.bind( this, commentId ) );

            actions.push( {
                id: commentId,
                type : "sound"
            } )
        }
    }

    this._playAnimsOnce = function() {
        //--- Si clips de nom commencant par anim_, on les joue une fois (ou loop_<nombre de fois>).
       // console.log("this.clip "+this.clip);
       // console.log("this.clip.name "+this.clip.name);
        var anims = xen.Clip.getChildrenByName( this.clip, "^anim_" );
        //console.log("anims "+anims);
        //console.log("anims.length "+anims.length);
        for ( var i = 0; i < anims.length; i++ ) {
            var anim = new xen.Clip( {
                clip: anims[ i ]
            } );
            actionID = anim.clip.name
            actions.push( {
                id: actionID,
                type : "anim"
            } );
            //console.log("anim.totalFrames "+anim.totalFrames);
            anim.play(0, anim.totalFrames, this._finish.bind( this, actionID ) );
        }
    }

    this._showTextes = function() {

    }

    this._showPhotos = function() {

    }

    this._showVideos = function() {

    }

    this._finish = function( actionID ) {

        if(actionID.type === this.mainAction ){

        }
        console.log( "finish " + actionID )
        for ( var i = 0; i < actions.length; i++ ) {
            if ( actions[ i ].id == actionID ) {
                actions.splice( i, 1 );
            };
        };

        if ( actions.length == 0 ) {
            this._callback.apply( this.target, [ {
                event: "finished"
            } ] );
        }
    }
};