<?php
   /* connection */
   $servername = "localhost";
   $username = "root";
   
     $conn = new mysqli ($servername,$username);
       // check connection 
   
     if($conn->connect_error){
       die("connexion fieled");
     }

     // use BD
     $sql="use web_project";
     $conn->query($sql);

        // get information of the student 
      $User = $_GET['user'];
      $Password = $_GET ['passd'];

         //select student from table login
     $sql="select distinct name,password from login where `name`='$User';";
     $stud=$conn->query($sql);

     if($stud->num_rows > 0){
        while($row =$stud->fetch_assoc()){
            $Pas = $row["password"];
        }
     }
    
     if($Pas == $Password){
      echo "connect correctly";
     }
     else{
      echo "Connection failed: username or mot de passe invalid";
     }


   $conn->close();

 ?>