import React, {Component} from 'react';

export default class Product extends Component{
    state = {
        selectedProduct:[]
      }
  
      componentDidMount(){
        fetch(`http://localhost:3004/productDetails`)
        .then(response => response.json())
        .then(productDetails => this.setState({ selectedProduct: productDetails}))
        
      }
      
      render(){
        return <div>
                    <h1>{this.state.selectedProduct.name}</h1>
                    <p>{this.state.selectedProduct.description}</p>
               </div>;
      }
}