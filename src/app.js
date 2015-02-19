$( document ).ready( function() {
 } );

function loadText( params, callback ) {
    $.ajax( {
        type: "GET",
        url: params.url,
        dataType: "text",
        success: function( result ) {
            callback( result );
        }
    } );
}

function saveText(pathFile, text) {
    callService( "writefile", {
        url: pathFile,
        text: text
    }, function() {
        //alert("le fichier est sauvegardé");
    } )
}


/**
 * [callService description]
 * @param  {String}   methode  [description]
 * @param  {Object}   params   [description]
 * @param  {Function} callback [description]
 * @return none  return result in callback function. result is an object {data: result of opération, ... others eventuals properties}
 *
 *
 */
function callService( methode, params, callback ) {
    $.ajax( {
        type: "GET",
        url: "services/" + methode,
        dataType: "json",
        data: params,
        success: function( result ) {
            callback( result );
        }
    } );
}