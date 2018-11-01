import React, { Component } from 'react'
import OptionSelect from './OptionSelect'

export class Form extends Component {

    monedaRef = React.createRef();
    cryptoRef = React.createRef();

    cotizarMonedas = (e) => {
        e.preventDefault();

        //Creo el objeto
        const cotizacion = {
            moneda:this.monedaRef.current.value,
            crypto: this.cryptoRef.current.value
        }

        //console.log(cotizacion);

        //enviar los props
        this.props.obtenerValoresCrypto(cotizacion);
    }


    render() {
        return (
            <div >
                <form onSubmit={this.cotizarMonedas}>
                    <div className="form-group">
                        <label>Moneda: </label>
                        <select ref={this.monedaRef} className="form-control">
                            <option value="" disabled defaultValue>
                                Elige tu Moneda
                        </option>
                            <option value="USD">Dolar Estadounidense</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="GBP">Libras</option>
                            <option value="EUR">Euros</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Crypto Moneda: </label>
                        <select ref={this.cryptoRef} className="form-control">
                            {Object.keys(this.props.monedas).map(key => (
                                <OptionSelect
                                    key={key}
                                    moneda={this.props.monedas[key]}
                                />
                            ))}

                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Cotizar" />

                    </div>

                </form>
            </div>
        )
    }
}

export default Form
