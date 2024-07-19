// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
    helperTextUsuario.innerText = 'Carregando.......'

    //métado alternativo AJAX API
    //const resposta = fetch('https://random-data-api.com/api/v2/users')
   // console.log(resposta)
   // const tratamentoResposta = resposta.then((res) => {
       // console.log(res)
       // return res.json()
   // })
    
   // tratamentoResposta.then((data) => {
      //  console.log(data)
   // })

    fetch('https://random-data-api.com/api/v2/users')
        .then((res) =>res.json())
        .then((data) => {
            const usuario = document.createElement('div')
            usuario.innerHTML = `
                <img src="${data.avatar}" />
                <span><strong>Username:  </strong>${data.username}</span>
            `
            usuario.classList.add('usuario')
            usuariosContainer.appendChild(usuario)
            console.log(data)
            helperTextUsuario.innerText = ''
        })
        .catch((error) => {
            alert('Erro ao gerar usúario')
            helperTextUsuario.innerText = ''
        })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos

// 2. Funções

// 3. Eventos