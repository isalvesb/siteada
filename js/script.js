document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");

  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
    alert("Prontinho! você receberá as novidades por email.")
  } else {
    alert("Por favor, preencha os campos nome e email!")
  }
}
