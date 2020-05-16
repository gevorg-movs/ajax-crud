<?php
    include 'db.php';
    $login = $_POST['login'];
    $password = $_POST['password'];
    if ($login != '' && $password != '') {
        $query = "INSERT INTO `userscrud` (`login`, `password`) VALUES (:login, :password)";
            $params = [
            ':login' => $login,
            ':password' => $password
            ];
        $stmt = $connection->prepare($query);
        $stmt->execute($params);
        $resultik = true;
    } else {
        $resultik = false;
    }    
    echo json_encode($resultik);