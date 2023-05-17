let miboton = document.getElementById('logOut')

miboton.addEventListener('click', e => {


    const url = '/api/auth/logout'
    const method = 'GET'
    fetch(url, {
        method,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})