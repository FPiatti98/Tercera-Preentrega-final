const form = document.getElementById('registerForm');

form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const newUser = {};
    data.forEach((value, key) => {newUser[key]=value});
    fetch('/api/sessions/register', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result => {
        if(result.status === 201){
            result.json();
            alert("Usuario creado!")
            window.location.replace('/users/login')
        }else {
            alert("No se pudo crear el usuario!");
        }
    })
})