var urlString = window.location.href;
var url = new URL(urlString);

var usuario1 = url.searchParams.get("user1");
var usuario2 = url.searchParams.get("user2");

document.getElementById('jogador1').innerHTML = usuario1;
document.getElementById('jogador2').innerHTML = usuario2;
fotoUsuario1 = document.getElementById('img_user1');
fotoUsuario2 = document.getElementById('img_user2');

getApi(usuario1);

function getApi(usersName) {
    var usuario = new XMLHttpRequest();
    var usuarioRepo = new XMLHttpRequest();

    usuario.open('GET', 'https://api.github.com/users/' + usersName, true);
    usuarioRepo.open('GET', 'https://api.github.com/users/' + usersName + '/repos', true);

    usuario.send();
    usuarioRepo.send();

    usuario.onreadystatechange = function () {
        if (usuario.readyState == 4 && usuario.status == 200) {
            usuarioRepo.onreadystatechange = function () {
                if (usuarioRepo.readyState == 4 && usuarioRepo.status == 200) {
                    var repositorio = JSON.parse(usuarioRepo.responseText);
                    var dados = JSON.parse(usuario.responseText);
                    getPoints(dados, repositorio);
                }
            }
        }

    }
}
function getPoints(dados, repositorio) {
    fotoUsuario1.setAttribute('src', dados.avatar_url);
    var countStar = 0;
    for (let i = 0; i < repositorio.length; i++) {

        let stars = repositorio[i].stargazers_count;
        countStar += stars;
    }
    var pontosRepos = dados.public_repos * 20
    var pontosSeguidores = dados.followers * 10;
    var pontosSeguindo = dados.following * 5;
    var pontosGists = dados.public_gists * 5;
    var bio = dados.bio;
    var total = pontosRepos + pontosSeguidores + pontosSeguindo + countStar + pontosGists;
    return escreve(pontosRepos, pontosSeguidores, pontosSeguindo, countStar, pontosGists, bio, total)
}


function escreve(pontosRepos, pontosSeguidores, pontosSeguindo, countStar, pontosGists, bio, total) {
    document.getElementById('public-repos1').innerHTML = pontosRepos;
    document.getElementById('seguidores1').innerHTML = pontosSeguidores;
    document.getElementById('seguindo1').innerHTML = pontosSeguindo;
    document.getElementById('estrelas1').innerHTML = countStar;
    document.getElementById('gists1').innerHTML = pontosGists
    if (bio === null) {
        document.getElementById('bio1').innerHTML = 0;
    }
    else {
        document.getElementById('bio1').innerHTML = bio.length;
    }
    document.getElementById('total1').innerHTML = total
}