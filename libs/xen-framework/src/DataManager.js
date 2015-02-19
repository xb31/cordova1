// espace de noms
this.xen = this.xen || {};

/**
 * Permet de stocker, récupérer des variables en local. Les variables sont conservées même après fermeture du navigateur.</br>
 * Pour que les données ne soient pas conservées après fermeture du navigateur, il faut utiliser le sessionStorage de l'html5 au lieu du localStorage utilisé ici.</br>
 * @example
 *     // sauvegarde de variable:
 *
 *    xen.memo.setVariable("myVar", "text...");
 *    xen.memo.setVariable("myVar", {id:"bob", mail:"bob@mail.com"});
 *    xen.memo.setVariable("myVar", [1,2,"a", true]);
 *
 *    // récupération de la variable:
 *    console.log(xen.memo.getVariable("myVar"));
 * @class DataManager
 */
( function() {
    "use strict";

    /** @constructor */
    var DataManager = function() {

        this.initialize();
    }

    var p = DataManager.prototype;
    /**
     * [initialize description]
     * @constructs DataManager
     * @return {} [description]
     */
    p.initialize = function() {}

    /**
     * sauve une variable de type string (genre cookie).
     * @param {string} name
     * @param {string} value
     * @memberof! DataManager#
     */
     p.load = function( params ) {

        var loadRequest = { 
            manifest: params.manifest, 
            onFinished: params.onFinished, 
            index: -1, 
            current: {}, 
        }
         
         this._loadAll(loadRequest);
    }


    p._loadAll = function(params){
        params.index++;
        if (params.index < params.manifest.length) {
            params.current = params.manifest[params.index];

            this["_load"+params.current.type](params)
        }else{
            params.onFinished(null);
        }
    }

    p._loadClip = function( params ) {
        var request = params.current;
        var me = this;

        if (request.id == undefined) {console.log("id not exits"); return;};
            console.log( request.id );

        var loadLib = function() {
            //console.log( "loadLib " + loadLib );
            if ( lib.properties.manifest.length > 0 ) {
                //--- Load internals medias export by Flash
                var loader = new createjs.LoadQueue( false );
                loader.installPlugin( createjs.Sound );
                loader.addEventListener( "fileload", fileload.bind( this ) );
                loader.addEventListener( "error", loadedError.bind( this ) );
                loader.addEventListener( "complete", loadedAll.bind( this ) );
                console.log( lib.properties.manifest )
                for ( var i = 0; i < lib.properties.manifest.length; i++ ) {
                    lib.properties.manifest[ i ].src = xen.config.directories.animations + "/" + request.id + "/html5/" + lib.properties.manifest[ i ].src;
                };
                loader.loadManifest( lib.properties.manifest );
            } else {
                loadedAll.call( this );
            }
        }

        var loadedAll = function( event ) {
            //--- On instancie le clip
            console.log(request);
            
            me._loadAll(params);
            // if(request.onFinished != undefined) {setTimeout(request.onFinished,0);}
        }

        var loadedError = function( event ) {
            console.log( event );
        }

        var fileload = function( event ) {
            console.log( event );
            if ( event.item.type == "image" ) {
                var libImage = window[request.id + "_images"] ||  window["images"] ;
               libImage[ event.item.id ] = event.result;
            }
        }

      
        //--- si anim non deja en memoire, on la charge
        var lib = window[ request.id ];
        if ( lib == undefined ) {
            require( [ xen.config.directories.animations + "/" + request.id + "/html5/" + request.id ], ( function() {
                lib = window[ request.id ];
                loadLib.call( this );
            } ).bind( this ) );
        } else {
            loadLib.call( this );
        }
    }

     xen.DataManager = DataManager;

}() )

