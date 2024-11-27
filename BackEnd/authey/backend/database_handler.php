<?php
echo "file is included";

$host = "localhost";
$username = "crindalwalt";
$password = "password";
$db_name = "webdev02";

$connection  = mysqli_connect($host,$username,$password,$db_name);
 
if($connection){
    echo "connection is successful";
}else{
    echo "connection is failed";
}



?>