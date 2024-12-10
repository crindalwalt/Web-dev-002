<?php

session_start();
if (
    !isset($_SESSION['login']) &&
    $_SESSION['login'] != true
) {
    echo "you are not logedin";
    header("location: login.php?login=false");
    exit();
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
    <!-- main Container -->
    <div class="container d-flex flex-column justify-content-between align-items-center p-4">
        <div class="my-5">
            <div class="display-5">Todo</div>
            <div class="lead">Add your todo items</div>
            <div class="my-2">
                <button class="btn btn-danger btn-lg">Add a Todo</button>
            </div>
        </div>
        <div class="forms bg-main p-3 rounded-3 w-50">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</body>

</html>