let base = document.querySelector('.base');
let btn = document.querySelector('#addBtn');
let delBtn = document.querySelector('#del')



btn.addEventListener('click',()=>{
    base.style.display = 'flex';
    fetch("https://dummyjson.com/products").then((response)=>{
    return response.json();
    })
    .then((data)=>{
        data.products.forEach(product => {
        let card = document.createElement("div"); 
                    card.classList.add("product");

                    card.innerHTML = `
                         <div><img src="${product.images}" alt="" width="250"></div>
                        <h3>ID: ${product.id}</h3>
                        <h2>${product.title}</h2>
                        <p>Category: ${product.category}</p>
                    `;

                    base.appendChild(card);

            });

        })
        .catch(error => console.log(error));

});

delBtn.addEventListener('click',()=>{
    base.style.display = 'none';
});
