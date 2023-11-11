import React from 'react';
import './news.css';
import Fade from 'react-reveal/Fade';

const News = () => {
  return (
    <>
      <div className='container'>
        <div className='news'>
          <h1>Latest News</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className='newBackPic'>
          <div className='backgroundPics'>
            {/* <Fade> */}
            <div className='hovcolor'>
              <div className='innerContent'>
                <p>Development</p>
                <h4>
                  <a href=''>Have You Heard? Agency Is Your Best Bet To Grow</a>
                </h4>
                <div className='buton'>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>

            {/* </Fade> */}
          </div>
          <div className='backgroundPics1'>
            <div className='hovcolor'>
              <div className='innerContent'>
                <p>Development Gallery</p>
                <h4>
                  <a href=''>Agency Works Only Under These Conditions</a>
                </h4>
                <div className='buton'>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='backgroundPics2'>
            <div className='hovcolor'>
              <div className='innerContent'>
                <p>Development</p>
                <h4>
                  <a href=''>Top 10 Tips To Grow Your Agency</a>
                </h4>
                <div className='buton'>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
