function mostrarVencedor(){
  var usuario1 = document.getElementById('usuario-1').value;
  var usuario2 = document.getElementById('usuario-2').value;
  var compararUsuarios = [];
  compararUsuarios.push(usuario1, usuario2);
  console.log(compararUsuarios);
  return getName(usuario1, usuario2);
}


function getName(usuario1, usuario2){
  if (usuario1 === userGit.name){
    var fotoUsuario = document.createElement('img');
    fotoUsuario.setAttribute('src', userGit.avatar_url);
    fotoUsuario.setAttribute('style', 'height: 30px;')
    var resultado = document.getElementById('result');
    resultado.appendChild(fotoUsuario);
  }
}
