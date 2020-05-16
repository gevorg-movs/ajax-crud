<?php
    include 'db.php';   
   $id = $_POST['id'];
   $query = "DELETE FROM `userscrud` WHERE `id` = ?";
   $params = [$id];
   $stmt = $connection->prepare($query);
   $stmt->execute($params);
   $resultik = 'deleted';   
    echo json_encode($resultik);