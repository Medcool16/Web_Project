
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

     // insert the student in table  

         //get the information of student 
     $Name =$_GET ['name'];
     $Gender =$_GET ['rb'];
     $Filiere =$_GET ['fil'];
     $Email =$_GET ['email'];
     $Password =$_GET ['pass'];
     $Club =$_GET ['club'];

        // insert into table
    //  $sql="insert into login (name,gender,filiere,email,password,Club) value ('$Name','$Gender','$Filiere','$Email','$Password','$Club');";
    $sql="delete from `login` where `gender`='male';"; 
    $conn->query($sql);
     if($conn->query($sql) === true){
      echo "ajouter correctement ";
     }
     else {
      echo "ereur </br>" . $conn->error;
     }

     

    

        //closing connection 
     $conn->close();
?>