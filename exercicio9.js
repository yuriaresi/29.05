var quantidade = 202;
var total;

if (quantidade < 12) {
    total = quantidade * 0.30;
}

else {
    total = quantidade * 0.25;
}

console.log(`Valor total da compra:R$ ${total.toFixed(2)}`);