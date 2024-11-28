<?php
$password_mismatched = $_GET['passmatch'];
$wrong_method = $_GET['method'];
$empty_fields = $_GET['emptyFields'];


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Here | Authey</title>
    <!-- Bootstrap links -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <script defer src="js/bootstrap.bundle.js"></script>
    <!-- Custom links -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <?php include "./partials/_navbar.php"; ?>
    <?php include "./backend/database_handler.php" ; ?>
    <?php

    if ($password_mismatched == "false") {
        echo '<div class="container">
        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
            <strong>Warning</strong> Password does not Matched, try again
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>';
    }

    if ($empty_fields == "true") {
        echo '<div class="container">
        <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert" >
            <strong>Warning</strong> 
            Input Fields are required.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>';
    }

    if ($wrong_method == "false") {
        echo '<div class="container">
        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
            <strong>Warning</strong> Methods other then POST in not supported
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>';
    }
    ?>

    <!-- main Container -->
    <div class="container d-flex justify-content-between align-items-center p-4">
        <div class="my-5">
            <div class="display-5">Register</div>
            <div class="lead">Create your Account Now</div>
        </div>
        <div class="forms bg-main p-3 rounded-3 w-50">
            <form action="backend/signup_handler.php" method="POST">
                <div class="my-3">
                    <label for="name">Enter your Name</label>
                    <input type="text" placeholder="e.g John Doe" class="form-control my-2" id="name" name="fullname">
                </div>
                <div class="my-4">
                    <label for="email">Enter your Email</label>
                    <input type="email" placeholder="e.g John@somemail.com" class="form-control my-2" id="email" name="email">
                </div>
                <div class="my-4">
                    <label for="pass1">Enter your Password</label>
                    <input type="password" placeholder="*********" class="form-control my-2" id="pass1" name="pass">
                </div>
                <div class="my-4">
                    <label for="pass2">Confirm your Password</label>
                    <input type="password" placeholder="*********" class="form-control my-2" id="pass2" name="pass2">
                </div>
                <div class="my-4">

                    <button type="submit" class="btn btn-main btn-md my-2"> Create Account</button>
                </div>
            </form>
        </div>
    </div>

</body>

</html>