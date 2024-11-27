<?php
$title  = "Loops in PHP";

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>


    <title><?php echo $title  ?></title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            height: 100vh;
            background-color: #333333;
            padding: 2rem;
        }
    </style>
</head>
<?php



$students = [
    [
        'roll_number' => '1001',
        'name' => 'Aliya Khan',
        'age' => 17,
        'grade' => '12th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1002',
        'name' => 'Aamir Shah',
        'age' => 16,
        'grade' => '11th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1003',
        'name' => 'Areeb Abbas',
        'age' => 18,
        'grade' => '12th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1004',
        'name' => 'Sania Ahmed',
        'age' => 17,
        'grade' => '11th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1005',
        'name' => 'Tariq Ali',
        'age' => 15,
        'grade' => '10th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1006',
        'name' => 'Zara Farooq',
        'age' => 16,
        'grade' => '11th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1007',
        'name' => 'Asad Qureshi',
        'age' => 18,
        'grade' => '12th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1008',
        'name' => 'Noor Bano',
        'age' => 16,
        'grade' => '11th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1009',
        'name' => 'Haris Raza',
        'age' => 17,
        'grade' => '12th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1010',
        'name' => 'Faiza Iqbal',
        'age' => 15,
        'grade' => '10th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1011',
        'name' => 'Irfan Javed',
        'age' => 17,
        'grade' => '11th',
        'gender' => 'Male',
    ],
    [
        'roll_number' => '1012',
        'name' => 'Samiya Tariq',
        'age' => 16,
        'grade' => '10th',
        'gender' => 'Female',
    ],
    [
        'roll_number' => '1068',
        'name' => 'Shahzad Farooq',
        'age' => 21,
        'grade' => '14th',
        'gender' => 'Male',
    ],
];

?>

<body>
    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Roll #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Grades</th>
                </tr>
            </thead>
            <tbody>
                <?php

                $index = 0;
                while ($index < count($students)) {
                    $color = "bg-primary";
                    $element = $students[$index];
                    if($element["gender"] == "Female"){
                        $color = "bg-danger";
                    }

                    echo '<tr>
                            <th>'. $element["roll_number"] .'</th>
                            <td>'.$element["name"] .'</td>
                            <td><span class="badge rounded-pill '.$color.'">'.$element["gender"] .'</span></td>
                            <td>'.$element["age"] .'</td>
                            <td>'.$element["grade"] .'</td>
                        </tr>';
                    $index++;
                }


                ?>


            </tbody>
        </table>
    </div>
</body>

</html>