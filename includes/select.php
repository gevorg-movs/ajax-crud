<?php
    include 'db.php';
    $data = $connection->query("SELECT * FROM userscrud")->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);