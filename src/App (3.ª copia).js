import React, { Component } from 'react';
//import logo from './logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';

//Components
import { Information, Header, HorizontalMenu, Contenido, Footer, InformationWelcome   } from './components'


import { Grid, Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';


//Styles
import './App.css';
import './styles.css'


//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';


/*
class Header extends Component {

	render() {
		return (
		
			<header className="headerContainer">
				<h1 className="headerContainer_h1"> HEADER! </h1>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		);
	}
}
*/

/*
class HorizontalMenu extends Component {

	render() {
	
		return (
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
					
						<h1> !!!!!!!!!!!!!!!!Menu!!!!!!!!!!!!!!!!!!!! </h1> 
				
			
			  </Col>

			</Row>			
		
		);
	
	}

}*/

/*
class Contenido extends Component {

	render() {
	
		return (
		
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
				<div className="contenidoContainer_p">
					<h1> Contenido del Sistema! </h1> 
				</div>
			
			  </Col>

			</Row>
			
		
		);
	
	}

}
*/

/*
class Footer extends Component {

	render() {
	
		return (
		
		
			<Row >

			  <Col xs={12} sm={3} md={2} lg={1}>
					
				<div className="footerContainer"> 
					
					Todos Los Derechos Reservados!!!
					
				</div>
			
			  </Col>

			</Row>
			
		
		)
	
	}

}
*/




class App extends Component {
  render() {
    return (
    
      <div className="App">


		<Grid fluid>
		
		  <Row className="informationContainer">
		  
			<Information>
			</Information>
			
		  </Row>


		  <Row className="horizontalMenuContainer">
		  
			<HorizontalMenu>
			</HorizontalMenu>

		  </Row>
		  

		  <Row className="headerContainer">
		  
			<Header>
			</Header>

		  </Row>



		  

		  <Row className="contenidoContainer">
		  
			<Contenido>
			</Contenido>

		  </Row>
		  

		  <Row className="footerContainer">
		  
			<Footer>
			</Footer>

		  </Row>
		  
		  
		  
/*
		  <Row className="show-grid">
			<Col xs={6} md={4}>
			  <code>{'<Col xs={6} md={4} />'}</code>
			</Col>
			<Col xs={6} md={4}>
			  <code>{'<Col xs={6} md={4} />'}</code>
			</Col>
			<Col xsHidden md={4}>
			  <code>{'<Col xsHidden md={4} />'}</code>
			</Col>
		  </Row>

		  <Row className="show-grid">
			<Col xs={6} xsOffset={6}>
			  <code>{'<Col xs={6} xsOffset={6} />'}</code>
			</Col>
		  </Row>

		  <Row className="show-grid">
			<Col md={6} mdPush={6}>
			  <code>{'<Col md={6} mdPush={6} />'}</code>
			</Col>
			<Col md={6} mdPull={6}>
			  <code>{'<Col md={6} mdPull={6} />'}</code>
			</Col>
		  </Row> 
		  */
		</Grid>;
		
        
      </div>
      
    );
  }
}

export default App;
