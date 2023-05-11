<?php
/* connection */
   $servername = "localhost";
   $username = "root";
   
     $conn = new mysqli ($servername,$username);
       // check connection 
   
     if($conn->connect_error){
       die("connexion fieled");
     }

     
     

    //use BD
      $conn->query("use web_project");

    /*
        //create table
      $sql="create table Ping (Name varchar (20), CIN int, Sector varchar (6),Date date, Time time);";
      $conn->query($sql);
         
     */


            /* enregistrer la reservation */
        
        // savoir les donnés de l'étudiant 
    $Name = $_GET ['flname'];
    $Cin = $_GET ['cin'];
    $Sector = $_GET ['fili'];
    $Date = $_GET ['date'];
    $Time = $_GET ['time'];
    

        //tester le temps de reservation 
    $def=0;

    $sql = "select Date,date_format(Time,'%H:%i')  from Ping";
    $result = $conn->query($sql);
    if($result->num_rows >0){
        while($row = $result->fetch_assoc()){
            if( $row["date_format(Time,'%H:%i')"] == $Time && $row["Date"] == $Date){
                $def=1;
                break;
            }
        }
            }


  if($def==1){  // le temps est reservé avant 
      echo "le terain est reservé à ce temps";
  }

  if($def==0){  //if le temps selectioné n'est pas reservé avant 

          //insert into table 
      $sql="insert into Ping (Name,CIN,Sector,Date,Time) value ('$Name','$Cin','$Sector','$Date','$Time');";
        

      if($conn->query($sql)===true){
          echo "reservation Terminé";
      }
      else{
          echo "Ereur !!" . $conn->error;
      }

      //affichage des informations 
      ?>

     
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
   <div>
      <h2>Vos information sont</h2>
      <p>Name : <?php echo $Name ?> </p>
      <p>CIN : <?php echo $Cin ?></p>
      <p>Sector : <?php echo $Sector ?></p>
      <p>Date : <?php echo $Date ?></p>
      <p>Time : <?php echo $Time ?> for one hour</p> 
   </div>
</body>
</html>

<?php
  }

    //closing connection 
      $conn->close();
?>