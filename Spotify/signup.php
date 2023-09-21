<?php
$email = $_POST['email'];
$password = $_POST['password'];
$password = sha1($password);
$profilename = $_POST['profilename'];

$year = $_POST['year'];
$month = $_POST['month'];
$day = $_POST['day'];

$dateofbirth = $day.'/'.$month.'/'.$year;

$radiovalue = $_POST['radio'];

    if($radiovalue == 'male')
    {
        $male = "male";
    }
    elseif($radiovalue == 'female')
    {
        $female = 'female';
    }
    elseif($radiovalue == 'non-binary')
    {
        $nonBinary = "non-binary";
    }
    else{
      $other = "other";
    }      

$a = new mysqli("127.0.0.1","root","","spotify");
$sqlQuery = "INSERT INTO signupuser (Email,Password,UserName,DateOfBirth,Gender) VALUES ('$email','$password','$profilename','$dateofbirth','$radiovalue')";

    if($a->query($sqlQuery)===true)
    {    
      header("location:http://localhost:3000/");
    }
    else{
      echo "failed";
    }
        
?>

    
