import React, { Component } from 'react'

export class Resultado extends Component {

    mostrarResultado = () => {
        const { name, quotes } = this.props.cotizacion;
        if (!name) return null

        return (

            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                </div>

            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
        )
    }
}

export default Resultado
