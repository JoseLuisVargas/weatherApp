<?php
include "cone.php";

date_default_timezone_set("America/Bogota");
$fecha=date("Y/m/d");
$SQL = "SELECT * FROM temperatura WHERE timestamp='$fecha'";

     $re = mysql_query($SQL, $serve);
 

echo "Temperatura: ".mysql_result($re,0,'valor')."°C"."</br>";
echo "Humedad: ".mysql_result($re,0,'valor1')."%"."</br>";
echo "Luminosidad: ".mysql_result($re,0,'valor2')."</br>";


?> 