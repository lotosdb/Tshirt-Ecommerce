import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';
import Estampas from './../../assets/estampas.jpg';
import Camisetas from './../../assets/camisetas.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Camisetas})`
          }}
        >
          <Link to="/search/camisetas">
            Camisetas
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Estampas})`
          }}
        >
          <Link to="/search/estampados">
            Estampados
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
