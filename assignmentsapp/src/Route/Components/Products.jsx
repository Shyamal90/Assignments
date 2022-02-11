import React from 'react';
import data from '../data.json';

function Products() {
  return (
    <div>
      <h1>Product Section</h1>
      <div className="productsContainer">
        {
          data.map((product) => {
            return (
              <div className='product_container'>
                <div className="product_img">
                  <img src={product.image} alt="productImg" className='productImg' />
                </div>
                <div className="product_details">
                  <div className="product_title">
                    <h3>{product.title}</h3>
                  </div>

                  <div className="product_description">
                    <p>{product.description}</p>
                  </div>

                  <div className="product_price">
                    <h5>{product.price}</h5>
                  </div>

                  <div className="click">
                    <button>Click Here</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Products

