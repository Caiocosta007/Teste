function mostrarResposta() {
  document.getElementById("resposta").style.display = "block";
  document.getElementById("resposta").innerHTML = "Te amo!";
  document.getElementById("no").style.display = "none";
}

function mudarPosicao() {
  const buttonNao = document.getElementById("no");
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  buttonNao.style.left = `${randomX}px`;
  buttonNao.style.top = `${randomY}px`;
}
