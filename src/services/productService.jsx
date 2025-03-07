
  // Generate Unique ProductId
  const generateProductId = () => `P${Date.now()}`;

  export const getProducts = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    return products;
  };
  
  export const createProduct = (product) => {
    const products = getProducts();
    product.productId = generateProductId();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  export const updateProduct = (id, updatedProduct) => {
    let products = getProducts();
    products = products.map((product) =>
      product.productId === id ? { ...updatedProduct, productId: id } : product
    );
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  export const deleteProduct = (id) => {
    let products = getProducts();
    products = products.filter((product) => product.productId !== id);
    localStorage.setItem("products", JSON.stringify(products));
  };
  