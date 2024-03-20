import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import { ButtonFooter, CardContent } from '../components';

function ProductList({
  handleDeleteProduct,
  handleSelectProduct,
  products = [],
}) {
  console.log(products);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  function selectProduct(e) {
    const product = getSelectedProduct(e);
    handleSelectProduct(product);
    navigate(`/products/${product.id}`); // Replace history.push with navigate
  }

  function deleteProduct(e) {
    const product = getSelectedProduct(e);
    handleDeleteProduct(product);
  }

  function getSelectedProduct(e) {
    const index = +e.currentTarget.dataset.index;
    return products[index];
  }

  return (
    <div>
      {products && products.length === 0 && <div>Loading data ...</div>}
      <ul className="list">
        {products && products.map((product, index) => (
          <li key={product.id} role="presentation">
            <div className="card">
              <CardContent
                name={product.name}
                description={product.description}
              />
              <footer className="card-footer">
                <ButtonFooter
                  className="delete-item"
                  iconClasses="fas fa-trash"
                  onClick={(e) => deleteProduct(e)}
                  label="Delete"
                  dataIndex={index}
                  dataId={product.id}
                />
                <ButtonFooter
                  className="edit-item"
                  iconClasses="fas fa-edit"
                  onClick={(e) => selectProduct(e)}
                  label="Edit"
                  dataIndex={index}
                  dataId={product.id}
                />
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
