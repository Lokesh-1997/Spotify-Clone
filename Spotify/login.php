<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");


$a = new mysqli("127.0.0.1","root","","spotify");
$email = $_POST['email'];
$password = $_POST['password'];
$password1 = sha1($password);


if(isset($_POST['submit']))
{

$get = "SELECT Email,Password FROM signupuser WHERE Email = '$email' AND Password = '$password1'";
$data = $a->query($get);


if($b = $data->fetch_assoc()){
   header("location:http://localhost:3000/main");
}else{
  header("location:http://localhost:3000");
}   
}
?>

    
