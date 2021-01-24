import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 function Card( {type} ){
   const [data, setData] = useState(null);
   useEffect(()=> {
     fetch(`http://localhost:3004/products/`)
     .then(response => response.json())
     .then(setData);
   }, []);
  
   if (data) {
    
         return <> 
         <div className = "card-container">
         {data.map((product, index) => (product.categoryId === parseInt(type)) ? 
         (
          <div className = "card" key = {index} onClick = {()=>saveCarddetails(product.id, product.categoryId)}>
           <img src = {product.imageUrl} alt = "img"/>
           <h3>{product.name}</h3>
          </div>):null
          )} 
          </div>
         </>; 
   }
     return null;
 }

 function saveCarddetails(Id, Category){
    console.log("clicked");
    localStorage.setItem("selectedCard", Id);
    localStorage.setItem("category", Category);
    
 }

class Dropdown extends Component {
    
    state = {
      categories:[],
      selectedCardType:1
      
    }

    componentDidMount(){
      fetch(`http://localhost:3004/categories`)
      .then(response => response.json())
      .then(categories => this.setState({ categories: categories}))
      
    }

    render(){
      return (
      <>
      <h1 id ="heading">Product Listing Page</h1>
      <div className = "dropdown">
                <label id = "label">Category</label>
                <select id = "category" defaultValue = {1} onChange = {e => this.setState({selectedCardType: e.target.value})}>
                  {this.state.categories.map(category => <option key = {category.id} value = {category.id}>{category.name}</option>)}  
                </select>
      </div>
      <div>
        <Card type  = {this.state.selectedCardType}/>
      </div>
      </>);

    }
}

function App() {
  return (
    <>
      	<Dropdown />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


