import React, { Component } from 'react'

export default class ModalDetail extends Component {

    renderModalDetail = () => {
        const { productDetail } = this.props;
            return (
                <tr key={productDetail.id}  >
                    <td>{productDetail.id}</td>
                    <td>{productDetail.name}</td>
                    <td>{productDetail.alias}</td>
                    <td>{productDetail.price}</td>
                    <td>{productDetail.description}</td>
                    <td>{productDetail.shortDescription}</td>
                    <td>{productDetail.quantity}</td>
                    <td>
                        <img src={productDetail.image} width={100} alt="" />
                    </td>
                </tr>

            )
        

        // return productDetail
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" 
                    style={{ maxWidth: "1000px" }}role="document">
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
                                            <th>Alias</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Short Description</th>
                                            <th>Quantity</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderModalDetail()}
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
