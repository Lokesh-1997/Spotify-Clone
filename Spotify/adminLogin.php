<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");



$a = new mysqli("127.0.0.1","root","","spotify");


$get = "SELECT * FROM admin";   

$data = $a->query($get);

while($b = $data->fetch_assoc()){
   $arr[]= $b;
}

$data1 = json_encode($arr[0]);
$data2 = json_encode($arr[1]);



$username = $_POST['username'];
$password = $_POST['password'];                                                                                                                 

$inputFromUser = '{"Username":"' . $username . '",' . '"Password":"' . $password . '"}';

if( $inputFromUser === $data1){
    header("location:http://localhost:3000/adminloginsuccess");   
}                                                                                                                                                       
else if( $inputFromUser === $data2) {
    header("location:http://localhost:3000/adminloginsuccess"); 
}
else{
    header("location:http://localhost:3000/admin");                                                                                              
    }                                                       


// $sqlQuery = "INSERT INTO admin (Username,Password) VALUES ('$username','$username')";
// if($a->query($sqlQuery)===true)
// {    
//   header("location:http://localhost:3000/admin");
// }
// else{
//   echo "failed";
// } 
?>

    
