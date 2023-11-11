import React from 'react';
import './client.css';
import image11 from './client1.png';
import image12 from './client2.png';
import image13 from './client3.png';
import image14 from './client4.png';
import image15 from './client5.png';
import image16 from './client6.png';
import image17 from './client7.png';

// import image14 from './client4.png';

const Client = () => {
  return (
    <>
      <div className='clinetColor'>
        <div className='container'>
          <div className='client'>
            <h1>My Best Client</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className='clientPics'>
            <div className='clientImages'>
              <img src={image11} alt='' />
            </div>
            <div className='clientImages'>
              <img src={image12} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-8' src={image13} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-6' src={image14} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-4' src={image15} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-8' src={image13} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-6' src={image16} alt='' />
            </div>
            <div className='clientImages'>
              <img className='pt-6' src={image17} alt='' />
            </div>
            <div className='clientImages'>
              <img src={image11} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
