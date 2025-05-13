import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import '../../style/PaginaPrincipal.css';

const PaginaPrincipal = () => {
  return (
    <>
      <Nav />

      <main>
        <div className="background-image">
          <div className="content-box">
            <h1>SISTEMA DE COBROS MUNICIPAL</h1>
            <p className="subtitle">HONORABLE AYUNTAMIENTO CONSTITUCIONAL</p>
            <p className="city">IXTLÁN DE JUÁREZ</p>
            <p className="slogan">"INNOVACIÓN Y TRANSFORMACIÓN EN COMUNIDAD"</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PaginaPrincipal;
