import React, { Component } from 'react';
import ProductList from './productList';
import Modal from './modalCart';
import ModalDetail from './modalDetail';
import data from './data.json';


export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: {
        "id": "",
        "name": "",
        "alias": "",
        "price": 0,
        "description": "",
        "shortDescription": "",
        "quantity": 0,
        "image": ""
      },
      listCart: [],
    };
  }

  // Detail
  handleDetailProduct = (product) => {
    console.log(product);
    this.setState({
      productDetail: product,
    });
  };

  // Find Index
  _findIndex = (id) => {
    const index = this.state.listCart.findIndex((product) => {
      return product.id === id
    });
    return index;
  };

  // Add Cart
  handleAddCard = (product) => {
    const index = this._findIndex(product.id);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      listCart[index].numberOfProduct += 1;
    } else {
      const productAddCart = {
        id: product.id,
        name: product.name,
        image: product.image,
        numberOfProduct: 1,
        price: product.price,
      };
      listCart.push(productAddCart);
    }
    this.setState({
      listCart,
    })
  };

  // Delete
  handleDeleteProduct = (id) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(id);
    if (index !== -1) {
      listCartClone.splice(index, 1);
      this.setState({
        listCart: listCartClone,
      });
    };
  };

  // Update
  handleUpdateQuantity = (id, isPlus) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(id);
    if (index !== -1) {
      if (isPlus) {
        listCartClone[index].numberOfProduct += 1;

      } else {
        if (listCartClone[index].numberOfProduct > 1) {
          listCartClone[index].numberOfProduct -= 1;
        }

      }
      this.setState({
        listCart: listCartClone,
      });
    }

  };

  // Total Quantity
  totalQuantity = () => {
    return this.state.listCart.reduce((total, product) => {
      return total += product.numberOfProduct;
    }, 0)
  }

  render() {
    const { listProduct, productDetail, listCart } = this.state;
    return (
      <div>
        <p className='text-center py-4 text-secondary p'>Shoes Store</p>
        <div className="container text-right">
          <button className='btn btn-danger px-5 my-3 cart '
            data-toggle="modal"
            data-target="#model" >
            Cart ({this.totalQuantity()})
          </button>
        </div>
        <ProductList listProduct={listProduct}
          getDetailProduct={this.handleDetailProduct}
          getProductAddCart={this.handleAddCard} />
        <Modal listCart={listCart}
        getDeleteProduct={this.handleDeleteProduct}
        getUpdateProduct={this.handleUpdateQuantity}
        />
        <ModalDetail productDetail={productDetail} />
      </div>
    )
  }
}
