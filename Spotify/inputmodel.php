<?php

                if(isset($_POST['submit']))
              {
                if(getimagesize($_FILES['SongImage']['tmp_name']) === false)
                {
                  echo "No image";
                }
                else{

                  // Song Name & Artist

                  $SongName = $_POST['SongName'];
                  $Artist = $_POST['Artist'];
                  $a = new mysqli("127.0.0.1","root","","spotify");

                  

                  // MP3 file upload
                  $mp3_file = $_FILES['SongMp3']['tmp_name'];
                  $Song = file_get_contents($mp3_file);
                  $Songs = base64_encode($Song);
                  
                  // echo "<audio controls src='data:audio/mpeg;base64,$Song'></audio>";

                  //Song Image

                  $SongImage = $_FILES['SongImage']['tmp_name'];
                  $names = $_FILES['SongImage']['name'];
                  $SongImage = file_get_contents($SongImage);
                  $result = base64_encode($SongImage);
                  echo   $Songs;
                  // echo "<img src='data:image;base64,$result' style='height:100px;'>";

                  // $create = "INSERT INTO songsdata (songImage,songName,Artist,Song) VALUES ('$result','$SongName','$Artist','$Songs')";
                  $print =  $a->query("INSERT INTO songlists (songImage,songName,Artist,Song) VALUES ('$result','$SongName','$Artist','$Songs')");
                  
                  
                  // if($a->query($create)===true){
                  //   echo "success";
                  //   header("location:http://localhost:3000");
                  //       }
                  //       else{
                  //             echo "failed";
                  //      }
                 
                }

                
              }

        
?>

<!-- // set global max_allowed_packet=33554432 -->
    
<!-- if(isset($_POST['submit']))
        {
          if(getimagesize($_FILES['image']['tmp_name']) === false)
          {
            echo "No image";
          }
          else{
            
            $image = $_FILES['image']['tmp_name'];
            $names = $_FILES['image']['name'];
            $image = file_get_contents($image);
            $result = base64_encode($image);
            echo $result;
            echo "<img src='data:image;base64,$result' style='height:100px;'>";
          }
        }
        else{
          echo "Failed";
        } 

         // if($a->query($create)===true){
                  //       echo "success";
                  //   		header("location:http://localhost:3000");
                  //           }
                  //           else{
                  //                 echo "failed";
                  //          }
      
      
      
      
      
      
      
      
      
      
      -->


