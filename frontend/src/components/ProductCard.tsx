import React from 'react';

interface Product {
  title: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="col-md-3 pb-3">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer">
            <p className="card-text">Price: {product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
