async function inserirCards() {

const response = await fetch("../produtos/lista.json");
const listaJson = await response.json();
const lista = listaJson.produtos;

let row = document.querySelector("#cardsRow");


for (let index = 0; index < lista.length; index += 1) {
   
    
    let colDiv = document.createElement("div");
    colDiv.classList.add("col");
    row.appendChild(colDiv);    

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.style.width = "18rem";
    cardDiv.classList.add("h-100");;
    colDiv.appendChild(cardDiv);
    
    let img = document.createElement("img");
    img.src = `https://picsum.photos/200/150?random=${index}`;
    img.classList.add("card-img-top");
    img.alt = `${lista.nome}`;
    cardDiv.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.height = "150px";
    cardDiv.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = `${lista[index].nome}`;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = `${lista[index].descricao}`;
    cardBody.appendChild(cardText);

    let listGroup = document.createElement("ul");
    listGroup.classList.add("list-group");
    listGroup.classList.add("list-group-flush");
    listGroup.classList.add("align-items-center");
    cardDiv.appendChild(listGroup);

    let listGroupItem = document.createElement("li");
    listGroupItem.classList.add("list-group-item");
    listGroupItem.innerText = `R$ ${lista[index].preco}`;
    listGroup.appendChild(listGroupItem);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("card-body");
    buttonsDiv.classList.add("d-flex");
    buttonsDiv.classList.add("justify-content-center");
    buttonsDiv.style.height = "80px";
    cardDiv.appendChild(buttonsDiv);

    let button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("btn-lg");
    button.style.height = "2.5em";
    button.innerText = "Adicionar à cesta";
    buttonsDiv.appendChild(button);

    row.appendChild(colDiv);
<<<<<<< HEAD
}
}
=======



}

}

>>>>>>> 02134f336f3a30fb74bd5631579b5f00f72a75c1
inserirCards();