class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.edtId = null;
  }
  salvar() {
    let produto = this.lerDados();

    if (this.validaCampo(produto)) {
      if(this.edtId == null){
        this.adicionar(produto);
      }else{
        this.atualizar(this.edtId, produto);
      }
    }
    this.listaTabela();
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_telefone = tr.insertCell();
      let td_acoes = tr.insertCell();

      // td_id.innerText = this.arrayProdutos[i].id;
      // td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      // td_valor.innerText = this.arrayProdutos[i].preco;

      td_id.classList.add("center");
     
      let imgEdit = document.createElement("img");
      imgEdit.src = "../src/assets/images/escrever.png";
      imgEdit.setAttribute("onclick","produto.preparaEdicao(" + JSON.stringify( this.arrayProdutos[i])+ ")");


      let imgTrash = document.createElement("img");
      imgTrash.src = "../src/assets/images/trash.png";
      imgTrash.setAttribute("onclick","produto.deletar(" + this.arrayProdutos[i].id + ")");

      // td_acoes.appendChild(imgEdit);
      // td_acoes.appendChild(imgTrash);
    }
  }

  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  atualizar(id,produto){
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if(this.arrayProdutos[i].id == id){
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[i].preco = produto.preco;
        this.arrayProdutos[i].telefone = produto.telefone;
      }
    }
  }

  preparaEdicao(dados){
    this.edtId = dados.id;

    document.getElementById('produto').value = dados.nomeProduto;
    document.getElementById('preco').value = dados.preco;
    document.getElementById('telefone').value = dados.telefone;

    document.getElementById('btn1').innerText = 'Atualizar';
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.preco = document.getElementById("preco").value;
    produto.telefone = document.getElementById("telefone").value;
    

    return produto;
  }
  validaCampo(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      msg += "- Informe o nome do Produto\n";
    }
    if (produto.preco == "") {
      msg += "- Informe o preço do Produto\n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
  cancelar() {
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("telefone").value = "";

    document.getElementById('btn1').innerText = 'Salvar';
    this.edtId = null;
  }
  deletar(id) {
    if (confirm("Deseja realemente deletar o cliente com o código " + id + "?")) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}
var produto = new Produto();


