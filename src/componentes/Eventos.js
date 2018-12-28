import React, { Component } from 'react';
import Evento from './Evento';


class Eventos extends Component { 
    render() { 
        return ( 
            <div className="uk-child-width-1-3@m" uk-grid="true" >
                {
                    Object.keys(this.props.eventosApp).map(key => ( 
                        <Evento
                            key={key} 
                            info={this.props.eventosApp[key]}
                         />
                    ))
                }
            </div>
        )
    }
}

export default Eventos;