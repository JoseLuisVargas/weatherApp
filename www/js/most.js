$( document ).ready(function() {
                    var $server;
                    $server = 'http://localhost:1280/xampp/weatherApp/www/';              
	             function hora(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/hora.php",
                               data: "fecha",
                               success: function(data) {
                                    $('#fecha').html(data);
                                }
                           });
                    }

                 hora();

            });
