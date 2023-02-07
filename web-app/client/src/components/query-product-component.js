import React, { Component } from 'react'
import axios from "axios";

const Product = (props) => (
  <option key={props.product.ProductID} value={props.product.ProductID}>
     {props.product.Name}
  </option>
);


export class QueryProduct extends Component {
 

    constructor(props) {
      super(props);

    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      ProductId: "",
    };

      this.state = {
        role: sessionStorage.getItem('role'),
        usertype:sessionStorage.getItem('usertype'),
        products: [],
      };
    }
  
    componentDidMount() {

        const headers = {
            "x-access-token": sessionStorage.getItem("jwtToken"),
          };
          
          axios
              .get("http://localhost:8090/product/" + this.state.role, {
              headers: headers,
            })
            .then((response) => {
              console.log("response "+JSON.stringify(response))
              this.setState({
                products: response.data.data,
              });
            })
            .catch((error) => console.log(error));
    
      }


      CreateOrder(){
        return this.state.products.map((currentProduct) => {
          return (
            <Product
              product={currentProduct.Record}
              deleteProduct={this.deleteProduct}
              key={currentProduct.Key}
            />
          );
        });
      }


      onChangeProduct(e) {
        this.setState({
          ProductId: e.target.value,
        });
      }

      
      onSubmit(e){
        e.preventDefault();

        const role = sessionStorage.getItem("role");
        const headers = {
          "x-access-token": sessionStorage.getItem("jwtToken"),
        };

        axios.get("http://localhost:8090/product/" +  this.state.ProductId+"/"+ role,{
        headers: headers,
      })
        .then((response) => {
          console.log(response.data.data)
    
        })

      }


    render() { 
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Products: </label>
          <select
            ref="usertypeInput"
            required
            className="form-control"
            onChange={this.onChangeProduct}
          >
            <option value="">
              Select Product
            </option>
            {this.CreateOrder()}
          </select>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Order"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
    )
  }
}

export default QueryProduct
