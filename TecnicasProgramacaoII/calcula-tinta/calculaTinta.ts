function calcularTinta(): void {
    const area = parseFloat(prompt("Digite a área em metros quadrados a ser pintada:") || "0");

    if (isNaN(area) || area <= 0) {
        console.log("Por favor, insira um valor válido para a área.");
        return;
    }

    const rendimento = 6;
    const litrosNecessarios = area / rendimento;

    const lataLitros = 18;
    const lataPreco = 80;

    const galaoLitros = 3.6;
    const galaoPreco = 25;

    let melhorPreco = Infinity;
    let melhorLatas = 0;
    let melhorGaloes = 0;

    for (let latas = 0; latas <= Math.ceil(litrosNecessarios / lataLitros); latas++) {
        let litrosRestantes = litrosNecessarios - latas * lataLitros;
        let galoes = litrosRestantes > 0 ? Math.ceil(litrosRestantes / galaoLitros) : 0;

        let precoTotal = latas * lataPreco + galoes * galaoPreco;

        if (precoTotal < melhorPreco) {
            melhorPreco = precoTotal;
            melhorLatas = latas;
            melhorGaloes = galoes;
        }
    }

    console.log(`Para pintar ${area}m² gastando o minimo possivel, compre:`);
    console.log(`- ${melhorLatas} lata(s) e ${melhorGaloes} galão(ões)`);
    console.log(`- Preço total: R$${melhorPreco.toFixed(2)}`);
}

calcularTinta();