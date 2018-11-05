import React, { Component } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Resultado from './Components/Resultado'
import axios from 'axios';

class App extends Component {

  state = {
    monedas: [],
    cotizacion: {},
    monedaCotizada: '',
    cargando: false
  }

  async componentDidMount() {
    this.obtenerMonedas();
  }
  obtenerMonedas = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;

    await axios.get(url)
      .then(respuesta => {
        this.setState({
          monedas: respuesta.data.data
        })
      })
      .catch(error => {
        console.log(error)
      })

  }

  obtenerValoresCrypto = async (monedas) => {
    //console.log(monedas)
    const { moneda, crypto } = monedas;
    const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;
    console.log(url);

    await axios.get(url)
      .then(respuesta => {
        this.setState({
          cargando: true
        })
        setTimeout(() => {
          this.setState({
            cotizacion: respuesta.data.data,
            monedaCotizada: moneda,
            cargando: false
          })
        }, 3000);
      })
  }

  render() {

    const cargando = this.state.cargando;
    let resultado;

    if (cargando) {
      resultado = <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                  </div>
    } else {
      resultado = <Resultado
                     cotizacion={this.state.cotizacion}
                     monedaCotizada={this.state.monedaCotizada}
                  />
    }

    return (
      <div className="container">
        <Header
          title='Cotizador de Crypto monedas'
        />

        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Form
              monedas={this.state.monedas}
              obtenerValoresCrypto={this.obtenerValoresCrypto}
            />
              {resultado}
          </div>
        </div>
      </div>


    );
  }
}

export default App;
