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

                   function clima(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/clima.php",
                               data: "climaA",
                               success: function(data) {
                                    $('#climaA').html(data);
                                }
                           });
                    }
                  function climaR(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/climareporte.php",
                               data: "climaR",
                               success: function(data) {
                                    $('#climaR').html(data);
                                }
                           });
                    }
                 climaR()
                 clima();
                 hora();

            });
