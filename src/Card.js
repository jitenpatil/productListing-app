import {Component} from 'react';
//import Index from './index.js';

export default class Card extends Component{
    state = {
        products:[],
      }
  
      componentDidMount(){
        fetch(`http://localhost:3004/products`)
        .then(response => response.json())
        .then(products => this.setState({ products: products }))
        
      }
  
      render(){
        return null;
      }
}
