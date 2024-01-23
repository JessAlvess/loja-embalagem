fetch("../produtos/lista.json").then((response) => {
    response.json().then((produtos) => {
        produtos.produtos.map((produtos) => {
            // adicione os produtos dentro dos cards
            console.log(produtos);
        })
    })
})
