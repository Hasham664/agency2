import React from 'react';
import './backimg.css';
const BackImgs = () => {
  return (
    <>
      <div className='backColor'>
        <div className='container'>
          <div className='project'>
            <h1>Our Project</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className='imagGrid'>
            <div className='hov'>
              <div className='backPic'>
                <div className='innerpic'>
                  <p>Development</p>
                  <a href=''>Getting tickets to the next show</a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
            <div className='hov'>
              <div className='backPic2'>
                <div className='innerpic'>
                  <p>Freelancer</p>
                  <a href=''>You can see your Portfolio</a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
            <div className='hov'>
              <div className='backPic3'>
                <div className='innerpic'>
                  <p>App Development</p>
                  <a href=''>The Language of Developer</a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
            <div className='hov'>
              <div className='backPic4'>
                <div className='innerpic2'>
                  <p>App Development</p>
                  <a className='wid' href=''>
                    How To Find The Right Agency For Your Specific Product
                  </a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
            <div className='hov'>
              <div className='backPic5'>
                <div className='innerpic'>
                  <p>Mobile App</p>
                  <a href=''> The Ultimate Guide To Agency</a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
            <div className='hov'>
              <div className='backPic6'>
                <div className='innerpic'>
                  <p>Graphic</p>
                  <a className='wid1' href=''>
                    How To Turn Your Agency From Zero To Hero
                  </a>
                  <button>CASE STUDY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackImgs;
