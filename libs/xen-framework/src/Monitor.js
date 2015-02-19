// espace de noms
this.xen = this.xen || {};

/**
 * @class Monitor
 */
( function() {
    "use strict";

    /** @constructor */
    var Monitor = function() {
        
        this.initialize();
    }

    var p = Monitor.prototype;

    /**
     * [initialize description]
     * @constructs Monitor
     * @return {} [description]
     */
    p.initialize = function() {
        $("body")[0].innerHTML += '<div id="monitor" style="font-size: 14px; left:0; padding: 1px 5px; position:absolute; top:0; z-index:100;background:#000;color:#FFF;"></div>';

         var fpsElement = document.getElementById("monitor");
        createjs.Ticker.addEventListener("tick", function() {
             fpsElement.innerHTML = "FPS: " + Math.round(createjs.Ticker.getMeasuredFPS()) + "/" + createjs.Ticker.framerate;
        });

    }

     xen.Monitor = Monitor;

}() )