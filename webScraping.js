function extrairTabelaCorretaWikipedia() {

    const tabelaPrincipal = document.querySelector('.wikitable');
    const linhasDaTabela = tabelaPrincipal.querySelectorAll('tbody tr');
    const dadosFinais = [];

    for (let i = 0; i < linhasDaTabela.length; i++) {
        const linha = linhasDaTabela[i];
        const celulas = linha.querySelectorAll('td');
        
        if (celulas.length < 3) continue;
        
        const textoPrimeiraCelula = celulas[0]?.innerText.trim();
        const textoSegundaCelula = celulas[1]?.innerText.trim();
        
        if (textoPrimeiraCelula === 'Total') {
            const estado = {
                'Unidade Federativa': textoPrimeiraCelula,
                'População 2025 (est.)': celulas[1]?.innerText.trim(),
                'População 2022': celulas[2]?.innerText.trim()
            };
            dadosFinais.push(estado);
            continue;
        }
        
        if (!isNaN(textoPrimeiraCelula)) continue;
        
        if (!textoSegundaCelula.match(/\d/)) continue;

        const unidadeFederativa = textoPrimeiraCelula;
        const populacao2025 = celulas[1]?.innerText.trim();
        const populacao2022 = celulas[2]?.innerText.trim();
        
        const estado = {
            'Unidade Federativa': unidadeFederativa,
            'População 2025 (est.)': populacao2025,
            'População 2022': populacao2022
        };
        
        dadosFinais.push(estado);
    }

    console.table(dadosFinais);

    return dadosFinais;
}

// Roda a função
extrairTabelaCorretaWikipedia();