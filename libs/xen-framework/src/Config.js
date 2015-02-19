// espace de noms
 this.xen = this.xen || {};

/**
  * @class Config
  */
( function() {
  "use strict";
/**
 * @constructor
 */
var Config = function(){
	/**
	 * chemin du fichier xml de config récupéré dans localConfig.xml.
	 * @type {String}
	 */
	this.configPath = ""; 
	/** le xml de config */
	this.configXML = null;
	/** les resources du module (array type manifest) = converti en manifest à partir des ressources dans configXML. */ 
	this.ressources = null; 
	/** */
	this.lang = "FR"; 
	/** */
	this.framerate = 24; 
	/** */
	this.moduleID = ""; 
	/** */
    this.directories = {
        animations: "A_moduleID"
    }
    /** référence à l'instance de CapsuleAlgo du module */
    this.capsuleAlgo = null; 
    /** transparence du clipzap utilisé pour les comments. valeur minimum 0.01 (/!\ 0 ne detect plus les clicks) */
    this.commentClicZapAlpha = 0.01;

    //--- CONSTANTES 
    //
    /** autorise la détection des events rollover et rollout */
    this.ENABLE_MOUSE_OVER = true;

    this.commentPriorAnim = true;
}

xen.Config = Config;

}() );