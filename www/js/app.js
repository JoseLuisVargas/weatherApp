<<<<<<< 213b362eafae6322729371d08eec26d3d2089ddb
$( document ).ready(function() {
                    var $server;
                    $server = 'http://localhost:1280/xampp/weatherApp/www/';
                    function Lista(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "listaclima",
                               success: function(data) {
                                    $('#listaclima').html(data);
                                }
                           });
                    }

                 Lista();
	             function hora(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/hora.php",
                               data: "horaclima",
                               success: function(data) {
                                    $('#horaclima').html(data);
                                }
                           });
                    }

                 hora();
		             function AgregandoImg(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/CambiarFondo.php",
                               data: "CambiarFondo",
                               success: function(data) {
                                    $('#CambiarFondo').html(data);
                                }
                           });
                    }

                 AgregandoImg();

            });
=======
/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
>>>>>>> Creando Formulario
