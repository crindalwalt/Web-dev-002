<?php
function print_v($var)
{
    echo "<h2>";
    echo $var;
    echo "</h2>";
}
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $full_name = $_POST['fullname'];
    $email_address = $_POST["email"];
    $password  = $_POST['pass'];
    $confirm_password  = $_POST['pass2'];
    print_v($full_name);
    print_v($email_address);
    print_v($password);
    print_v($confirm_password);


    // check if fields are empty or not
    if (
        empty($_POST['fullname']) &&
        empty($_POST['email']) &&
        empty($_POST['pass']) &&
        empty($_POST['pass2'])
    ) {
        header("location:../register.php?emptyFields=true");
        exit();
    } else {


        // check if password is matched or not
        if ($password == $confirm_password) {
            require "database_handler.php";
            // save record to database
            $insertionQuery = "INSERT INTO `users` ( `name`, `email`, `password`) VALUES ( '$full_name', '$email_address', '$password');";
            $insertionQueryRun = mysqli_query($connection, $insertionQuery);
            echo var_dump($insertionQueryRun);
            header("location:../login.php?acc=true");
        } else {
            header("location:../register.php?passmatch=false");
            exit();
        }
    }
} else {
    header("location:../register.php?method=false");
    exit();
}
