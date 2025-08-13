/*
    Call GET ALL PRODUCTS API "http://localhost:4000/api/products/"
    And update products variable
*/
let deleteProductId;
let products = [];
let apiUrl = 'http://localhost:4000/api/products';

const getIdFromUrl = () => {
    let url = location.href;
    let urlArray = url.split("?");
    let id = urlArray[1];
    return id;
}

// load all Products
const loadProducts = () => {
    fetch(apiUrl, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {
            products = data; // assign response data to products array
            displayProducts();
        });
}

/*
    Call DELETE API http://localhost:4000/api/products/:id
    and refresh page
*/
const deleteProduct = () => {
    fetch(`${apiUrl}/${deleteProductId}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then(() => {
            alert(`Product Deleted Successfully`);
            window.location.href = "./ProductList.html"; // redirect to products page
        });
}

const storeDeleteId = (id) => {
    deleteProductId = id;
}

// GET Individual product based on id
const filterProductById = (id) => {
    // Filter products based on url id and display result in HTML Form value
    return fetch(`${apiUrl}/${id}`)
        .then((response) => response.json())
        .then((product) => {
            // Populate form data with product data
            document.getElementById("productName").value = product.productName;
            document.getElementById("productCode").value = product.productCode;
            document.getElementById("releaseDate").value = product.releaseDate;
            document.getElementById("description").value = product.description;
            document.getElementById("price").value = product.price;
            document.getElementById("starRating").value = product.starRating;
            document.getElementById("imageUrl").value = product.imageUrl;
        });
}

// PUT API Call, http://localhost:4000/api/products
const updateProduct = () => {
    const id = getIdFromUrl();
    let productName = document.getElementById("productName").value;
    let productCode = document.getElementById("productCode").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let starRating = document.getElementById("starRating").value;
    let imageUrl = document.getElementById("imageUrl").value;

    // Javascript Form validation
    if (productName === "") {
        alert("Please enter product name");
        return false;
    }

    let product = { productName, productCode, releaseDate, description, price, starRating, imageUrl };
    console.log(product);
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(() => {
            alert(`Product Updated Successfully`);
            window.location.href = "./ProductList.html"; // redirect to products page
        });
    return false;
}

const addProduct = () => {
    // Call POST API and update product
    let productName = document.getElementById("productName").value; // get value by id
    let productCode = document.getElementById("productCode").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let starRating = document.getElementById("starRating").value;
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
        "starRating": starRating,
        "imageUrl": imageUrl
    }

    addProductInDb(product);
    return false;
}

const addProductInDb = (product) => {
    console.log(product);
    // Call POST API "http://localhost:4000/api/products/" and send product

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(() => {
            alert(`Product Created Successfully`);
            window.location.href = "./ProductList.html"; // redirect to products page
        });
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
        <td>${product.starRating}</td>
        <td><a href="./EditProduct.html?${product._id}">Edit</a>|
            <a data-bs-toggle="modal" onClick="storeDeleteId('${product._id}')" data-bs-target="#deleteModal" href="">Delete</a>
        </td>`
        tbody.appendChild(row);
    });
}
