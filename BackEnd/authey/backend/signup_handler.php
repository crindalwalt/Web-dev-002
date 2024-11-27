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

    if ($password == $confirm_password) {
        print_v("Password Matched");
    } else {
        header("location:../register.php?passmatch=false");
    }
} else {
    header("location:../register.php?method=false");
}


