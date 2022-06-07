  var simular = document.getElementById("btn1");
  var valor = document.getElementById("valor");
  var taxa = document.getElementById("taxa");
  var nPrestacao = document.getElementById("nPrestacao");
  
simular.onclick = function simular(){
  var test = (1000*0.06) + (1000/12);
  document.getElementById("resultado").innerHTML = test;
}