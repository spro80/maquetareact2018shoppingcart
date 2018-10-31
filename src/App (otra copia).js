import React, { Component } from 'react';
//import logo from './logo.svg';

//Responsive
import { Grid, Row, Col } from 'react-flexbox-grid';

//Components
import { Information, Header, HorizontalMenu, Contenido, Footer, InformationWelcome   } from './components'

import { Button } from 'react-bootstrap';

//Styles
import './App.css';
import './styles.css'


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
			  <Col xs={12} sm={3} md={2} lg={6} >
				Bienvenido ....
			  </Col>
			  
			  <Col xs={12} sm={3} md={2} lg={6} >
				Login - Cerrar Sesion
			  </Col>
			  
			</Row>


			
						
			<Row className="headerContainer" center="xs"  >
			
			  <Col xs={1} sm={1} md={1} lg={1} >
			  
				<Header >
				
				</Header>
				
			  </Col>
			
			</Row>


			<Row className="horizontalMenuContainer" center="xs"  >
			
			  <Col xs={1} sm={1} md={1} lg={1} >
			  
				<HorizontalMenu >
				
				</HorizontalMenu>
				
			  </Col>
			
			</Row>


			<Row className="contenidoContainer" center="xs"  >
			
			  <Col xs={1} sm={1} md={1} lg={1} >
			  
				<Contenido >
				
				</Contenido>
				
			  </Col>
			
			</Row>
			
			<Row className="footerContainer" center="xs"  >
			
			  <Col xs={1} sm={1} md={1} lg={1} >
			  
				<Footer >
				
				</Footer>
				
			  </Col>
			
			</Row>									
						
		  </Grid>
        
        
      </div>
    );
  }
}

export default App;
