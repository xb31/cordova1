this.xen = this.xen || {};

( function() {
    "use strict";

    xen.Preload = function( manifest, callback ) {

        console.log( "xen.Preload" );
        var preload;
        /*var progressText = new createjs.Text("", "20px Arial", "#000000");
    progressText.x = 300 - progressText.getMeasuredWidth() / 2;
    progressText.y = 20;
    stage.addChild(progressText);
    stage.update();*/

        function startPreload() {
            preload = new createjs.LoadQueue( false );
            preload.installPlugin( createjs.Sound );
            preload.on( "fileload", handleFileLoad );
            preload.on( "progress", handleFileProgress );
            preload.on( "complete", loadComplete );
            preload.on( "error", loadError );
            preload.loadManifest( manifest );

        }

        function handleFileLoad( event ) {
            console.log( event.item.type + " chargé: " + event.item.id );
        }

        function loadError( evt ) {
            console.log( "Error!", evt.text );
        }

        function handleFileProgress( event ) {
            console.log( ( preload.progress * 100 | 0 ) + " % Loaded" );
        }

        function loadComplete( event ) {
            console.log( "Finished Loading Assets" );
            callback();
        }

        if ( manifest.length > 0 ) {
            startPreload();
        } else {
            loadComplete();
        }
    }
}() );