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
      {/* <div className="col-md-3 pb-3"> */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 flex flex-col">
        <div className="px-6 py-4">
          <h5 className="font-bold text-xl mb-2">{product.title}</h5>
          <p className="text-gray-700 text-base desc">{product.description}</p>
        </div>
        <div className="px-6 py-4 mt-auto">
          <p className="text-gray-700 text-base">Price: {product.price}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductCard;
