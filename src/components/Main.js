import React, {Component} from 'react'

class Main extends Component{
    
    render(){
        return (
            <div className="col-md-6 p-2">
                <form class="form-group mb-5" novalidate>
                    <h3 className="text-secondary">Add Product</h3>
                    <label for="validationCustom01" class="form-label">Product name</label>
                    <input type="text" class="form-control"  required />
                    <label for="validationCustom01" class="form-label">Product price</label>
                    <input type="number" class="form-control" required />
                  <div class="mt-1 ">
                    <button class="btn btn-primary" type="submit">Add product</button>
                  </div>
                </form>
                
                {/* display product */}
                <table class="table table-responsive table-bordered">
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
                        <tr>
                            <td scope="row">1</td>
                            <td>Iphone X</td>
                            <td>1 Eth</td>
                            <td>0x123456789098765432</td>
                            <td>
                                <button class="btn btn-primary btn-sm ">Buy </button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td>Iphone X</td>
                            <td>1 Eth</td>
                            <td>0x123456789098765432</td>
                            <td>
                                <button class="btn btn-primary btn-sm ">Buy </button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td>Iphone X</td>
                            <td>1 Eth</td>
                            <td>0x123456789098765432</td>
                            <td>
                                <button class="btn btn-primary btn-sm ">Buy </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Main;