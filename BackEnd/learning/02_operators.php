<?php

/**
 * Operators that perform some action/operation 
 *  types
 *      1) Arithmatics operators (+,-,*,/,%)✅
 *      2) Camparison operators (<,>,<=,>=,==,===,!=)
 *      3) Assignment operators (=,+=,-=,*=,/=)
 *      4) Logical Operator (&&,||,!)
 */


$num1 = 34;
$num2 = 12;

# Arithmatic Operators
$result = $num1 + $num2;
$result = $num1 - $num2;
$result = $num1 * $num2;
$result = $num1 / $num2;
$result = $num1 % $num2;

$num1 = 34;
$num2 = 18;
$dob = "18";
# Camparison Operator
$result = $num1 < $num2;
$result = $num1 > $num2;
$result = $num1 <= $num2;
$result = $num2 >= $num2;
$result = $dob == $num2; // check only value not datatype
$result = $dob === $num2; // check datatype and value
$result  = $num1 != $num2;


# Assignment Operator


$designation = "CTO";
$salary = 1000;
echo '<h1>';
// echo var_dump($result);
echo $designation;
echo $salary;
echo '</h1>';
$designation = "CEO";
$salary = $salary + 50;
$salary += 100;
$salary -= 500;
$salary *= 2;
$salary /= 10;


echo '<h1>';
echo $designation;
echo $salary;
echo '</h1>';


# Logical Operator
$condition  = 12 < 34  && 22 == 22;
$condition  = 12 < 34  && 21 == 22;
$condition  = 12 > 34  && 21 == 22;


$condition  = 12 < 34  || 21 == 22;
// $condition  = 12 > 34  && 21 == 22;
// $condition  = 12 > 34  && 21 == 22;
echo var_dump($condition);
