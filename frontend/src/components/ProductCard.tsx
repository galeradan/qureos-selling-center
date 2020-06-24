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
                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-header">
                            <p className="card-title">{product.title}</p>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>	
                </div>
			
			</React.Fragment>
		);
}

export default ProductCard