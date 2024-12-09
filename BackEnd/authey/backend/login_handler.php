<?php
// check if request method is correct or not✅
if ($_SERVER['REQUEST_METHOD'] == "POST") {

    //  check for the empty fields ✅
    if (empty($_POST["email"]) || empty($_POST["pass"])) {
        echo "empty fields, please fill the form now";
        exit();
    } else {
        // recieve form data✅
        $email = $_POST["email"];
        $pass = $_POST["pass"];
        

        // make database connection ✅
        require "./database_handler.php";
        $query = "SELECT * FROM `users` WHERE `users`.`email` = '$email';";
        $query_run = mysqli_query($connection,$query);

        // check whether result row arrived or not✅
        $num_rows = mysqli_num_rows($query_run);
        if($num_rows < 1){
            echo "account does not exist, please register ";
            header("location:../login.php?accexist=no");
            exit();
        }

        // check form password and database password✅
        $row_data = mysqli_fetch_assoc($query_run);
        $db_pass = $row_data["password"];
        if($pass != $db_pass){
            echo "Incorrect!, email or password";
            exit();
        }
        
        // start session for login user ✅
        session_start();
        $_SESSION['login'] = true;
        $_SESSION['username'] = $row_data['name'];
        $_SESSION['useremail'] = $row_data['email'];

        header("location:../index.php?login=true");
        



    }
} else {
    echo "methods other then post is not supported";
    exit();
}
