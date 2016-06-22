import React from 'react'
import ReactDOM from 'react-dom'

//  Esto es un componente
/*
  class HelloWorld extends React.Component {
  constructor (props) {
    super(props)
  }
  render (){
    return(
      <h1>{this.props.mensaje}</h1>
    )
  }
  }
*/

// Puestos de avión

class PuestoDeAvion extends React.Component {
  renderPuesto(puesto, index, array) {
    var styles = {width: '50px', height: '50px', 'backgroundColor' : '#DFDFDF'}
    if (puesto.usado){ 
      Object.assign(styles, {'backgroundColor' : '#B1F16A'}) 
    }
    return (
      <div key={index} style={styles}></div>
    )
  }

  render () {
    return (
      <div>
        {this.props.puestos.map(this.renderPuesto)}
      </div>
    )
  }
}
var puestosArray =[
  {usado: true},
  {usado: false},
  {usado: true},
  {usado: false},
  {usado: false},
  {usado: true},
  {usado: false},
  {usado: true},
  {usado: false},
  {usado: false},
  {usado: true},
  {usado: false},
  {usado: false},
  {usado: false},
  {usado: true},
  {usado: false}
]
var App = document.getElementById('react-app')
ReactDOM.render(<PuestoDeAvion puestos={puestosArray} />, App)