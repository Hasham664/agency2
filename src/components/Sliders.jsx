import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './slider.css';
import Fade from 'react-reveal/Fade';

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number HSlide1'>
            <div className='innerText'>
              <Fade bottom>
                <h1>AGENCY</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
                <div className='btn'>
                  <button>CONTACT US</button>
                </div>
              </Fade>
            </div>
          </div>
          <div className='keen-slider__slide number HSlide2'>
            <div className='innerText'>
              <Fade bottom>
                <h1>DEVELOPMENT</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
                <div className='btn'>
                  <button>CONTACT US</button>
                </div>
              </Fade>
            </div>
          </div>
          <div className='keen-slider__slide number HSlide3'>
            <div className='innerText'>
              <Fade bottom>
                <h1>MARKETING</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
                <div className='btn'>
                  <button>CONTACT US</button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='dots'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
