const login = document.querySelector('#login'),
      password = document.querySelector('#password'),
      loginEdit = document.querySelector('#login-edit'),
      passwordEdit = document.querySelector('#password-edit'),
      idForEdit = document.querySelector('#id-for-edit'),
      rowForContent = document.querySelector('.info-content'),
      refresh = document.querySelector('.refresh'),
      addForm = document.querySelector('#add-form');
      editForm = document.querySelector('#edit-form');
    
// Получаем и отображаем данные из БД при загрузке страницы
ajaxGet('/includes/select.php', 'POST', Update);

 function Update(operation) {
        rowForContent.textContent = '';
        operation = JSON.parse(operation);
        addListItem = (operation) => {        
  const newElement = document.createElement('div')
        newElement.classList.add('row');
        newElement.classList.add('mb-3');
        newElement.innerHTML = `
        <div class="col-md-3 pb-1 pr-2 mr-2 ml-2 border-bottom border-success text-center">${operation.id}</div>
        <div class="col-md-3 pb-1 pr-2 mr-2 ml-2 border-bottom border-success text-center">${operation.login}</div>
        <div class="col-md-3 pb-1 pr-2 mr-2 ml-2 border-bottom border-success text-center">${operation.password}</div>
        <div class="col-md-2 pb-1 pr-2 mr-2 ml-2 border-bottom border-success text-center">
            <button id="btn-delete" data-id="${operation.id}" class="btn-delete btn btn-danger">delete</button>
            <button id="btn-edit" data-id="${operation.id}" class="btn-edit btn btn-primary">edit</button>
        </div>  `
     rowForContent.append(newElement);
     };
    operation.forEach(addListItem);
}

// Добавление новых материалов
addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if(login.value == '') { 
        login.style.borderColor = 'red'; 
    }
    else if(password.value == '') {
         password.style.borderColor = 'red'; 
        }
    else {
        let date = { 
            "login": login.value,
            "password": password.value
        };
        ajaxSend('/includes/add.php', 'POST', Console, date);
        login.value = '';
        password.value = '';
        login.style.borderColor = '';
        password.style.borderColor = '';
    }    
})

function Console (item) {
    if (item == 'true') {
        ajaxGet('/includes/select.php', 'POST', Update);
        login.value = '';
        password.value = '';
    } 
}

// Удаление материалов
 rowForContent.addEventListener('click', function (event) {
    if(event.target.classList.contains('btn-delete')) {
        let id = event.target.dataset.id;
            xhttp = new XMLHttpRequest();
            xhttp.open('POST', '/includes/delete.php');
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`id=${id}`);            
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    ajaxGet('/includes/select.php', 'POST', Update);
            }
        }
     };
 })

//  Получение информации материала для изменения
rowForContent.addEventListener('click', function (event) {
    if(event.target.classList.contains('btn-edit')) {
        let id = event.target.dataset.id;   
            xhttp = new XMLHttpRequest();
            xhttp.open('POST', '/includes/edit.php');
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`id=${id}`);
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let otvet = JSON.parse(this.response);                  
                        loginEdit.value = otvet.login;
                        passwordEdit.value = otvet.password;
                        idForEdit.textContent = otvet.id;
            }
        }
     }
 });


 // Редактирование материалов
editForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (loginEdit.value == '' || passwordEdit.value == '') {
        loginEdit.style.borderColor = 'red';
        passwordEdit.style.borderColor = 'red';
    } else {
        let date = { 
            "id": idForEdit.textContent,
            "login": loginEdit.value,
            "password": passwordEdit.value
        };
        ajaxSend('/includes/update.php', 'POST', Console, date);
        loginEdit.value = '';
        passwordEdit.value = '';
        idForEdit.textContent = '';
    }
})

function Console (item) { 
    if (item == 'true') {
        ajaxGet('/includes/select.php', 'POST', Update);        
    }    
}

