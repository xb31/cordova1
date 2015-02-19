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
 * @class Memo
 */
( function() {
    "use strict";

    /** @constructor */
    var Memo = function() {

        this.initialize();
    }

    var p = Memo.prototype;
    /**
     * [initialize description]
     * @constructs Memo
     * @return {} [description]
     */
    p.initialize = function() {}

    /**
     * sauve une variable de type string (genre cookie).
     * @param {string} name
     * @param {string} value
     * @memberof! Memo#
     */
    p.setVariable = function( name, value ) {
        if ( typeof( Storage ) !== "undefined" ) { // vérifie que localstorage est pris en compte par le navigateur.
            localStorage.setItem( name, JSON.stringify( value ) );
        } else {
            console.log( "No Web Storage support" );
        }
    }

    /**
     * récupere une variable sauvée par setVariable
     * @param  {string} name
     * @return {string}
     * @memberof! Memo#
     */
    p.getVariable = function( name, defaultValue ) {
        if ( typeof( Storage ) !== "undefined" ) { // vérifie que localstorage est pris en compte par le navigateur.
            var variable = JSON.parse( localStorage.getItem( name ) );
            if (variable == null && defaultValue!=undefined) {
                 localStorage.setItem( name, JSON.stringify( defaultValue ) );
                 return defaultValue;
            }else{
                return variable;
            }
            
        }
        console.log( "No Web Storage support" );
        return null;
    }

    xen.Memo = Memo;

}() )