import React, { Component } from 'react'

export default class Modal extends Component {
  renderListCart = () => {
    const { listCart, getDeleteProduct, getUpdateProduct } = this.props;
    return listCart.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img src={product.image} width={70} alt="" />
          </td>
          <td>
            <button onClick={() => {
              getUpdateProduct(product.id, false);
            }}>-</button>
            {product.numberOfProduct}
            <button onClick={() => {
              getUpdateProduct(product.id, true);
            }}>+</button>
          </td>
          <td>{product.price}</td>
          <td>{product.numberOfProduct * product.price}</td>
          <td>
            <button className="btn btn-danger"
              onClick={() => { getDeleteProduct(product.id) }}>Delete</button>
          </td>
        </tr>

      )
    })
  }
  render() {
    return (
      <div>
        <div className="modal fade" id="model" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog"
            style={{ maxWidth: "1000px" }} role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Detail Product</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Number of Product</th>
                      <th>Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderListCart()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Send message</button> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}