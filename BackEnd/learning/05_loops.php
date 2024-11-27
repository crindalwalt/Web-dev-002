<?php


echo '<h1>';
echo "loops in Php";
echo '</h1>';
/**
 * Loop => repitative code
 * 4 types
 *      for loop
 *      while loop
 *      do while loop
 *      foreach loop
 * 
 * 
 */

$friendsName = array("zaqota", "saim", "roman");
// echo $friendsName[2];



echo "<ul>";
// for($index = 0;$index < count($friendsName);$index++){


//     echo "<li>" . $friendsName[$index] . "</li>";









// }
// $index = 0;
// while($index < count($friendsName)){
//     // echo $friendsName[$index];
//     // echo "<br>";
//     echo "<li>$friendsName[$index]</li>";
//     $index++;
// }





$index = 0;
do {
    echo "<li>$friendsName[$index]</li>";
    $index++;
} while ($index < count($friendsName));

echo "</ul>";




