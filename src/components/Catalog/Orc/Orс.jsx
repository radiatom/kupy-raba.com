import React from 'react';
import './Orc.scss'

const Orc = ({kay, index, item}) => {
      return (
            <div className='orc'>
                  <img src={item.fotoLink} alt="фото орка" />
                  <div className='orc__information'> 
                        <h3>{item.name}</h3>
                        <p className='orc__information_description'>{item.description}</p>
                        <p className='orc__information_price'>Ціна: {item.price}грн.</p>
                        <button className='orc__information_btn'>В кошик</button>
                  </div>
            </div>
      );
}

export default Orc;
