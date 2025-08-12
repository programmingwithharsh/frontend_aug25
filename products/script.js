/*
    Call GET ALL PRODUCTS API "http://localhost:4000/api/products/"
    And update products variable
*/
let deleteProductId;

const getIdFromUrl = () => {
    let url = location.href;
    let urlArray = url.split("?");
    let id = urlArray[1];
    return id;
}

// load all Products
const loadProducts = () => {
}

/*
    Call DELETE API http://localhost:4000/api/products/:id
    and refresh page
*/
const deleteProduct = () => {
    alert(deleteProductId);
}

const storeDeleteId = (id) => {
    deleteProductId = id;
}

// GET Individual product based on id
const filterProductById = (id) => {
    // Filter products based on url id and display result in HTML Form value
}

// PUT API Call, http://localhost:4000/api/products
const updateProduct = (id) => {
    return true
}

const addProduct = () => {
    // Call POST API and update product
    let productName = document.getElementById("productName").value; // get value by id
    let productCode = document.getElementById("productCode").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let startRating = document.getElementById("startRating").value;
    let imageUrl = document.getElementById("imageUrl").value;

    // Javascript Form validation
    if (productName === "") {
        alert("Please enter product name");
        return false;
    }

    let product = {
        "productName": productName,
        "productCode": productCode,
        "releaseDate": releaseDate,
        "description": description,
        "price": price,
        "startRating": startRating,
        "imageUrl": imageUrl
    }

    addProductInDb(product);
    return false;
}

const addProductInDb = (product) => {
    console.log(product);
    // Call POST API "http://localhost:4000/api/products/" and send product
}