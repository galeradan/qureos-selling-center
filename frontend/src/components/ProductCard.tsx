import React from 'react'



interface product{
	title: string;
	description: string;
	price: number;
}

interface Props{
    product: product;
}

const ProductCard: React.FC<Props> = ({product}) =>{
	
	return(
			<React.Fragment>
                <div className="col-md-3 pb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.title}
                            </h5>
                            <p className="card-text">
                                {product.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">Price: {product.price}</p>
                        </div>
                    </div>	
                </div>
			
			</React.Fragment>
		);
}

export default ProductCard