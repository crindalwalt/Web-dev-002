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
    <?php include "./partials/_navbar.php"; ?>
    <!-- main Container -->
    <div class="container d-flex justify-content-between align-items-center p-4">
        <div class="my-5">
            <div class="display-5">Login</div>
            <div class="lead">Log into your Account Now</div>
        </div>
        <div class="forms bg-main p-3 rounded-3 w-50">
            
            <div class="my-4">
                <label for="email">Enter your Email</label>
                <input type="email" placeholder="e.g John@somemail.com" class="form-control my-2" id="email">
            </div>
            <div class="my-4">
                <label for="pass1">Enter your Password</label>
                <input type="password" placeholder="*********" class="form-control my-2" id="pass1">
            </div>
            
            <div class="my-4">
                
                <input type="submit"  class="btn btn-main btn-md my-2"  value="Login ">
            </div>
        </div>
    </div>



</body>

</html>