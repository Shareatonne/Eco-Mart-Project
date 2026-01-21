function searchProducts(){
    let searchTerm = document.getElementById("search-input").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach (product => {
        let productName = product.textContent.toLowerCase();
        if (product.include(searchTerm)) {
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    });
}