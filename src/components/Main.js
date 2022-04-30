import React, {Component} from 'react'

class Main extends Component{
    
    render(){
        return (
            <div className="col-md-5">
                <form class="form-group" novalidate>
                    <h3 className="text-secondary">Add Product</h3>
                    <label for="validationCustom01" class="form-label">Product name</label>
                    <input type="text" class="form-control" id="validationCustom01" value="" required />
                    <label for="validationCustom01" class="form-label">Product price</label>
                    <input type="number" class="form-control" id="validationCustom01" value="" required />
                  <div class="mt-1 ">
                    <button class="btn btn-primary" type="submit">Add product</button>
                  </div>
                </form>
            </div>
        );
    }
}

export default Main;