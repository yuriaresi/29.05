var totaldacompra = 149.95;
var parcelas = 3;
var valordaparcela = (totaldacompra / parcelas).toFixed(2);

document.write(`O valor total da compra foi R$ ${totaldacompra} <br>
Forma de pagamento ${parcelas}x de R$ ${valordaparcela} `);