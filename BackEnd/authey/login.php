<?php
$account_success = $_GET['acc'];
$account_exist = $_GET['accexist'];
$account_logout = $_GET['logout'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Here | Authey</title>
    <!-- Bootstrap links -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <script defer src="js/bootstrap.bundle.js"></script>
    <!-- Custom links -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php 
    include "./partials/_navbar.php";
     ?>
    <?php

    if ($account_success == "true") {
        echo '<div class="container">
                <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
                    <strong>Success</strong> 
                    Your account has been created. please login here
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>';
    }

    if ($account_logout == "true") {
        echo '<div class="container">
                <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert" >
                    <strong>Logout</strong> 
                    Your account has been logout.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>';
    }

    if ($account_exist == "no") {
        echo '<div class="container">
                <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
                    <strong>Warning</strong> 
                    No Account is associated with this email 😡. please create an account
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>';
    }

    ?>
    <!-- main Container -->
    <div class="container d-flex justify-content-between align-items-center p-4">
        <div class="my-5">
            <div class="display-5">Login</div>
            <div class="lead">Log into your Account Now</div>
        </div>
        <div class="forms bg-main p-3 rounded-3 w-50">

            <form action="backend/login_handler.php" method="POST" >
                <div class="my-4">
                    <label for="email">Enter your Email</label>
                    <input type="email" placeholder="e.g John@somemail.com" class="form-control my-2" id="email" name="email">
                </div>
                <div class="my-4">
                    <label for="pass1">Enter your Password</label>
                    <input type="password" placeholder="*********" class="form-control my-2" id="pass1" name="pass">
                </div>

                <div class="my-4">
                    <input type="submit" class="btn btn-main btn-md my-2" value="Login ">
                </div>
            </form>
        </div>
    </div>



</body>

</html>