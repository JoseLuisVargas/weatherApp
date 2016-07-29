$( document ).ready(function() {
                    var $server;
                    $server = 'http://localhost:1280/xampp/weatherApp/www/;
  
                  
                   function Lista(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta1.php",
                               data: "yes",
                               success: function(data) {
                                    $('#yes').html(data);
                                }
                           });
                    }

                 Lista();

            });

