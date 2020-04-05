
function displayRepos() {
    
    var inputElement = document.querySelector('body input');
    var listElement = document.querySelector('body ul');
    
    if (listElement.innerHTML != null) {
        listElement.innerHTML = '';
    }

    var user = inputElement.value;
    
    var item = document.createElement('li');
    item.innerText = 'Carregando...';
    listElement.appendChild(item);
    
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
            listElement.innerHTML = '';

            if (response.data.length === 0) {
                listElement.innerHTML = '';
                var listItem = document.createElement('li');
                listItem.innerText = 'O usuário informado não possui repositórios';
                listElement.appendChild(listItem);
            } else {
                for (var i = 0; i < response.data.length; i++) {
                    var listItem = document.createElement('li');
                    listItem.innerText = response.data[i].name;
                    listElement.appendChild(listItem);
                };
            }
        })
        .catch(function(error) {
            if (error.response.status === 404) {
                listElement.innerHTML = '';
                var listItem = document.createElement('li');
                listItem.innerText = 'O usuário informado não existe';
                listElement.appendChild(listItem);
            };
        });

    userName = inputElement.value;

    inputElement.value = '';
    inputElement.focus();

}

document.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {
        displayRepos();
    }

});
