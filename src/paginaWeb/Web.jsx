import React from 'react'
import Header from './Header'
import Contenido from './Contenido'
import Footer from './Footer'
import 'font-awesome/css/font-awesome.min.css';

function Web() {
  return (
    <>
    <Header/>
    <Contenido/>
    <Footer RRSS={[{nombre:"Facebook",url:"hola"},{nombre:"Instagram",url:"adios"},{nombre:"Linkedin",url:"otra"},{nombre:"Google",url:"google"}]}/>
    </>
  )
}

export default Web