<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AJAX CRUD by Gevorg Movsisyan</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <?php require 'includes/db.php'; ?>
</head>
<body>    
    <div id="info" class="container">
    <h1 class="text-center mb-4 mt-5 border-bottom border-grey pb-4">AJAX CRUD by Gevorg Movsisyan</h1>
        <div class="row mb-4 font-weight-bold">
                <div class="col-md-3 border border-danger text-center pb-2 pt-2 pr-2 mr-2 ml-2">ID</div>
                <div class="col-md-3 border border-danger text-center pb-2 pt-2 pr-2 mr-2 ml-2">Login</div>
                <div class="col-md-3 border border-danger text-center pb-2 pt-2 pr-2 mr-2 ml-2">Password</div>
                <div class="col-md-2 border border-danger text-center pb-2 pt-2 pr-2 mr-2 ml-2">Delete/edit</div>
        </div>
        <div class="info-content"></div>
        <!-- Добавить запись -->
        <div class="row mt-2 pt-3">
            <div class="col-md-4 offset-md-1">
                <h3 class="text-center font-weight-bold">Add Material</h3>
                <form id="add-form">
                    <div class="input-group mb-3">
                        <input name="login" id="login" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <input name="password" id="password" type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" id="add-button" class="btn btn-success">Add</button>
                    </div>   
                </form>            
            </div>
            <div class="col-md-4 offset-md-1">
            <h3 class="text-center font-weight-bold">Edit Material - ID: <span id="id-for-edit"></span></h3>
            <form id="edit-form">                
                <div class="input-group mb-3">
                    <input name="login" id="login-edit" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <input name="password" id="password-edit" type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" id="edit-button" class="btn btn-primary">Edit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    <script src="script/ajax.js"></script>
    <script src="script/script.js"></script>
</body>
</html>