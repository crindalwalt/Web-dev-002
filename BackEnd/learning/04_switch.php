<?php

echo "<h1>Switch Case</h1><br><hr>";


$age = 26;
$name = "Usama";
$name = "Shahzad";
$name = strtolower($name);


// switch ($age) {
//     case 18:
//         echo "you are 18 years old and you should  have a vision";
//         break;
//     case 22:
//         echo "you should be working on you vision and have a roadmap or plan";
//         break;
//     case 26:
//         echo "you should be eating your lunch in your Rolls Royce on the way to your mother house";strtolower($name);
//         break;
//     default:
//         echo "keep grinding";
//         break;
// }


switch ($name) {
    case "usama":
        echo "visa not allowed bhai ";
        break;
    case "ahmed":
        echo "tum ko qareeb bhi na bhatakna";
        break;
    case "shahzad":
        echo "ap aa jao sir";
        break;
    default:
        echo "allowed";
        break;
}
