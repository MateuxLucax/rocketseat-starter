function checaIdade(idade) {
    // Retornar uma promise

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade >= 18) {
                resolve('Maior que 18');
            } else {
                resolve('Menor que 18')
            }
        }, 2000);
    });
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });