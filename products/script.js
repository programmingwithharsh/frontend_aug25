/*
    Call GET ALL PRODUCTS API "http://localhost:4000/api/products/"
    And update products variable
*/
let deleteProductId;
let products = [];

const getIdFromUrl = () => {
    let url = location.href;
    let urlArray = url.split("?");
    let id = urlArray[1];
    return id;
}

// load all Products
const loadProducts = () => {
    fetch('http://localhost:4000/api/products', {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {
            products = data;
            displayProducts();
        });
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

// Display Products in the table
const displayProducts = () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img width=50 height=80 src="${product.imageUrl}"/></td>
        <td>${product.productName}</td>
        <td>${product.productCode}</td>
        <td>${product.releaseDate}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.startRating}</td>
        <td><a href="./EditProduct.html?${product._id}">Edit</a>|
            <a data-bs-toggle="modal" onClick="storeDeleteId('${product._id}')" data-bs-target="#deleteModal" href="">Delete</a>
        </td>`
        tbody.appendChild(row);
    });
}

loadProducts();