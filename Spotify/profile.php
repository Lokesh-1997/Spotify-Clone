<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$a = new mysqli("127.0.0.1","root","","spotify");
$get = "SELECT UserName FROM signupuser";  
$data = $a->query($get);
if($b = $data->fetch_assoc()){
   $arr[] = $b;  
}      
       
echo json_encode($arr);
        
?>

    
