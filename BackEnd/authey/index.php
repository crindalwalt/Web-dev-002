<?php
// check if user is logged in or not✅
session_start();
if (
    !isset($_SESSION['login']) &&
    $_SESSION['login'] != true
) {
    echo "you are not logedin";
    header("location: login.php?login=false");
    exit();
}


// notification space

$wrong_method = $_GET['method'];
$note_status = $_GET['note'];
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

    <?php
    if ($wrong_method == "wrong") {
        echo '<div class="container">
            <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
                <strong>❌ Error </strong> 
                Methods other then POST are not supported
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>';
    }

    if ($note_status == "saved") {
        echo '<div class="container">
            <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
                <strong>✅ Success </strong> 
                Note has been saved Successfully
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>';
    }

    if ($note_status == "failed") {
        echo '<div class="container">
            <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" >
                <strong>❌ Error </strong> 
                Note has not been saved Successfully
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>';
    }

    if ($note_status == "empty") {
        echo '<div class="container">
            <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert" >
                <strong>⚠️ Warning </strong> 
                Please fill out all the fields
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>';
    }

    ?>
    <!-- main Container -->
    <div class="container d-flex flex-column justify-content-between align-items-center p-4">
        <div class="my-5">
            <div class="display-5">Todo</div>
            <div class="lead">Add your todo items</div>
            <form action="backend/notes_handler.php" method="POST">
                <div class="my-3">
                    <div class="mb-2">
                        <label for="note">Write a note</label>
                        <input type="text" id="note" class="form-control" name="note" required>
                    </div>
                    <div class="mb-2">
                        <label for="priority">priority</label>
                        <select name="priority" id="priority" class="form-select" required>
                            <option value="null" selected>Choose task priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div class="my-2">
                        <button type="submit" class="btn btn-danger btn-sm">Add a Todo</button>
                    </div>
                </div>
            </form>

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