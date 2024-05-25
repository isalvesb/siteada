document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  var nome=document.getElementById("nome");
  var email=document.getElementById("email");
  var telefone=document.getElementById("telefone");
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""       && document.getElementById("telefone").value != ""){
   alert("Prontinho! você receberá as novidades por email.") 
  }else{
   alert("Por favor, preencha os campos nome e email!")
  }
}
