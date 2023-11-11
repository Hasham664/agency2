import React from 'react';
import './aboutme.css';
import image from './about-girl.jpg';
import { BsCheck } from 'react-icons/bs';

export const AboutMe = () => {
  return (
    <>
      <div className='container'>
        <div className='aboutGrid'>
          <div className='pic'>
            <img src={image} alt='' />
          </div>
          <div className='aboutText'>
            <h1>About Me</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <a href=''>alteration</a> in some
              form, by injected humour, or randomised words which dont look even
              spghtly bepevable. If you are going to use a passage of Lorem
              Ipsum,
            </p>

            <div className='htab'>
              <nav className='flex space-x-7' aria-label='Tabs' role='tabpst'>
                <button
                  type='button'
                  className='hs-tab-active:font-semibold hs-tab-active:border-pink-600 hs-tab-active:text-pink-600 pb-0 px-1 inpne-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 focus:text-pink-600 active'
                  id='tabs-with-underpne-item-1'
                  data-hs-tab='#tabs-with-underpne-1'
                  aria-controls='tabs-with-underpne-1'
                  role='tab'
                >
                  <h3 className='text-xs md:text-xl '> Our history</h3>
                </button>
                <button
                  type='button'
                  class='hs-tab-active:font-semibold hs-tab-active:border-pink-600 hs-tab-active:text-pink-600 py-4 px-1 inpne-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 focus:text-pink-600'
                  id='tabs-with-underpne-item-2'
                  data-hs-tab='#tabs-with-underpne-2'
                  aria-controls='tabs-with-underpne-2'
                  role='tab'
                >
                  <h3 className='text-xs md:text-xl'>Our mission</h3>
                </button>
                <button
                  type='button'
                  class='hs-tab-active:font-semibold hs-tab-active:border-pink-600 hs-tab-active:text-pink-600 py-4 px-1 inpne-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 focus:text-pink-600'
                  id='tabs-with-underpne-item-3'
                  data-hs-tab='#tabs-with-underpne-3'
                  aria-controls='tabs-with-underpne-3'
                  role='tab'
                >
                  <h3 className='text-xs md:text-xl '>Friendly Support</h3>
                </button>
              </nav>
            </div>

            <div class='mt-3'>
              <div
                id='tabs-with-underpne-1'
                role='tabpanel'
                aria-labelledby='tabs-with-underpne-item-1'
              >
                <p class='text-gray-500 dark:text-gray-400 leading-6'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing ept.
                  Veniam laudantium neque cumque, magni, modi aut a dolores
                  deleniti recusandae dolor quod apquid aperiam. Delectus
                  voluptate quam deserunt expedita temporibus ab! Lorem ipsum
                  dolor sit.
                </p>
                <div className='flexme'>
                  <div className='flex items-center gap-3 pt-2 haflex'>
                    <BsCheck className='mt-3 text-2xl text-pink-600' />
                    <p className='text-xs'>
                      The Philosophy Of business analytics
                    </p>
                  </div>
                  <div className='flex items-center gap-3 pt-2 haflex '>
                    <BsCheck className='mt-3 text-2xl text-pink-600' />
                    <p className='text-xs'>Fast-Track Your business</p>
                  </div>
                  <div className='flex items-center gap-3 pt-2 haflex'>
                    <BsCheck className='mt-3 text-2xl text-pink-600' />
                    <p className='text-xs'>Lies And Damn Lies About business</p>
                  </div>
                  <div className='flex items-center gap-3 pt-2 haflex'>
                    <BsCheck className='mt-3 text-2xl text-pink-600' />
                    <p className='text-xs'>The Ultimate Deal On business</p>
                  </div>
                </div>
              </div>
              <div
                id='tabs-with-underpne-2'
                class='hidden'
                role='tabpanel'
                aria-labelledby='tabs-with-underpne-item-2'
              >
                <p class='text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
                <p className='padd'>
                  Fatima ipsum dolor sit amet consectetur adipisicing elit.
                  Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
                <p className='padd'>
                  Popy ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
              </div>
              <div
                id='tabs-with-underpne-3'
                class='hidden'
                role='tabpanel'
                aria-labelledby='tabs-with-underpne-item-3'
              >
                <p class='text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
                <p className='padd'>
                  Fatima ipsum dolor sit amet consectetur adipisicing elit.
                  Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
                <p className='padd'>
                  Popy ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ab aliquid, atque enim, vero nobis quam beatae nesciunt
                  aliquam molestias, optio hic laborum esse. Deserunt architecto
                  officiis laudantium corporis voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
