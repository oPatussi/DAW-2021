import { Product } from '../../@types';

import './style.css';

type ProductsProp ={
  items: Array<Product>
}


export function Produtos(props: ProductsProp){
    return(
        <div className="products">
            <ul>
                {props.items.map(products => {
                    return (
                        <div className="card">
                            <img src={`assets/images/${products.photos}`}/>
                            <div className="card-body">
                                <h5>{products.name}</h5>
                                <div className="details">
                                    <div className="star-rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                    <div className="price">
                                        <h3>{products.price}</h3>
                                        <p>10 x R${products.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
          </div>

    )
}