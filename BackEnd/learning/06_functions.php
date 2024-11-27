<?php

echo "Functions in PHP";
/**
 * Functions are just reusable blocks
 * 2 parts 
 *  Function definition
 *  Function Call
 */


$name = "Shahzad";


// function greet ($nombre){
//     echo '<br>';
//     echo '<h1>';
//     echo "Hello $nombre";
//     echo '</h1>';
    
// }

// greet($name);
// greet("Sadaqat");
// greet("Baziad");



// function sum ($n1,$n2,$n3){
//     $sum = $n1 + $n2 + $n3;
//     echo $sum;
// }
// $age = 19;
// sum(12,24,$age);


function getPercentage ($obtain,$total=1200){
    $percentage = ($obtain/$total) * 100;
    return $percentage;
}


$result = getPercentage(1076,1100);
echo $result;


// function getGrades ($perc){
//     if($perc > 80){
//         echo "A Grade";
//     }else if($perc > 60 && $perc < 80){
//         echo "B Grade";
//     }else if($perc <50){
//         echo "C Grade";
//     }else{
//         echo "good job";
//     }

// }   


// getGrades($result);