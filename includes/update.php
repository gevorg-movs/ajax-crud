<?php
    include 'db.php';
    $id = $_POST['id'];
    $login = $_POST['login'];
    $password = $_POST['password'];
    if ($login != '' && $password != '') {
        $query = "UPDATE `userscrud` SET `login` = :login,  `password` = :password WHERE `id` = :id";
            $params = [
            ':id' => $id,
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