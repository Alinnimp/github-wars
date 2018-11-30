function mostrarVencedor(){
  var usuario1 = document.getElementById('user1').value;
  var usuario2 = document.getElementById('user2').value;
  var compararUsuarios = [];
  compararUsuarios.push(usuario1, usuario2);

  return getName(usuario1, usuario2);
}


function getName(usuario1, usuario2){
  if (usuario1 === userGit.name && usuario2 === userGit.nam){
    var fotoUsuario = document.createElement('img');
    fotoUsuario.setAttribute('src', userGit.avatar_url);
    fotoUsuario.setAttribute('style', 'height: 30px;')
    var resultado = document.getElementById('result');
    resultado.appendChild(fotoUsuario);
  }
}
