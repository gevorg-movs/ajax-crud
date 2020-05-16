<?php
    include 'db.php';   
   $id = $_POST['id'];
   $query = "SELECT * FROM `userscrud` WHERE `id` = ?";
   $params = [$id];
   $stmt = $connection->prepare($query);
   $stmt->execute($params);
   $resultik = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($resultik);