<?php

echo "you are about to be logout";

session_start();
session_reset();
session_destroy();
header("location: ../login.php?logout=true");
exit();



?>