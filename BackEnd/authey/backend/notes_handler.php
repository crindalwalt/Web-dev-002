<?php
// check the request method ✅
if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // check for empty fields  ✅
    if (
        empty($_POST['note']) ||
        empty($_POST['priority'])

    ) {
        // error notification
        header("location:../index.php?note=empty");
        exit();
    }



    // recieve the form data ✅
    $note = $_POST['note'];
    $priority = $_POST['priority'];





    // require database ✅
    require "database_handler.php";
    session_start();
    $user_id = $_SESSION['user_id'];



    // run insertion query ✅
    $add_note = "INSERT INTO `notes` ( `note`, `priority`, `status`, `user_id`) VALUES ( '$note', '$priority', '0', '$user_id');";
    $run_add_note = mysqli_query($connection, $add_note);


    // redirect back with notification ✅
    if ($run_add_note) {
        // success notification ✅
        echo "saved successfully ";
        header("location:../index.php?note=saved");
    } else {
        // error notification ✅
        header("location:../index.php?note=failed");
        exit();
    }
} else {
    // error notification ✅
    header("location:../index.php?method=wrong");
    exit();
}
