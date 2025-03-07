// import React, { useState } from 'react';
// import ProductList from './components/ProductList';
// import SearchBar from './components/SearchBar';
// import StoreFilter from './components/StoreFilter';
// import ProductForm from './components/ProductForm';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('');

//   return (
//     <div>
//       <SearchBar search={search} setSearch={setSearch} />
//       <StoreFilter filter={filter} setFilter={setFilter} />
//       <ProductForm onAdd={() => window.location.reload()} />
//       <ProductList search={search} filter={filter} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import StoreFilter from "./components/StoreFilter";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { getProducts } from "./services/productService";
import { Container } from "react-bootstrap";
import { Layout } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(getProducts());

  const refreshProducts = () => {
    setProducts(getProducts());
    setSelectedProduct(null);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <h2 style={{ color: "black", marginBottom: "20px" }}>
          🛒 Product Management Portal
        </h2>
      </Header>
      <Content className="site-layout" style={{ padding: "50px" }}>
        <Container className="mt-4">
          <SearchBar search={search} setSearch={setSearch} />
          <StoreFilter filter={filter} setFilter={setFilter} />
          <ProductForm selectedProduct={selectedProduct} onSave={refreshProducts} />
          <ProductList
            
            search={search}
            filter={filter}
            products={products}
            onEdit={setSelectedProduct}
            onDelete={refreshProducts}
          />
        </Container>
      </Content>
    </Layout>
  );
};

export default App;

