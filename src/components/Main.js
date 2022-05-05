import React, {Component} from 'react'

class Main extends Component{
    
    render(){
        return (
            <div className="col-md-6 p-2">
                <form className="form-group mb-5" onSubmit={(event) =>{
                    event.preventDefault()
                    const name = this.productName.value
                    const price = window.web3.utils.toWei(this.productPrice.value.toString(),'Ether')
                    this.props.create_product(name,price)
                }}>
                    <h3 className="text-secondary">Add Product</h3>
                    <label  className="form-label">Product name</label>
                    <input type="text" ref={(input) => this.productName = input} className="form-control"  required />
                    <label  className="form-label">Product price</label>
                    <input type="number" ref={(input) => this.productPrice = input} className="form-control" required />
                  <div className="mt-1 ">
                    <button className="btn btn-primary" type="submit">Add product</button>
                  </div>
                </form>
                
                {/* display product */}
                <table className="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product,key)=>{
                            return(
                                <tr key={key}>
                                    <td scope="row">{product.id.toString()}</td>
                                    <td>{product.name}</td>
                                    <td>{window.web3.utils.fromWei(product.price.toString(),'Ether')}</td>
                                    <td>{product.owner}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm ">Buy </button>
                                    </td>
                                </tr>
                            )
                        })}
                        
                       
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Main;