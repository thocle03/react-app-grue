import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import image from './image.jpg';
import image2 from './image2.png';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import gruesData from './grues.json';


const App = () => {
  const [lowPrices, setLowPrices] = useState([]);
  const [mediumPrices, setMediumPrices] = useState([]);
  const [highPrices, setHighPrices] = useState([]);

  useEffect(() => {
    const lowPriceGrues = [];
    const mediumPriceGrues = [];
    const highPriceGrues = [];

    gruesData.forEach((grue) => {
      if (grue.prix < 60000) {
        lowPriceGrues.push(grue);
      } else if (grue.prix > 80000) {
        highPriceGrues.push(grue);
      } else {
        mediumPriceGrues.push(grue);
      }
    });

    setLowPrices(lowPriceGrues);
    setMediumPrices(mediumPriceGrues);
    setHighPrices(highPriceGrues);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#accueil">Vente de Grues</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#grus">Photos de Grues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#accessoires">Types d'Accessoires</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prix">Nos prix</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <div className='content'>
        <div id="accueil" className="container mt-4">
          <h1>Bienvenue dans notre boutique de Grues</h1>

        </div>

        <div id="grus" className="container mt-4">
          <h2>Photos de Grues</h2>
          <ul>

            {gruesData.map(grue => (
              <li key={grue.id}>

                <br></br><strong>{grue.nom}</strong> - Prix: {grue.prix} - Fabriquant: {grue.fabriquant} - Couleur: {grue.couleur}

                {(() => {
                  if (grue.id == 1) {
                    return (
                      <img className='fit-picture' src={image} alt="Logo" />

                    )
                  } else if (grue.id == 2) {
                    return (
                      <img className='fit-picture' src={image2} alt="Logo" />
                    )
                  } else {
                    return (
                      <div> photo pas encore disponible</div>
                    )
                  }
                })()}
              </li>
            ))}

          </ul>
          { }
          <br></br>

        </div>


        <div id="accessoires" className="container mt-4">
          <h2>Types d'Accessoires</h2>
          <p>accessoire grue lot 1</p>
          {<img className='fit-picture' src={image3} alt="Logo" />}

          <p>accessoire grue lot 2</p>
          {<img className='fit-picture' src={image4} alt="Logo" />}
        </div>

        <div id="prix" className="container mt-4">
          <h2>Nos prix</h2>
          <div>
            <h4>Nos grues premiers prix</h4>
            {lowPrices.map((grue) => (
              <p key={grue.id}><div className='nomGrue'>{grue.nom} </div><i>Prix: {grue.prix} euros</i></p>
            ))}
          </div>

          <div>
            <h4>Entre </h4>
            {mediumPrices.map((grue) => (
              <p key={grue.id}><div className='nomGrue2'>{grue.nom} </div> <i>Prix: {grue.prix} euros</i></p>
            ))}
          </div>

          <div>
            <h4>Les grues Premium</h4>
            {highPrices.map((grue) => (
              <p key={grue.id}><b><div className='nomGrue3'>{grue.nom} </div></b> <i>Prix: {grue.prix} euros</i></p>
            ))}
          </div>
        </div>



      </div>
      <br></br>
      <br></br>
      <footer>
        <span>tclerc (C) All rights Reserved</span>
      </footer>
    </div>

  );
};

export default App;
