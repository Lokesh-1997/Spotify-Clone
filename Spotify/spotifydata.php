<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");



$a = new mysqli("127.0.0.1","root","","spotify");

 
$get = "SELECT * FROM songlists";   

$data = $a->query($get);

while($b = $data->fetch_assoc()){

   $arr[]= $b;
    
}

echo json_encode($arr);


?>
