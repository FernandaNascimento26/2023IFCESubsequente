let opcao;
let valorTotal = 0;

console.log("Bem-vindo ao Restaurante!");

while (opcao !== 4) {
  console.log("MENU");
  console.log("1. Hambúrguer - R$ 15,00");
  console.log("2. Batata Frita - R$ 8,00");
  console.log("3. Refrigerante - R$ 5,00");
  console.log("4. Fechar pedido");
  
  opcao = parseInt(prompt("Digite uma opção: "));
  
  switch(opcao) {
    case 1:
      valorTotal += 15;
      console.log("Hambúrguer adicionado ao pedido.");
      break;
    case 2:
      valorTotal += 8;
      console.log("Batata Frita adicionada ao pedido.");
      break;
    case 3:
      valorTotal += 5;
      console.log("Refrigerante adicionado ao pedido.");
      break;
    case 4:
      console.log("Pedido fechado.");
      console.log("Valor total: R$ " + valorTotal.toFixed(2));
      break;
    default:
      console.log("Opção inválida, tente novamente.");
      break;
  }
}
