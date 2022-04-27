import React, { Component } from 'react';
import Web3 from 'web3';
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json';
class App extends Component {

  async componentWillMount(){
    await this.loadweb3()
    await this.loadData()
  }

  // load web3
  async loadweb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('non supported browser')
    }
  }

  // load blockchain data
  async loadData(){
    const web3 = window.web3
    const accounts = await window.web3.eth.getAccounts();
    this.setState({account : accounts[0]})
    const networkId = await web3.eth.net.getId()
    console.log(networkId)
    const abi = Marketplace.abi
    const address = Marketplace.networks[5777].address
    const marketplace = web3.eth.Contract(abi,address);
    console.log(marketplace)
  }

  // constructor
  constructor(props){
    super(props)
    this.state = {
      account : ''
    }
  }
  render() {
    return (
      <div>
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
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Marketplace</h1>
                
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
