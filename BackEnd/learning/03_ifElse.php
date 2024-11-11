<?php


echo "hello world";


/**
 * If Else => decision making
 * 
 */

 echo "<br>";
 $age = 24;
 $isMarried = false;
 if ($age < 30) {
     echo "focus on career";
     echo "<br>";
     if($isMarried){
         echo "nice choice! marrying early";
     }else{
         echo "you should get married";
     }
 } else if ($age >= 30 && $age <= 50) {
     echo "focus on scaling businesses";
     echo "<br>";
 } else if ($age > 50) {
     echo "focus on family legacy";
     echo "<br>";
 } else {
     echo "focus on sustainabilty";
     echo "<br>";
 }
 