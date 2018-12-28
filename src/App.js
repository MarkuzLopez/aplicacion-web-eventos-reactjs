import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {

  token = 'EBLAUDDDQVNH37LN4ACR';
  ordenar = 'date';

  state = { 
    categorias: [], 
    eventos: []
  }

  componentDidMount() { 
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => { 
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
    .then(respuesta => { 
      return respuesta.json();
    })
    .then(respuesta2 => {       
      this.setState({ 
        categorias: respuesta2.categories
      })
    })
  }

  obtenerEventos = async (busqueda) => { 
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&token=${this.token}&locale=es_ES`;    
    
    await fetch(url) 
      .then(respuestaEvento => { 
        return respuestaEvento.json();
      })
      .then(eventos => { 
        this.setState({ 
          eventos: eventos.events
        })  
      })
  }

  render() {
    return (
      <div className="App">
       <Header />
       <div className="uk-container" >
         <Formulario 
           categoriasForm = {this.state.categorias}
           obtenerEventos={this.obtenerEventos}
         />
         <Eventos 
           eventosApp={this.state.eventos}
         />
       </div>
      </div>
    );
  }
}

export default App;
