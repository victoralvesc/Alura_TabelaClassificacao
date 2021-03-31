const victor = {
  foto: '<img src="https://logosave.com/images/large/7/Vasco-Da-Gama-vector-logo-logo.png">',
  nome: "Victor",
  vitorias: 2,
  empates: 5,
  derrotas: 1
}
const nathalia = {
  foto: '<img src="https://revistajardins.pt/wp-content/uploads/2018/10/01-Ficus-macrophylla-29.11.16.jpg">',
  nome: "Nathalia",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

nathalia.pontos = calculaPontos(nathalia)
victor.pontos = calculaPontos(victor)

function calculaPontos(jogador) {
  const pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

const jogadores = [nathalia, victor]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  let html = ""
  for (let i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].foto + "</td>" 
    html += "<td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button  onClick='adicionarVitoria(" + i + ")'id='botoes'>Vitória</button></td>"
    html += "<td><button  onClick='adicionarEmpate(" + i + ")'id='botoes'>Empate</button></td>"
    html += "<td><button  onClick='adicionarDerrota(" + i + ")'id='botoes'>Derrota</button></td>"
    html += "<td><button  onClick='removerJogador(" + i + ")'id='botoes'>Remover Usuários</button></td>"
   
  }
  const tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarJogador() {
  var foto = "";
  var nome = "";
  var nomeJogador = document.querySelector("#novoJogador").value;
  var fotoJogador = document.querySelector("#fotoJogador").value;
  nome = nomeJogador;
  foto = fotoJogador;
  if (
    foto.endsWith(".jpg") |
    foto.endsWith(".jpeg") |
    foto.endsWith(".gif") |
    foto.endsWith(".svg") |
    foto.endsWith(".png") |
    foto.endsWith("/image")
  ) {
    if (nome != "") {
      var novoJogador = {
        nome: nome,
        foto: foto,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
      };
      jogadores.push(novoJogador);
      exibirJogadoresNaTela(jogadores);
    } else {
      alert("Insira um nome de jogador");
    }
  } else {
    alert("Formato da foto está Invalido");
  }
  if (foto != "") {
    document.getElementById("novoJogador").value = "";
  }
  if (nome != "") {
    document.getElementById("fotoJogador").value = "";
  }

}


function adicionarVitoria(i) {
  const jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  const jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  const jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}
function removerJogador(i) {
  jogadores.splice(i, 1);
  exibirJogadoresNaTela(jogadores)
}


