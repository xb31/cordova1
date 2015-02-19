// espace de noms
this.xen = this.xen || {};

/**
 * @class Tools
 */
( function() {
	var Tools = function() {}

	/**
	 * gimme2digits
	 * @param  {int} value
	 * @return {string}
	 * @memberof! Tools#
	 */
	Tools.gimme2digits = function( value ) {
		return ( value < 10 ) ? "0" + value : value;
	}

	/**
	 * raccourci pour Tools.gimme2digits
	 * @memberof! Tools#
	 * @method
	 */
	Tools.g2d = Tools.gimme2digits;

	/**
	 * Charge un xml.</br>
	 *
	 * 2 méthodes:</br>
	 * <ul>
	 * <li>charger un fichier xml via XHTTPRequest, implique d'etre sur serveur</li>
	 * <li>récuperer le xml text d'une variable en dur, permet l'execution local sans serveur.</li>
	 * </ul>
	 * @param  {String}   xmlIdOrPath path of file or string text/xml
	 * @param  {Boolean}   xhr         utilise XHTTPRequest, implique execution via serveur (url type http,...)
	 * @param  {Function} callback    fonction de retour, function(event){var xml = event.result // objet xml DOM}
	 * @memberof! Tools#
	 */
	Tools.loadXML = function( xmlIdOrPath, xhr, callback ) {
		xhr = ( xhr == undefined ) ? true : xhr;
		//xhr = false;
		if ( xhr == true ) {
			$.ajax({ 
			type: "GET", 
			url: xmlIdOrPath, 
			dataType: "xml", 
			success: function(event){
				callback({result:event})
			}, 
			error: callback 

			});		


		} else {
			if ( window.DOMParser ) {
				var parser = new DOMParser();
				var xmlDoc = parser.parseFromString( window[ xmlIdOrPath ], "text/xml" );
			} else // Internet Explorer
			{
				var xmlDoc = new ActiveXObject( "Microsoft.XMLDOM" );
				xmlDoc.async = false;
				xmlDoc.loadXML( window[ xmlIdOrPath ] );
			}
			callback( {
				result: xmlDoc
			} );

		}
	}

	// Tools.loadXML = function( xmlIdOrPath, xhr, callback ) {
	// 	xhr = ( xhr == undefined ) ? true : xhr;
	// 	//xhr = false;
	// 	if ( xhr == true ) {
	// 		var loader = new createjs.LoadQueue( false, "", true );
	// 		loader.addEventListener( "fileload", callback );
	// 		loader.loadFile( xmlIdOrPath );
	// 	} else {
	// 		if ( window.DOMParser ) {
	// 			var parser = new DOMParser();
	// 			var xmlDoc = parser.parseFromString( window[ xmlIdOrPath ], "text/xml" );
	// 		} else // Internet Explorer
	// 		{
	// 			var xmlDoc = new ActiveXObject( "Microsoft.XMLDOM" );
	// 			xmlDoc.async = false;
	// 			xmlDoc.loadXML( window[ xmlIdOrPath ] );
	// 		}
	// 		callback( {
	// 			result: xmlDoc
	// 		} );

	// 	}
	// }

	xen.Tools = Tools;
}() );