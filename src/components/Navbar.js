import React, {component} from 'react'

class Navbar extends Component{
    
    render(){
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a
              className="navbar-brand col-sm-3 col-md-2 mr-0"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              MarketPlace 
            </a>
            <p className="text-white text-sm mt-3">{this.state.account} </p>
          </nav>
        );
    }
}

export default Navbar;