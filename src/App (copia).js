import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {

	render() {
	
		return (
		
			<header>
				<h1> Titulo del Sistema! </h1> 
			</header>
			
		
		);
	
	}

}




/*
class Header extends Component {

	render() {

        const { headerLogo, headerTitle } = this.props;

        return(

            <header className="App-header">
                <img src={headerLogo} className="App-logo" alt="logo" />
                <h1 className="App-title"> {headerTitle} </h1>
            </header>

        );
    
	
	}

}*/


//export default Header;




class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        
        <Header>
			
        </Header>
        
        
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
