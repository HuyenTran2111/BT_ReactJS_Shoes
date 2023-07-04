import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { product, getDetailProduct, getProductAddCart } = this.props;
    return (
      <div className='col-sm-4 py-4'>
        <div className="card">
          <img className="card-img-top img-fluid" src={product.image} alt />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price} $</p>
            <button className='btn btn-dark mr-3' 
            onClick={() => {
              getProductAddCart(product);
            }}>Add to carts</button>
            <button className='btn btn-dark'
              data-toggle="modal"
              data-target="#modelId" onClick={() => {
                getDetailProduct(product);
              }}>Detail</button>
          </div>
        </div>
      </div>
    )
  }
}
